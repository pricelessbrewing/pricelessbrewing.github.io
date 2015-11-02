(function($) {
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
      VolChilled = (VolPost / 1.043841336) - LossTrub,
      VolPackaged = VolChilled - LossFermTrub - (DHop * Gabs),
      GalH = 294.118334834 / (KettleID * KettleID),
      HTot = GalH * WaterTot,
      HStart = GalH * VolStart,
      HStrike = GalH * VolStrike,
      HMash = GalH * VolMash,
      HPre = GalH * VolPre,
      HChilled = GalH * VolChilled,
      MashThick = VolStart * 4 / GBill,
      VolMinSparge = Math.max(0, ((WaterTot + GBill * 0.08) * MashAdj) - (PotSize - 0.01)),
      HPost = GalH * VolPost,
      FirstRun = (VolStart - LossGrain) * MashAdj,
      HFirstRun = FirstRun * GalH,
      SecRun = ((VolSparge ) ) ,
      HSecRun = SecRun * GalH,
      EBoil = (0.0058 * KettleID * KettleID) - (0.0009 * KettleID) + 0.0038,
      MAGPot = 36,
      MAGFine = 0.795,
      MAGMoist = 0.04,
      MAGEstConv = 0.95,
      MAGRunRatio = Math.max(SecRun / FirstRun, 0),
      SGSuccrose = 46.173,
      MAGDryG = (1 - MAGMoist) * GBill,
      MAGVolWater = GBill * MAGMoist,
      MAGWtWater = MAGVolWater,
      MAGTotWater = WaterTot * 8.3304,
      ExPot = MAGPot / SGSuccrose,
      ExConv = ExPot * MAGEstConv,
      TotalPot = GBill * MAGPot * (1 - MAGMoist),
      MashWaterWt1 = VolStart * 8.3304,
        SugarTot = MAGDryG * ExPot;

    var MSW1 = MAGDryG * ExConv,
      Plato1 = (100 * MSW1) / (MSW1 + MashWaterWt1),
      SG1 = 1 + (Plato1 / (258.6 - 0.879551 * Plato1)),
      RW1 = (SG1 * ( FirstRun / 1.022494888 ) * 8.3304),
      RS1 = (RW1 * Plato1) / 100,
      RCWtr1 = RW1 - RS1,
      RetS1 = MSW1 - RS1,
      RetWat1 = VolStart * 8.3304 - RCWtr1,
      MWT2 = (( VolSparge * 8.3304) + RetWat1),
      TrueAbs1 = (RetS1 + RetWat1) / (SG1 * 8.3304 * GBill),
      MashSugarWt2 = RetS1,
      Plato2 = (100 * MashSugarWt2) / (MashSugarWt2 + MWT2),
      SG2 = 1 + (Plato2 / (258.6 - 0.879551 * Plato2)),
      RCWT2 = SG2 * (SecRun / 1.022494888) * 8.3304,
      RS2 = (RCWT2 * Plato2) / 100,
      RecW2 = RCWT2 - RS2,
      RetS2 = MashSugarWt2 - RS2,
      RetWat2 = MWT2 - RecW2,
      TrueAbs2 = (RetS2 + RetWat2) / (SG2 * 8.3304 * GBill),
      RCSTot = RS1 + RS2,
      EstLauterEff = RCSTot / MSW1,
      EstMashEff = EstLauterEff * MAGEstConv,
      PlatoPre = (100 * RCSTot) / (RCSTot + RecW2 + RCWtr1),
      SGPre = 1 + (PlatoPre / (258.6 - 0.879551 * PlatoPre)),
      TotalPoints = ((VolPre / 1.044) * (SGPre - 1) * 1000),
        PlatoPost = (100 * RCSTot) / (RCSTot + RecW2 + RCWtr1 - (BoilRate * 8.3304 * (BoilTime/60))),
        SGPost = 1 + (PlatoPost / (258.6 - 0.879551 * PlatoPost));

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
    $('#MAGPot').text(MAGPot.toFixed(2));
    $('#MAGFine').text(MAGFine.toFixed(2));
    $('#MAGMoist').text(MAGMoist.toFixed(2));
    $('#MAGEstConv').text(MAGEstConv.toFixed(2));
    $('#MAGRunRatio').text(MAGRunRatio.toFixed(2));
    $('#SGSuccrose').text(SGSuccrose.toFixed(2));
    $('#MAGDryG').text(MAGDryG.toFixed(2));
    $('#MAGVolWater').text(MAGVolWater.toFixed(2));
    $('#MAGWtWater').text(MAGWtWater.toFixed(2));
    $('#MAGTotWater').text(MAGTotWater.toFixed(2));
    $('#ExPot').text(ExPot.toFixed(2));
    $('#ExConv').text(ExConv.toFixed(2));
    $('#TotalPot').text(TotalPot.toFixed(2));
    $('#MashWaterWt1').text(MashWaterWt1.toFixed(2));
    $('#MWT2').text(MWT2.toFixed(2));
    $('#MSW1').text(MSW1.toFixed(2));
    $('#Plato1').text(Plato1.toFixed(3));
    $('#SG1').text(SG1.toFixed(4));
    $('#RW1').text(RW1.toFixed(2));
    $('#RS1').text(RS1.toFixed(2));
    $('#RCWtr1').text(RCWtr1.toFixed(2));
    $('#RetS1').text(RetS1.toFixed(2));
    $('#RetWat1').text(RetWat1.toFixed(2));
    $('#TrueAbs1').text(TrueAbs1.toFixed(3));
    $('#MashSugarWt2').text(MashSugarWt2.toFixed(2));
    $('#Plato2').text(Plato2.toFixed(3));
    $('#SG2').text(SG2.toFixed(4));
    $('#RecW2').text(RecW2.toFixed(2));
    $('#RS2').text(RS2.toFixed(2));
    $('#RCWT2').text(RCWT2.toFixed(2));
    $('#RetS2').text(RetS2.toFixed(2));
    $('#RetWat2').text(RetWat2.toFixed(2));
    $('#TrueAbs2').text(TrueAbs2.toFixed(3));
    $('#RCSTot').text(RCSTot.toFixed(2));
    $('#EstLauterEff').text(EstLauterEff.toFixed(2));
    $('#EstMashEff').text(EstMashEff.toFixed(2));
    $('#PlatoPre').text(PlatoPre.toFixed(3));
    $('#SGPre').text(SGPre.toFixed(4));
    $('#BoilRate').text(BoilRate.toFixed(4));
    $('#TotalPoints').text(TotalPoints.toFixed(0));
    $('#PlatoPost').text(PlatoPost.toFixed(0));
    $('#SGPost').text(SGPost.toFixed(4));
        $('#SugarTot').text(SugarTot.toFixed(4));


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

  function validateField(field) {
    $field = $(field);
    if ($field.val().match(/^d*(.\d+)?/)) {
      $field.parents('div.control-group:first').removeClass('error');
      return true;
    }
    $field.parents('div.control-group:first').addClass('error');
    return false;
  }
  $(document).ready(function() {
    $('#calcForm').delegate('input[type=text]', 'change', function() {
      if (validateField(this)) {
        updateCalc();
      }
    }).submit(function(e) {
      e.defaultPrevented;
      updateCalc();
    });
    updateCalc();
    $('#GBill').focus();
  });
})(jQuery);
