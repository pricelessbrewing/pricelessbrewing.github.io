(function ($) {
  function allFieldsValid() {
    var fields = [
      'BatchVol',
      'GBill',
      'HBill',
      'DHop',
      'BoilTime',
      'BoilRate',
      'TempGrain',
      'TempMash',
      'VolSparge',
      'PotSize',
      'KettleID',
      'LossTrub',
      'LossFermTrub',
      'HChilled',
      'VolPackaged',
      'Gabs',
      'Habs'
    ];
    for (i = 0; i < fields.length; i++) {
      if (!$('#' + fields[i]).val().match(/^d*(.\d+)?/)) {
        return false;
      }
    }
    return true;
  }
  function updateCalc() {
    if (!allFieldsValid()) {
      return;
    }
    var BatchVol = parseFloat($('#BatchVol').val()),
    GBill = parseFloat($('#GBill').val()),
    HBill = parseFloat($('#HBill').val()),
    DHop = parseFloat($('#DHop').val()),
    BoilTime = parseFloat($('#BoilTime').val()),
    BoilRate = parseFloat($('#BoilRate').val()),
    TempGrain = parseFloat($('#TempGrain').val()),
    TempMash = parseFloat($('#TempMash').val()),
    VolSparge = parseFloat($('#VolSparge').val()),
    PotSize = parseFloat($('#PotSize').val()),
    KettleID = parseFloat($('#KettleID').val()),
    LossTrub = parseFloat($('#LossTrub').val()),
    Gabs = parseFloat($('#Gabs').val()),
    Habs = parseFloat($('#Habs').val()),
    MashAdj = parseFloat($('#MashAdj').val()),
    StrikeAdj = parseFloat($('#StrikeAdj').val()),
    LossFermTrub = parseFloat($('#LossFermTrub').val()),
    LossBoil = BoilTime * BoilRate / 60,
    LossHop = HBill * Habs,
    LossGrain = GBill * Gabs,
    LossTot = LossGrain + LossHop + LossBoil + LossTrub,
    WaterTot = BatchVol + LossTot,
    VolStart = (WaterTot - VolSparge),
    TempStrike = TempMash + (0.05 * GBill / VolStart) * (TempMash - TempGrain),
    MashAdj = 1.022494888,
    //( 4.13643 * Math.pow(10,-16) * Math.pow($('#TempMash').val(),6) - 4.05998 * Math.pow(10,-13) * Math.pow($('#TempMash').val(),5) + 1.61536 * Math.pow(10,-10) * Math.pow($('#TempMash').val(),4) - 3.44854 * Math.pow(10,-8) * Math.pow($('#TempMash').val(),3) + 0.00000532769 * Math.pow($('#TempMash').val(),2) - 0.000292675 * $('#TempMash').val() + 1.00493),  
    StrikeAdj = 1.025641026,
    //( 4.13643 * Math.pow(10,-16) * Math.pow($('#TempStrike').val(),6) - 4.05998 * Math.pow(10,-13) * Math.pow($('#TempStrike').val(),5) + 1.61536 * Math.pow(10,-10) * Math.pow($('#TempStrike').val(),4) - 3.44854 * Math.pow(10,-8) * Math.pow($('#TempStrike').val(),3) + 0.00000532769 * Math.pow($('#TempStrike').val(),2) - 0.000292675 * $('#TempStrike').val() + 1.00493),
    VolStrike = VolStart * StrikeAdj,
    LossHop = HBill * Habs,
    LossGrain = GBill * Gabs,
    VolMash = (VolStart + GBill * 0.08) * MashAdj,
    VolPre = (WaterTot - LossGrain) * 1.043841336,
    VolPost = (WaterTot - LossTot + LossTrub) * 1.043841336,
    VolChilled = ( VolPos / 1.043841336 ) - LossTrub,
    VolPackaged = VolChilled - LossFermTrub - ( DHop * Gabs ),
    GalH = 294.118334834 / (KettleID * KettleID),
    HTot = GalH * WaterTot,
    HStart = GalH * VolStart,
    HStrike = GalH * VolStrike,
    HMash = GalH * VolMash,
    HPre = GalH * VolPre,
    HChilled = GalH * VolChilled,
    MashThick = VolStart * 4 / GBill,
    VolMinSparge = ( ( WaterTot + GBill * 0.08) * MashAdj ) - ( ( PotSize -0.01 ) ), 
    HPost = GalH * VolPost;
    
    
    // console.log(VolStrike, WaterTot, MashThick, TempStrike);
    $('#WaterTot').text(WaterTot.toPrecision(3));
    $('#VolStrike').text(VolStrike.toPrecision(3));
    $('#LossBoil').text(LossBoil.toPrecision(3));
    $('#LossHop').text(LossHop.toPrecision(3));
    $('#LossGrain').text(LossGrain.toPrecision(3));
    $('#LossTot').text(LossTot.toPrecision(3));
    $('#LossFermTrub').text(LossFermTrub.toPrecision(3));    
    $('#VolStart').text(VolStart.toPrecision(3));
    $('#VolMash').text(VolMash.toPrecision(3));
    $('#VolPre').text(VolPre.toPrecision(3));
    $('#VolPost').text(VolPost.toPrecision(3));
    $('#TempStrike').text(TempStrike.toPrecision(4));
    $('#MashAdj').text(MashAdj.toPrecision(12));
    $('#Strikeadj').text(StrikeAdj.toPrecision(12));
    $('#GalH').text(GalH.toPrecision(5));
    $('#HTot').text(HTot.toPrecision(5));
    $('#HStart').text(HStart.toPrecision(5));
    $('#HStrike').text(HStrike.toPrecision(5));
    $('#HMash').text(HMash.toPrecision(5));
    $('#HPre').text(HPre.toPrecision(5));
    $('#HPost').text(HPost.toPrecision(5));
    $('#DHop').text(DHop.toPrecision(5));    
    $('#HChilled').text(HChilled.toPrecision(5));
    $('#MashThick').text(MashThick.toPrecision(3));
    $('#VolMinSparge').text(VolMinSparge.toPrecision(3));
    $('#VolChilled').text(VolChilled.toPrecision(3));
    $('#VolPackaged').text(VolPackaged.toPrecision(3));
  }
  function validateField(field) {
    $field = $(field);
    if ($field.val().match(/^d*(.\d+)?/)) {
      $field.parents('div.control-group:first').removeClass('error');
      return true;
    }
    $field.parents('div.control-group:first').addClass('error');
    return false;
  }
  $(document).ready(function () {
    $('#calcForm').delegate('input[type=text]', 'change', function () {
      if (validateField(this)) {
        updateCalc();
      }
    }).submit(function (e) {
      e.defaultPrevented;
      updateCalc();
    });
    updateCalc();
    $('#GBill').focus();
  });
}) (jQuery);
