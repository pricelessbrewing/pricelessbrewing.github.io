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
      'Habs',
      'EBoil',
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
    VolChilled = ( VolPost / 1.043841336 ) - LossTrub,
    VolPackaged = VolChilled - LossFermTrub - ( DHop * Gabs ),
    GalH = 294.118334834 / (KettleID * KettleID),
    HTot = GalH * WaterTot,
    HStart = GalH * VolStart,
    HStrike = GalH * VolStrike,
    HMash = GalH * VolMash,
    HPre = GalH * VolPre,
    HChilled = GalH * VolChilled,
    MashThick = VolStart * 4 / GBill,
    VolMinSparge = Math.max(0,((WaterTot + GBill * 0.08) * MashAdj) - (PotSize - 0.01 )), 
    HPost = GalH * VolPost,
    FirstRun = ( VolStart - LossGrain) * MashAdj,
    HFirstRun = FirstRun * GalH,
    SecRun = ( ( VolPre / 1.043841336 ) * MashAdj) - FirstRun,
    HSecRun = SecRun * GalH,
    EBoil = (0.0058 * KettleID * KettleID) - (0.0009 * KettleID) + 0.0038,
    MAGPot = 36,
    MAGFine = 79.5%,
    MagMoist = 0.04,
    MagEstConv = 95%,
    MagRunRatio = FirstRun / SecondRun,
    DenseWater = 8.3304,
    SGSuccrose = 46.173
    MAGDryG = (1-MAGMoist) * GBill,
    MAGVolWater = GBill * MAGMoist,
    MAGWtWater = MAGVolWater * DenseWater,
    MAGTotWater = WaterTot * DenseWater,
    ExPot = MAGPot / SGSuccrose,
    ExConv = ExPot * MAGEstConv, 
    TotalPot = GBill * MAGPot * ( 1 - MAGMoist ),
    MashWaterWt1 = VolStart * WaterDense,
    MashWaterWt2 = VolSparge * WaterDense,
    MashSugarWt1 = MAGDryG * ExConv,
    Plato1 = ( 100 * MashSugarWt1 ) / ( MashSugarWt1 + MashWaterWt1),
    SG1 = (1 + ( Plato1 / ( 258.6 - ( ( Plato1/258.2*227.1)))))
    MashSugarwt2 = RetSugar1,
    
    
    // console.log(VolStrike, WaterTot, MashThick, TempStrike);
    $('#WaterTot').text(WaterTot.toFixed(2));
    $('#VolStrike').text(VolStrike.toFixed(2));
    $('#LossBoil').text(LossBoil.toFixed(2));
    $('#LossHop').text(LossHop.toFixed(2));
    $('#LossGrain').text(LossGrain.toFixed(2));
    $('#LossTot').text(LossTot.toFixed(2));
    $('#LossFermTrub').text(LossFermTrub.toFixed(2));    
    $('#VolStart').text(VolStart.toFixed(2));
    $('#VolMash').text(VolMash.toFixed(2));
    $('#VolPre').text(VolPre.toFixed(2));
    $('#VolPost').text(VolPost.toFixed(2));
    $('#TempStrike').text(TempStrike.toFixed(2));
    $('#MashAdj').text(MashAdj.toFixed(12));
    $('#Strikeadj').text(StrikeAdj.toFixed(12));
    $('#GalH').text(GalH.toFixed(3));
    $('#HTot').text(HTot.toFixed(2));
    $('#HStart').text(HStart.toFixed(2));
    $('#HStrike').text(HStrike.toFixed(2));
    $('#HMash').text(HMash.toFixed(2));
    $('#HPre').text(HPre.toFixed(2));
    $('#HPost').text(HPost.toFixed(2));
    $('#DHop').text(DHop.toFixed(2));    
    $('#HChilled').text(HChilled.toFixed(2));
    $('#MashThick').text(MashThick.toFixed(2));
    $('#VolMinSparge').text(VolMinSparge.toFixed(2));
    $('#VolChilled').text(VolChilled.toFixed(2));
    $('#VolPackaged').text(VolPackaged.toFixed(2));
    $('#FirstRun').text(FirstRun.toFixed(2));
    $('#HFirstRun').text(HFirstRun.toFixed(2));
    $('#HSecRun').text(HSecRun.toFixed(2));
    $('#SecRun').text(SecRun.toFixed(2));
    $('#EBoil').text(EBoil.toFixed(2));
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
