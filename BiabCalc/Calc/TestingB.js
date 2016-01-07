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
      MeasMashGrav = parseFloat($('#MeasMashGrav').val()),
      MeasPrebGrav = parseFloat($('#MeasPrebGrav').val()),
      MAGEstConv = parseFloat($('#MAGEstConv').val()),
      LossTunTrub = parseFloat($('#LossTunTrub').val()),
      HBill = parseFloat($('#HBill').val()),
      DHop = parseFloat($('#DHop').val()),
      MeasPrebVolume = parseFloat($('#MeasPrebVolume').val()),
      TempSparge = parseFloat($('#TempSparge').val()),
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
      MashThickness = parseFloat($('#MashThickness').val()),
      LossBoil = BoilTime * BoilRate / 60,
      LossHop = HBill * Habs,
      LossGrain = GBill * Gabs,
      LossTot = LossGrain + LossHop + LossBoil + LossTrub + LossTunTrub,
      WaterTot = BatchVol + LossTot,
       MashThick = (WaterTot - VolSparge) * 4 / GBill;
      
        if (MashThickness == 0) {
    var VolSparge2 = 0;
} else {
    VolSparge2 = WaterTot - (GBill*MashThickness/4),
      MashThick = MashThickness,
      VolSparge = VolSparge2;
}
    
      var VolStart = (WaterTot - VolSparge),
      TempStrike = TempMash + (0.05 * GBill / VolStart) * (TempMash - TempGrain),
      MashAdj = 1.022494888,
      //( 4.13643 * Math.pow(10,-16) * Math.pow($('#TempMash').val(),6) - 4.05998 * Math.pow(10,-13) * Math.pow($('#TempMash').val(),5) + 1.61536 * Math.pow(10,-10) * Math.pow($('#TempMash').val(),4) - 3.44854 * Math.pow(10,-8) * Math.pow($('#TempMash').val(),3) + 0.00000532769 * Math.pow($('#TempMash').val(),2) - 0.000292675 * $('#TempMash').val() + 1.00493),  
      StrikeAdj = 1.025641026,
      //( 4.13643 * Math.pow(10,-16) * Math.pow($('#TempStrike').val(),6) - 4.05998 * Math.pow(10,-13) * Math.pow($('#TempStrike').val(),5) + 1.61536 * Math.pow(10,-10) * Math.pow($('#TempStrike').val(),4) - 3.44854 * Math.pow(10,-8) * Math.pow($('#TempStrike').val(),3) + 0.00000532769 * Math.pow($('#TempStrike').val(),2) - 0.000292675 * $('#TempStrike').val() + 1.00493),
      VolStrike = VolStart * StrikeAdj,
      LossHop = HBill * Habs,
      LossGrain = GBill * Gabs,
      VolMash = (VolStart + GBill * 0.08) * MashAdj,
      VolPre = (WaterTot - LossGrain - LossTunTrub) * 1.043841336,
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
      VolMinSparge = Math.max(0, ((WaterTot + GBill * 0.08) * MashAdj) - (PotSize - 0.1)),
      HPost = GalH * VolPost,
      FirstRun = (VolStart - LossGrain - LossTunTrub) * MashAdj,
      HFirstRun = FirstRun * GalH,
      SecRun = ((VolSparge)),
      HSecRun = SecRun * GalH,
      EBoil = (0.0058 * KettleID * KettleID) - (0.0009 * KettleID) + 0.0038,
      MAGPot = 36,
      MAGFine = 0.7797,
      MAGMoist = 0.04,
      MAGRunRatio = Math.max(SecRun / FirstRun, 0),
      SGSuccrose = 46.173,
      MAGDryG = (1 - MAGMoist) * GBill,
      MAGVolWater = GBill * MAGMoist,
      MAGWtWater = MAGVolWater,
      MAGTotWater = WaterTot * 8.3304,
      ExPot = MAGPot / SGSuccrose,
      ExConv = ExPot * (MAGEstConv/100),
      TotalPot = GBill * MAGPot * (1 - MAGMoist),
      MashWaterWt1 = (VolStart * 8.3304) + (GBill - MAGDryG),
      SugarTot = MAGDryG * ExPot,
      MSW1 = MAGDryG * ExConv,
      Plato1 = (100 * MSW1) / (MSW1 + MashWaterWt1),
      SG1 = 1 + (Plato1 / (258.6 - 0.879551 * Plato1)),
      RW1 = (SG1 * (FirstRun / 1.022494888) * 8.3304),
      RS1 = (RW1 * Plato1) / 100,
      RCWtr1 = RW1 - RS1,
      RetS1 = MSW1 - RS1,
      RetWat1 = VolStart * 8.3304 - RCWtr1,
      MWT2 = ((VolSparge * 8.3304) + RetWat1),
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
      EstLauterEff = 100 * (RCSTot / MSW1),
      EstMashEff = EstLauterEff * MAGEstConv/100,
      PlatoPre = (100 * RCSTot) / (RCSTot + RecW2 + RCWtr1),
      SGPre = 1 + (PlatoPre / (258.6 - 0.879551 * PlatoPre)),
      RetSF = RetS2,
      EstConvWt = SugarTot * MAGEstConv/100,
      TotalPoints = ((VolPre / 1.044) * (SGPre - 1) * 1000),
      PlatoPost = (100 * RCSTot) / (RCSTot + RecW2 + RCWtr1 - (BoilRate * 8.3304 * (BoilTime / 60))),
      SGPost = 1 + (PlatoPost / (258.6 - 0.879551 * PlatoPost)),
      TempMashout = (TempMash * (GBill + 5 * (GBill * Gabs)) + (5 * TempSparge * VolSparge)) / (GBill + 5 * (VolSparge + (GBill * Gabs))),
      MeasMashPlato = -616.868 + (1111.14 * MeasMashGrav) - (630.272 * MeasMashGrav * MeasMashGrav) + (135.997 * MeasMashGrav * MeasMashGrav * MeasMashGrav),
      MeasGabs = Math.min(MeasPrebVolume, (WaterTot - (MeasPrebVolume) / 1.043841336) / GBill),
      MeasMashWT = -((VolStart * 8.335 + (GBill * 0.04)) * MeasMashPlato) / (-100 + MeasMashPlato),
      MeasConv = Math.max(100 * MeasMashWT / SugarTot, 0),
      MeasPrebPlato = -616.868 + (1111.14 * MeasPrebGrav) - (630.272 * MeasPrebGrav * MeasPrebGrav) + (135.997 * MeasPrebGrav * MeasPrebGrav * MeasPrebGrav),
      MeasPrebWortWT = MeasPrebGrav * (MeasPrebVolume / 1.043841336) * 8.3304,
      MeasPrebSugarWT = (MeasPrebWortWT * MeasPrebPlato) / 100,
      MeasPrebWaterWT = MeasPrebWortWT - MeasPrebSugarWT,
      MeasPrebWT = -(((MeasPrebWaterWT)) * MeasPrebPlato) / (-100 + MeasPrebPlato),
      MeasMashEff = Math.max(0, 100 * MeasPrebWT / SugarTot),
      MeasLautWT = Math.max(0, MeasPrebWT - MeasMashWT),
      MeasLautEff = 100 * MeasPrebWT / EstConvWt,
      EstBrewhEff = VolChilled / (VolPost / 1.043841336) * EstMashEff,
      MeasBrewhEff = VolChilled / (VolPost / 1.043841336) * MeasMashEff,
      MeasPrebGrav2 = MeasPrebGrav,
      MeasMashGrav2 = MeasMashGrav,

      MeasMashPlato2 = -616.868 + (1111.14 * MeasMashGrav2) - (630.272 * MeasMashGrav2 * MeasMashGrav2) + (135.997 * MeasMashGrav2 * MeasMashGrav2 * MeasMashGrav2),
      MeasMashWortWT = MeasMashGrav2 * (VolStart - (GBill * MeasGabs)) * 8.3304,
      MeasMashSugarWT = (MeasMashWortWT * MeasMashPlato2) / 100,
      MeasSecRunWT = MeasPrebSugarWT - MeasMashSugarWT,
      MeasSecRunPlato = (100 * MeasSecRunWT) / (MeasSecRunWT + VolSparge * 8.3304),
      MeasSecRunSG = 1 + (MeasSecRunPlato / (258.6 - 0.879551 * MeasSecRunPlato)),
      MeasPostSG = 1 + ((((MeasPrebGrav2 - 1) * 1000) * (MeasPrebVolume / 1.043841336) / (VolPost / 1.043841336)) / 1000),
           MeasPostPlato = -616.868 + (1111.14 * MeasPostSG) - (630.272 * MeasPostSG * MeasPostSG) + (135.997 * MeasPostSG * MeasPostSG * MeasPostSG);
    
    if (MeasPostSG > 1) {
    var YeastPitch = .75*3785.41*BatchVol*MeasPostPlato/1000;
} else {
     var YeastPitch = .75*3785.41*BatchVol*PlatoPost/1000;
}
    

    // console.log(VolStrike, WaterTot, MashThick, TempStrike);
    $('#WaterTot').text(WaterTot.toFixed(2));
        $('#YeastPitch').text(YeastPitch.toFixed(0));
    $('#MeasConv').text(MeasConv.toFixed(1));
    $('#MeasSecRunWT').text(MeasSecRunWT.toFixed(1));
    $('#MeasSecRunWT').text(MeasSecRunWT.toFixed(1));
    $('#MeasMashSugarWT').text(MeasMashSugarWT.toFixed(1));
    $('#MeasSecRunSG').text(MeasMashWortWT.toFixed(1));
    $('#MeasMashEff').text(MeasMashEff.toFixed(1));
    $('#MeasPostSG').text(MeasPostSG.toFixed(4));
    $('#MeasMashGrav2').text(MeasMashGrav2.toFixed(4));
    $('#MeasSecRunSG').text(MeasSecRunSG.toFixed(4));
    $('#MeasPrebSugarWT').text(MeasPrebSugarWT.toFixed(4));
    $('#MeasSecRunPlato').text(MeasSecRunPlato.toFixed(4));
    $('#MeasGabs').text(MeasGabs.toFixed(3));
    $('#MeasBrewhEff').text(MeasBrewhEff.toFixed(1));
    $('#MeasMashWT').text(MeasMashWT.toFixed(1));
    $('#MeasMashEff').text(MeasMashEff.toFixed(1));
    $('#EstBrewhEff').text(EstBrewhEff.toFixed(1));
    $('#MeasPrebWT').text(MeasPrebWT.toFixed(2));
    $('#MeasLautEff').text(MeasLautEff.toFixed(1));
    $('#MeasLautWT').text(MeasLautWT.toFixed(2));
    $('#EstConvWt').text(EstConvWt.toFixed(2));
    $('#MeasMashPlato').text(MeasMashPlato.toFixed(2));
    $('#MeasPrebPlato').text(MeasPrebPlato.toFixed(2));
    $('#TempMashout').text(TempMashout.toFixed(2));
    $('#VolStrike').text(VolStrike.toFixed(2));
    $('#VolSparge2').text(VolSparge2.toFixed(2));
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
    $('#MeasPrebGrav2').text(MeasPrebGrav2.toFixed(4));
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
    $('#EstLauterEff').text(EstLauterEff.toFixed(1));
    $('#EstMashEff').text(EstMashEff.toFixed(1));
    $('#PlatoPre').text(PlatoPre.toFixed(3));
    $('#SGPre').text(SGPre.toFixed(4));
    $('#BoilRate').text(BoilRate.toFixed(4));
    $('#TotalPoints').text(TotalPoints.toFixed(0));
    $('#PlatoPost').text(PlatoPost.toFixed(0));
    $('#SGPost').text(SGPost.toFixed(4));
    $('#SugarTot').text(SugarTot.toFixed(4));
    $('#RetSF').text(RetSF.toFixed(4));

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
