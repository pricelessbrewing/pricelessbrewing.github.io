$(document).ready(function() {
  var now = new Date();
  var today = (now.getMonth() + 1) + '-' + now.getDate();
  $('#Brewday').val(today);
});

function toggleDiv(divId) {

   $("#"+divId).toggle();

}


function popitup(url) {
	newwindow=window.open(url,'_blank');
	if (window.focus) {newwindow.focus()}
	return false;
}




$(document)
  .one('focus.textarea', '.autoExpand', function() {
    var savedValue = this.value;
    this.value = '';
    this.baseScrollHeight = this.scrollHeight;
    this.value = savedValue;
  })
  .on('input.textarea', '.autoExpand', function() {
    var minRows = this.getAttribute('data-min-rows') | 8,
      rows;
    this.rows = minRows;
    console.log(this.scrollHeight, this.baseScrollHeight);
    rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 800);
    this.rows = minRows + rows;
  });

var BatchVol, BoilRate, coefficient, DHop, EBoil, EstBrewhEff, EstConvWt, EstLauterEff, EstMashEff, ExConv, ExPot, FirstRun, Gabs, GalH, GBill,
  Habs, HBill, HChilled, HFirstRun, HMash, HPost, HPre, HSecRun, HStart, HStrike, HTot, KettleID, LossBoil, LossFermTrub, LossGrain, LossHop, LossTot, LossTrub,
  MAGDryG, MAGEstConv, MAGFine, MAGMoist, MAGPot, MAGRunRatio, MAGTotWater, MAGVolWater, MAGWtWater, MashAdj, MashSugarWt2, MashThick, MashWaterWt1,
  MeasBrewhEff, MeasConv, MeasGabs, MeasLautEff, MeasLautWT, MeasMashEff, MeasMashGrav2, MeasMashPlato, MeasMashSugarWT, MeasMashWortWT, MeasMashWT,
  MeasPostSG, MeasPrebGrav2, MeasPrebPlato, MeasPrebSugarWT, MeasPrebWT, MeasSecRunPlato, MeasSecRunSG, MeasSecRunWT,
  MSW1, MWT2, Plato1, Plato2, PlatoPost, PlatoPre, PotSize, preradio, radio, RCSTot, RCWT2, RCWtr1, RecW2, RetS1, RetS2, RetSF, RetWat1, RetWat2, RS1, RS2, RW1, SecRun, SG1, SG2, SGPost, SGPre, SGSuccrose,
  StrikeAdj, SugarTot, Temp_Coeff, TempGrain, TempMash, TempMashout, TempSparge, TempStrike, TotalPoints, TotalPot, TrueAbs1, TrueAbs2, Units_BoilOff, Units_DHop, Units_EBoil, Units_FirstRun, Units_FTrub_Volume,
  Units_Gabs, Units_GallonHeight, Units_GBill, Units_GTemp, Units_Habs, Units_HChilled, Units_HFirstRun, Units_Hop, Units_HPost, Units_HPre, Units_HSecondRun, Units_HStrike, Units_HTot, Units_HVolMash, Units_HVolStart,
  Units_KettleVolume, Units_KettleWidth, Units_LossTot, Units_MashoutTemp, Units_MashThickness, Units_MashThickness2, Units_MeasuredGabs, Units_MinSparge, Units_MTemp, Units_MTrub_Volume, Units_Post, Units_Pre,
  Units_PreboilVolume, Units_SecondRun, Units_Sparge, Units_STemp, Units_TempStrike, Units_Trub_Volume, Units_VChilled, Units_VolMash, Units_VolStart, Units_VolStrike, Units_VPackaged, Units_WaterTot,
  VolChilled, VolMash, VolMinSparge, VolPackaged, VolPost, VolPre, VolSparge, VolSparge2, VolStart, VolStrike, Volume_Coeff, Volumes, WaterTot, Weight_Coeff, Weight_Small_Coeff, YeastPitch, OGDifference, TargetOG, PreviousSparge,PreviousThickness,SavedRadio, DataName, BeerName, SavedMashThickness, SavedVolSparge,NoSpargeLauter,BatchSpargeLauter,EstSpargeEff,LauterGained,MeasuredSpargeEfficiency,ExpSpargeEf,VolSparge3,EstLauterEff2,LauterGained2,RS22,RCSTot2,SecRun2;

$(document).ready(function() {
  $('#calcForm').delegate('input[type=text]', 'change', function() {
    if (validateField(this)) {
      updateCalc();
    }
  }).submit(function(e) {
    e.defaultPrevented;
    updateCalc();
  });
  radioSelect(byId('grams'));
  $('#GBill').focus();
});

function allFieldsValid() {

  var fields = [
    'BatchVol',
    'GBill',
    'HBill',
    'Dhop',
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

function byId(id) {
  return (document.getElementById(id));
}

function radioSelect(elem) {
  uarr = elem.getAttribute('data-units').split("|");
  Weights_Big = uarr[0];
  Units_GBill = Weights_Big;
  Volumes = uarr[1];
  Units_Sparge = Volumes;
  Units_Trub_Volume = Volumes;
  Units_FTrub_Volume = Volumes;
  Units_MTrub_Volume = Volumes;
  Units_LossTot = Volumes;
  Units_KettleVolume = Volumes;
  Units_PreboilVolume = Volumes;
  Units_MinSparge = Volumes;
  Units_VolStart = Volumes;
  Units_VolStrike = Volumes;
  Units_FirstRun = Volumes;
  Units_SecondRun = Volumes;
  Units_Pre = Volumes;
  Units_Post = Volumes;
  Units_VChilled = Volumes;
  Units_VPackaged = Volumes;
  Units_VolMash = Volumes;
  Units_WaterTot = Volumes;
  Weights_Small = uarr[2];
  Units_Hop = Weights_Small;
  Units_DHop = Weights_Small;
  Temps = uarr[3];
  Units_MTemp = Temps;
  Units_GTemp = Temps;
  Units_STemp = Temps;
  Units_MashoutTemp = Temps;
  Units_TempStrike = Temps;
  Units_BoilOff = uarr[4];
  Units_EBoil = Units_BoilOff;
  Units_Gabs = uarr[5];
  Units_MeasuredGabs = Units_Gabs;
  Units_MashThickness = uarr[6];
  Units_MashThickness2 = Units_MashThickness;
  Units_Habs = uarr[7];
  Units_KettleWidth = uarr[8];
  Units_HTot = Units_KettleWidth;
  Units_GallonHeight = Units_KettleWidth;
  Units_HVolStart = Units_KettleWidth;
  Units_HStrike = Units_KettleWidth;
  Units_HVolMash = Units_KettleWidth;
  Units_HFirstRun = Units_KettleWidth;
  Units_HSecondRun = Units_KettleWidth;
  Units_HPre = Units_KettleWidth;
  Units_HPost = Units_KettleWidth;
  Units_HChilled = Units_KettleWidth;
  radio = elem.id;
  updateInputs();
}

function updateInputs() {
  SpargeCoeff = parseFloat($('#SpargeCoeff').val());
  BatchVol = parseFloat($('#BatchVol').val());
  GBill = parseFloat($('#GBill').val());
  MeasMashGrav = parseFloat($('#MeasMashGrav').val());
  MeasPrebGrav = parseFloat($('#MeasPrebGrav').val());
  MAGEstConv = parseFloat($('#MAGEstConv').val());
  LossTunTrub = parseFloat($('#LossTunTrub').val());
  HBill = parseFloat($('#HBill').val());
  DHop = parseFloat($('#Dhop').val());
  MeasPrebVolume = parseFloat($('#MeasPrebVolume').val());
  TempSparge = parseFloat($('#TempSparge').val());
  BoilTime = parseFloat($('#BoilTime').val());
  BoilRate = parseFloat($('#BoilRate').val());
  TempGrain = parseFloat($('#TempGrain').val());
  TempMash = parseFloat($('#TempMash').val());
  VolSparge = parseFloat($('#VolSparge').val());
  PotSize = parseFloat($('#PotSize').val());
  KettleID = parseFloat($('#KettleID').val());
  LossTrub = parseFloat($('#LossTrub').val());
  Gabs = parseFloat($('#Gabs').val());
  Habs = parseFloat($('#Habs').val());
  MashAdj = parseFloat($('#MashAdj').val());
  StrikeAdj = parseFloat($('#StrikeAdj').val());
  LossFermTrub = parseFloat($('#LossFermTrub').val());
  MashThickness = parseFloat($('#MashThickness').val());

  if (radio == 'imperial') {
    if (preradio == 'metric') {
      BatchVol = BatchVol * 0.264172052358148;
	  PotSize = PotSize * 0.264172052358148;
		PotSize = PotSize.toFixed(2);
		KettleID = KettleID * 0.393700787401575;
		KettleID = KettleID.toFixed(2);
      BoilRate = BoilRate * 0.264172052358148;
      BoilRate = BoilRate.toFixed(2);
      VolSparge = VolSparge * 0.264172052358148;
      VolSparge = VolSparge.toFixed(2);
      LossTrub = LossTrub * 0.264172052358148;
      LossTrub = LossTrub.toFixed(2);
      LossFermTrub = LossFermTrub * 0.264172052358148;
      LossFermTrub = LossFermTrub.toFixed(2);
      HBill = HBill * 0.035274;
      HBill = HBill.toFixed(2);
      DHop = DHop * 0.035274;
      DHop = DHop.toFixed(2);
      TempSparge = (TempSparge * 1.8) + 32;
      TempSparge = TempSparge.toFixed(1)
      TempGrain = (TempGrain * 1.8) + 32;
      TempGrain = TempGrain.toFixed(1);
      MashThickness = MashThickness * 0.479305709267586;
      MashThickness = MashThickness.toFixed(2);
      GBill = GBill * 2.20462262184878;
      GBill = GBill.toFixed(2);
      TempMash = (TempMash * 1.8) + 32;
      TempMash = TempMash.toFixed(1);
      Gabs = Gabs / 8.3454;
      Habs = Habs / 0.133526;
      Habs = Habs.toFixed(3);
    } else if (preradio == 'grams') {
      HBill = HBill * 0.035274;
      HBill = HBill.toFixed(2);
      DHop = DHop * 0.035274;
      DHop = DHop.toFixed(2);
      Habs = Habs / 0.035274;
      Habs = Habs.toFixed(3);
    } else {
      HBill = HBill * 0.035274;
      HBill = HBill.toFixed(2);
      DHop = DHop * 0.035274;
      DHop = DHop.toFixed(2);
      Habs = Habs / 0.035274;
      Habs = Habs.toFixed(3);
    }

  }
  
  if (radio == 'grams') {
    if (preradio == 'metric') {
      BatchVol = BatchVol * 0.264172052358148;
      BatchVol = BatchVol.toFixed(2);
	  PotSize = PotSize * 0.264172052358148;
	        PotSize = PotSize.toFixed(2);
					KettleID = KettleID * 0.393700787401575;
		KettleID = KettleID.toFixed(2);
      BoilRate = BoilRate * 0.264172052358148;
      BoilRate = BoilRate.toFixed(2);
      VolSparge = VolSparge * 0.264172052358148;
      VolSparge = VolSparge.toFixed(2);
      LossTrub = LossTrub * 0.264172052358148;
      LossTrub = LossTrub.toFixed(2);
      LossFermTrub = LossFermTrub * 0.264172052358148;
      LossFermTrub = LossFermTrub.toFixed(2);
      TempSparge = (TempSparge * 1.8) + 32;
      TempSparge = TempSparge.toFixed(1)
      TempGrain = (TempGrain * 1.8) + 32;
      TempGrain = TempGrain.toFixed(1);
      MashThickness = MashThickness * 0.479305709267586;
      MashThickness = MashThickness.toFixed(2);
      GBill = GBill * 2.20462262184878;
      GBill = GBill.toFixed(2);
      TempMash = (TempMash * 1.8) + 32;
      TempMash = TempMash.toFixed(1);
      Gabs = Gabs / 8.3454;
      Habs = Habs * 0.264172052358148;
      Habs = Habs.toFixed(4);

    } else if (preradio == 'imperial') {
      HBill = HBill / 0.035274;
      HBill = HBill.toFixed(2);
      DHop = DHop / 0.035274;
      DHop = DHop.toFixed(2);
      Habs = Habs * 0.035274;
      Habs = Habs.toFixed(4);
    }
  }

  if (radio == 'metric') {
    if (preradio == 'grams') {
      BatchVol = BatchVol / 0.264172052358148;
      BatchVol = BatchVol.toFixed(2);
	  	  PotSize = PotSize / 0.264172052358148;
	        PotSize = PotSize.toFixed(2);
					KettleID = KettleID / 0.393700787401575;
		KettleID = KettleID.toFixed(2);
      BoilRate = BoilRate / 0.264172052358148;
      BoilRate = BoilRate.toFixed(2);
      VolSparge = VolSparge / 0.264172052358148;
      VolSparge = VolSparge.toFixed(2);
      LossTrub = LossTrub / 0.264172052358148;
      LossTrub = LossTrub.toFixed(2);
      LossFermTrub = LossFermTrub / 0.264172052358148;
      LossFermTrub = LossFermTrub.toFixed(2);
      TempSparge = (TempSparge - 32) / 1.8;
      TempSparge = TempSparge.toFixed(1)
      TempGrain = (TempGrain - 32) / 1.8;
      TempGrain = TempGrain.toFixed(1);
      MashThickness = MashThickness / 0.479305709267586;
      MashThickness = MashThickness.toFixed(2);
      GBill = GBill / 2.20462262184878;
      GBill = GBill.toFixed(2);
      HopRatio = HBill / BatchVol;
      TempMash = (TempMash - 32) / 1.8;
      TempMash = TempMash.toFixed(1);
      Gabs = Gabs * 8.3454;
      Habs = Habs * 3.78541;
      Habs = Habs.toFixed(4);
    } else if (preradio == 'imperial') {
      BatchVol = BatchVol / 0.264172052358148;
      BatchVol = BatchVol.toFixed(2);
	  	  PotSize = PotSize / 0.264172052358148;
	        PotSize = PotSize.toFixed(2);
					KettleID = KettleID / 0.393700787401575;
		KettleID = KettleID.toFixed(2);
      BoilRate = BoilRate / 0.264172052358148;
      BoilRate = BoilRate.toFixed(2);
      VolSparge = VolSparge / 0.264172052358148;
      VolSparge = VolSparge.toFixed(2);
      LossTrub = LossTrub / 0.264172052358148;
      LossTrub = LossTrub.toFixed(2);
      LossFermTrub = LossFermTrub / 0.264172052358148;
      LossFermTrub = LossFermTrub.toFixed(2);
      TempSparge = (TempSparge - 32) / 1.8;
      TempSparge = TempSparge.toFixed(1)
      TempGrain = (TempGrain - 32) / 1.8;
      TempGrain = TempGrain.toFixed(1);
      MashThickness = MashThickness / 0.479305709267586;
      MashThickness = MashThickness.toFixed(2);
      GBill = GBill / 2.20462262184878;
      GBill = GBill.toFixed(2);
      HopRatio = HBill / BatchVol;
      TempMash = (TempMash - 32) / 1.8;
      TempMash = TempMash.toFixed(1);
      HBill = HBill / 0.035274;
      HBill = HBill.toFixed(2);
      DHop = DHop / 0.035274;
      DHop = DHop.toFixed(2);
      Gabs = Gabs * 8.3454;
      Habs = Habs * 0.133526;
      Habs = Habs.toFixed(4);
    } else {
      BatchVol = BatchVol / 0.264172052358148;
      BatchVol = BatchVol.toFixed(2);
	  	  PotSize = PotSize / 0.264172052358148;
	        PotSize = PotSize.toFixed(2);
					KettleID = KettleID / 0.393700787401575;
		KettleID = KettleID.toFixed(2);
      BoilRate = BoilRate / 0.264172052358148;
      BoilRate = BoilRate.toFixed(2);
      VolSparge = VolSparge / 0.264172052358148;
      VolSparge = VolSparge.toFixed(2);
      LossTrub = LossTrub / 0.264172052358148;
      LossTrub = LossTrub.toFixed(2);
      LossFermTrub = LossFermTrub / 0.264172052358148;
      LossFermTrub = LossFermTrub.toFixed(2);
      TempSparge = (TempSparge - 32) / 1.8;
      TempSparge = TempSparge.toFixed(1)
      TempGrain = (TempGrain - 32) / 1.8;
      TempGrain = TempGrain.toFixed(1);
      MashThickness = MashThickness / 0.479305709267586;
      MashThickness = MashThickness.toFixed(2);
      GBill = GBill / 2.20462262184878;
      GBill = GBill.toFixed(2);
      HopRatio = HBill / BatchVol;
      TempMash = (TempMash - 32) / 1.8;
      TempMash = TempMash.toFixed(1);
      Gabs = Gabs * 8.3454;
      Habs = Habs * 3.78541;
      Habs = Habs.toFixed(4);
    }

  }
  byId('BatchVol').value = BatchVol;
  byId('GBill').value = GBill;
  byId('HBill').value = HBill;
  byId('Dhop').value = DHop;
  byId('BoilRate').value = BoilRate;
  byId('TempGrain').value = TempGrain;
  byId('TempMash').value = TempMash;
  byId('VolSparge').value = VolSparge;
  byId('TempSparge').value = TempSparge;
  byId('PotSize').value = PotSize;
  byId('KettleID').value = KettleID;
  byId('LossTrub').value = LossTrub;
  byId('LossFermTrub').value = LossFermTrub;
  byId('LossTunTrub').value = LossTunTrub;
  byId('Gabs').value = Gabs;
  byId('Habs').value = Habs;
  byId('MashThickness').value = MashThickness;
  updateCalc();
}



function convertInputs() {
}

function convertOutputs() {
}



function updateDisplay() {
convertOutputs();
  byId('Unit_BatchVol').innerHTML = Volumes;
  byId('Unit_WaterTot').innerHTML = Units_WaterTot;
  byId('Unit_VolStrike').innerHTML = Units_VolStrike;
  byId('Unit_VolStart').innerHTML = Units_VolStart;
  byId('Unit_FirstRun').innerHTML = Units_FirstRun;
  byId('Unit_SecondRun').innerHTML = Units_SecondRun;
  byId('Unit_Pre').innerHTML = Units_Pre;
  byId('Unit_Post').innerHTML = Units_Post;
  byId('Unit_VChilled').innerHTML = Units_VChilled;
  byId('Unit_VPackaged').innerHTML = Units_VPackaged;
  byId('Unit_VolMash').innerHTML = Units_VolMash;
  byId('Unit_MinSparge').innerHTML = Units_MinSparge;
  byId('Unit_KettleVolume').innerHTML = Units_KettleVolume;
  byId('Unit_PreboilVolume').innerHTML = Units_PreboilVolume;
  byId('Unit_TempStrike').innerHTML = Units_TempStrike;
  byId('Unit_Sparge').innerHTML = Units_Sparge;
  byId('Unit_HTot').innerHTML = Units_HTot;
  byId('Unit_GallonHeight').innerHTML = Units_GallonHeight;
  byId('Unit_HVolStart').innerHTML = Units_HVolStart;
  byId('Unit_HStrike').innerHTML = Units_HStrike;
  byId('Unit_HVolMash').innerHTML = Units_HVolMash;
  byId('Unit_HFirstRun').innerHTML = Units_HFirstRun;
  byId('Unit_HSecondRun').innerHTML = Units_HSecondRun;
  byId('Unit_HPre').innerHTML = Units_HPre;
  byId('Unit_HPost').innerHTML = Units_HPost;
  byId('Unit_HChilled').innerHTML = Units_HChilled;
  byId('Unit_GBill').innerHTML = Units_GBill;
  byId('Unit_Hop').innerHTML = Units_Hop;
  byId('Unit_DHop').innerHTML = Units_DHop;
  byId('Unit_Gabs').innerHTML = Units_Gabs;
  byId('Unit_MeasuredGabs').innerHTML = Units_MeasuredGabs;
  byId('Unit_Habs').innerHTML = Units_Habs;
  byId('Unit_MTemp').innerHTML = Units_MTemp;
  byId('Unit_GTemp').innerHTML = Units_GTemp;
  byId('Unit_STemp').innerHTML = Units_STemp;
  byId('Unit_MashoutTemp').innerHTML = Units_MashoutTemp;
  byId('Unit_MashThickness2').innerHTML = Units_MashThickness2;
  byId('Unit_EBoil').innerHTML = Units_EBoil;
  byId('Unit_KettleWidth').innerHTML = Units_KettleWidth;
  byId('Unit_BoilOff').innerHTML = Units_BoilOff;
  byId('Unit_Trub_Volume').innerHTML = Units_Trub_Volume;
  byId('Unit_FTrub_Volume').innerHTML = Units_FTrub_Volume;
  byId('Unit_LossTot').innerHTML = Units_LossTot;
  byId('Unit_MTrub_Volume').innerHTML = Units_MTrub_Volume;
  byId('Unit_MashThickness').innerHTML = Units_MashThickness;
  $('#WaterTot').text(WaterTot.toFixed(2));
  $('#YeastPitch').text(YeastPitch.toFixed(0));
  $('#MeasConv').text(MeasConv.toFixed(1));
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
  $('#TempMashout').text(TempMashout.toFixed(1));
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
  $('#TempStrike').text(TempStrike.toFixed(1));
  $('#MashAdj').text(MashAdj.toFixed(12));
  $('#Strikeadj').text(StrikeAdj.toFixed(12));
  $('#GalH').text(GalH.toFixed(3));
  $('#HTot').text(HTot.toFixed(2));
  $('#HStart').text(HStart.toFixed(2));
  $('#HStrike').text(HStrike.toFixed(2));
  $('#HMash').text(HMash.toFixed(2));
  $('#HPre').text(HPre.toFixed(2));
  $('#HPost').text(HPost.toFixed(2));
  $('#HChilled').text(HChilled.toFixed(2));
  $('#MashThick').text(MashThick.toFixed(2));
  $('#VolMinSparge').text(VolMinSparge.toFixed(2));
  $('#VolChilled').text(VolChilled.toFixed(2));
  $('#VolPackaged').text(VolPackaged.toFixed(2));
  $('#FirstRun').text(FirstRun.toFixed(2));
  $('#HFirstRun').text(HFirstRun.toFixed(2));
  $('#HSecRun').text(HSecRun.toFixed(2));
  $('#SecRun').text(SecRun2.toFixed(2));
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
  $('#SG1').text(SG1.toFixed(3));
  $('#RW1').text(RW1.toFixed(2));
  $('#RS1').text(RS1.toFixed(2));
  $('#RCWtr1').text(RCWtr1.toFixed(2));
  $('#RetS1').text(RetS1.toFixed(2));
  $('#RetWat1').text(RetWat1.toFixed(2));
  $('#TrueAbs1').text(TrueAbs1.toFixed(3));
  $('#MashSugarWt2').text(MashSugarWt2.toFixed(2));
  $('#Plato2').text(Plato2.toFixed(3));
  $('#SG2').text(SG2.toFixed(3));
  $('#RecW2').text(RecW2.toFixed(2));
  $('#RS2').text(RS2.toFixed(2));
  $('#RCWT2').text(RCWT2.toFixed(2));
  $('#RetS2').text(RetS2.toFixed(2));
  $('#RetWat2').text(RetWat2.toFixed(2));
  $('#TrueAbs2').text(TrueAbs2.toFixed(3));
  $('#RCSTot').text(RCSTot.toFixed(2));
  $('#EstLauterEff').text(EstLauterEff.toFixed(1));
    $('#EstSpargeEff').text(EstSpargeEff.toFixed(1));
	    $('#MeasuredSpargeEfficiency').text(MeasuredSpargeEfficiency.toFixed(1));
  $('#EstMashEff').text(EstMashEff.toFixed(1));
  $('#PlatoPre').text(PlatoPre.toFixed(3));
  $('#SGPre').text(SGPre.toFixed(3));
  $('#BoilRate').text(BoilRate.toFixed(4));
  $('#TotalPoints').text(TotalPoints.toFixed(0));
  $('#PlatoPost').text(PlatoPost.toFixed(0));
  $('#SGPost').text(SGPost.toFixed(3));
  $('#SugarTot').text(SugarTot.toFixed(4));
  $('#RetSF').text(RetSF.toFixed(4));
  $('#OGDifference').text(OGDifference.toFixed(4));
}

  function MashAnalysis(){
  //initial analysis for no sparge setup
 var SpargeCoeff = parseFloat($('#SpargeCoeff').val());
SavedMashThickness = MashThickness;
SavedVolSparge = SecRun;

MashThickness = 0;
VolStart = (WaterTot);
  FirstRun = (VolStart - LossGrain - LossTunTrub) * MashAdj;
  MAGPot = 37.212;
  MAGMoist = 0.04;
  SGSuccrose = 46.173;
  MAGDryG = (1 - MAGMoist) * GBill;
  ExPot = MAGPot / SGSuccrose;
  ExConv = ExPot * (MAGEstConv / 100);
  MashWaterWt1 = (VolStart * 8.3304) + (GBill - MAGDryG);
  MSW1 = MAGDryG * ExConv;
  Plato1 = (100 * MSW1) / (MSW1 + MashWaterWt1);
  SG1 = 1 + (Plato1 / (258.6 - 0.879551 * Plato1));
  RW1 = (SG1 * (FirstRun / 1.022494888) * 8.3304);
  RS1 = (RW1 * Plato1) / 100;
  NoSpargeLauter = 100 * (RS1 / MSW1);
  
  //Secondary Analysis for equal runnings setup
  VolSparge = (VolPre/1.022494888)/ 2;
  VolStart = (WaterTot - VolSparge);
  FirstRun = (VolStart - LossGrain - LossTunTrub) * MashAdj;
  MAGPot = 37.212;
  MAGMoist = 0.04;
  SGSuccrose = 46.173;
  MAGDryG = (1 - MAGMoist) * GBill;
  ExPot = MAGPot / SGSuccrose;
  ExConv = ExPot * (MAGEstConv / 100);
  MashWaterWt1 = (VolStart * 8.3304) + (GBill - MAGDryG);
  MSW1 = MAGDryG * ExConv;
  Plato1 = (100 * MSW1) / (MSW1 + MashWaterWt1);
  SG1 = 1 + (Plato1 / (258.6 - 0.879551 * Plato1));
  RW1 = (SG1 * (FirstRun / 1.022494888) * 8.3304);
  RS1 = (RW1 * Plato1) / 100;
  RCWtr1 = RW1 - RS1;
  RetS1 = MSW1 - RS1;
  RetWat1 = VolStart * 8.3304 - RCWtr1;
  MWT2 = ((VolSparge * 8.3304) + RetWat1);
  MashSugarWt2 = RetS1;
  Plato2 = (100 * MashSugarWt2) / (MashSugarWt2 + MWT2);
  SG2 = 1 + (Plato2 / (258.6 - 0.879551 * Plato2));
  RCWT2 = SG2 * (VolSparge / 1.022494888) * 8.3304;
  RS2 = (RCWT2 * Plato2) / 100;
  RCSTot = RS1 + RS2;
  BatchSpargeLauter = 100 * (RCSTot / MSW1);
  LauterGained = BatchSpargeLauter - NoSpargeLauter;
  //final analysis on input variables

  MashThickness = SavedMashThickness;
  VolSparge = SavedVolSparge;
  VolStart = (WaterTot - VolSparge);
    FirstRun = (VolStart - LossGrain - LossTunTrub) * MashAdj;
  SecRun = VolSparge;
  MAGPot = 37.212;
  MAGFine = 0.7797;
  MAGMoist = 0.04;
  MAGRunRatio = Math.max(SecRun / FirstRun, 0);
  SGSuccrose = 46.173;
  MAGDryG = (1 - MAGMoist) * GBill;
  MAGVolWater = GBill * MAGMoist;
  MAGWtWater = MAGVolWater;
  MAGTotWater = WaterTot * 8.3304;
  ExPot = MAGPot / SGSuccrose;
  ExConv = ExPot * (MAGEstConv / 100);
  TotalPot = GBill * MAGPot * (1 - MAGMoist);
  MashWaterWt1 = (VolStart * 8.3304) + (GBill - MAGDryG);
  SugarTot = MAGDryG * ExPot;
  MSW1 = MAGDryG * ExConv;
  Plato1 = (100 * MSW1) / (MSW1 + MashWaterWt1);
  SG1 = 1 + (Plato1 / (258.6 - 0.879551 * Plato1));
  RW1 = (SG1 * (FirstRun / 1.022494888) * 8.3304);
  RS1 = (RW1 * Plato1) / 100;
  RCWtr1 = RW1 - RS1;
  RetS1 = MSW1 - RS1;
  RetWat1 = VolStart * 8.3304 - RCWtr1; 
  MWT2 = ((VolSparge * 8.3304) + RetWat1);
  TrueAbs1 = (RetS1 + RetWat1) / (SG1 * 8.3304 * GBill);
  MashSugarWt2 = RetS1;
  Plato2 = (100 * MashSugarWt2) / (MashSugarWt2 + MWT2);
  SG2 = 1 + (Plato2 / (258.6 - 0.879551 * Plato2));
  RCWT2 = SG2 * (SecRun / 1.022494888) * 8.3304;
  RS2 =  (RCWT2 * Plato2) / 100;
  RS22 = RS2;
  RecW2 = RCWT2 - RS2;
  RetS2 = MashSugarWt2 - RS2;
  RetWat2 = MWT2 - RecW2;
  TrueAbs2 = (RetS2 + RetWat2) / (SG2 * 8.3304 * GBill);
  RCSTot = RS1 + RS2;
  RCSTot2 = RS1 + RS2;
  		  EstLauterEff = 100 * (RCSTot / MSW1);
		  EstSpargeEff = 0;
  		if (SecRun > 0){
		
		  EstLauterEff2 = EstLauterEff;
    EstSpargeEff = SpargeCoeff * (( EstLauterEff - NoSpargeLauter ) / LauterGained );
	LauterGained2 = ((EstLauterEff2) - (NoSpargeLauter));
	EstLauterEff = NoSpargeLauter + ((EstSpargeEff/100) * LauterGained);
	RCSTot = (EstLauterEff * MSW1)/100;
	RS2 = RCSTot - RS1;
	MashSugarWt2 = MashSugarWt2 * (RS2 / RS22);


	Plato2 = (100 * MashSugarWt2) / (MashSugarWt2 + MWT2);
  SG2 = 1 + (Plato2 / (258.6 - 0.879551 * Plato2));
	  RCWT2 = SG2 * (SecRun / 1.022494888) * 8.3304;
	    RecW2 = RCWT2 - RS2;
	  
		}
	if ( SecRun = 0 ){
	SG2 = 1.000;
	}
	
  EstMashEff = EstLauterEff * MAGEstConv / 100;
  PlatoPre = (100 * RCSTot) / (RCSTot + RecW2 + RCWtr1);
  SGPre = 1 + (PlatoPre / (258.6 - 0.879551 * PlatoPre));
  RetSF = RetS2;
  EstConvWt = SugarTot * MAGEstConv / 100;
  TotalPoints = ((VolPre / 1.043841336) * (SGPre - 1) * 1000);
  PlatoPost = (100 * RCSTot) / (RCSTot + RecW2 + RCWtr1 - (BoilRate * 8.3304 * (BoilTime / 60)));
  SGPost = 1 + (PlatoPost / (258.6 - 0.879551 * PlatoPost));
  TempMashout = (TempMash * (GBill + 5 * (GBill * Gabs)) + (5 * TempSparge * VolSparge)) / (GBill + 5 * (VolSparge + (GBill * Gabs)));
  MeasMashPlato = -616.868 + (1111.14 * MeasMashGrav) - (630.272 * MeasMashGrav * MeasMashGrav) + (135.997 * MeasMashGrav * MeasMashGrav * MeasMashGrav);
  MeasGabs = Math.min(MeasPrebVolume, (VolStart - ((MeasPrebVolume/ 1.043841336) - VolSparge)) / GBill);
  MeasMashWT = -((VolStart * 8.335 + (GBill * 0.04)) * MeasMashPlato) / (-100 + MeasMashPlato);
  MeasConv = Math.max(100 * MeasMashWT / SugarTot, 0);
  MeasPrebPlato = -616.868 + (1111.14 * MeasPrebGrav) - (630.272 * MeasPrebGrav * MeasPrebGrav) + (135.997 * MeasPrebGrav * MeasPrebGrav * MeasPrebGrav);
  MeasPrebWortWT = MeasPrebGrav * (MeasPrebVolume / 1.043841336) * 8.3304;
  MeasPrebSugarWT = (MeasPrebWortWT * MeasPrebPlato) / 100;
  MeasPrebWaterWT = MeasPrebWortWT - MeasPrebSugarWT;
  MeasPrebWT = -(MeasPrebWaterWT * MeasPrebPlato) / (-100 + MeasPrebPlato);
  MeasMashEff = Math.max(0, 100 * MeasPrebWT / SugarTot);
  MeasLautWT = Math.max(0, MeasPrebWT - MeasMashWT);
  MeasLautEff = 100 * MeasPrebWT / EstConvWt;
  MeasuredSpargeEfficiency = Math.max(0, 100 * ((MeasLautEff - NoSpargeLauter) / LauterGained));
  EstBrewhEff = VolChilled / (VolPost / 1.043841336) * EstMashEff;
  MeasBrewhEff = VolChilled / (VolPost / 1.043841336) * MeasMashEff;
  MeasPrebGrav2 = MeasPrebGrav;
  MeasMashGrav2 = MeasMashGrav;
  MeasMashPlato2 = -616.868 + (1111.14 * MeasMashGrav2) - (630.272 * MeasMashGrav2 * MeasMashGrav2) + (135.997 * MeasMashGrav2 * MeasMashGrav2 * MeasMashGrav2);
  MeasMashWortWT = MeasMashGrav2 * (VolStart - (GBill * MeasGabs)) * 8.3304;
  MeasMashSugarWT = (MeasMashWortWT * MeasMashPlato2) / 100;
  MeasSecRunWT = MeasPrebSugarWT - MeasMashSugarWT;
  MeasSecRunPlato = (100 * MeasSecRunWT) / (MeasSecRunWT + VolSparge * 8.3304);
  MeasSecRunSG = Math.max(0, 1 + (MeasSecRunPlato / (258.6 - 0.879551 * MeasSecRunPlato)));
  MeasPostSG = 1 + ((((MeasPrebGrav2 - 1) * 1000) * (MeasPrebVolume / 1.043841336) / (VolPost / 1.043841336)) / 1000);
  MeasPostPlato = -616.868 + (1111.14 * MeasPostSG) - (630.272 * MeasPostSG * MeasPostSG) + (135.997 * MeasPostSG * MeasPostSG * MeasPostSG);

  
  

  if (MeasPostSG > 1) {
    YeastPitch = .75 * 3785.41 * BatchVol * MeasPostPlato / 1000;
  } else {
    YeastPitch = .75 * 3785.41 * BatchVol * PlatoPost / 1000;
  }
  
  }




function updateCalc() {
  if (!allFieldsValid()) {
    return;
  }
  
   SpargeCoeff = parseFloat($('#SpargeCoeff').val());
  TargetOG = parseFloat($('#TargetOG').val());
  BatchVol = parseFloat($('#BatchVol').val());
  GBill = parseFloat($('#GBill').val());
  MeasMashGrav = parseFloat($('#MeasMashGrav').val());
  MeasPrebGrav = parseFloat($('#MeasPrebGrav').val());
  MAGEstConv = parseFloat($('#MAGEstConv').val());
  LossTunTrub = parseFloat($('#LossTunTrub').val());
  HBill = parseFloat($('#HBill').val());
  DHop = parseFloat($('#Dhop').val());
  MeasPrebVolume = parseFloat($('#MeasPrebVolume').val());
  TempSparge = parseFloat($('#TempSparge').val());
  BoilTime = parseFloat($('#BoilTime').val());
  BoilRate = parseFloat($('#BoilRate').val());
  TempGrain = parseFloat($('#TempGrain').val());
  TempMash = parseFloat($('#TempMash').val());
  VolSparge = parseFloat($('#VolSparge').val());
  PotSize = parseFloat($('#PotSize').val());
  KettleID = parseFloat($('#KettleID').val());
  LossTrub = parseFloat($('#LossTrub').val());
  TargetOG = parseFloat($('#TargetOG').val());
  Gabs = parseFloat($('#Gabs').val());
  Habs = parseFloat($('#Habs').val());
  MashAdj = parseFloat($('#MashAdj').val());
  StrikeAdj = parseFloat($('#StrikeAdj').val());
  LossFermTrub = parseFloat($('#LossFermTrub').val());
  MashThickness = parseFloat($('#MashThickness').val());
  //Make a new sparge input set mashThicknes to zero
  if (PreviousSparge !== VolSparge)
    { if (VolSparge > 0) {
     MashThickness = 0;
  byId('MashThickness').value = MashThickness;
  PreviousThickness = MashThickness;
  }
    }
	
  //Make a new MashThickness input set Sparge to zero
  if (PreviousThickness !== MashThickness)
    {
	if (MashThickness > 0) {
     VolSparge = 0;
  byId('VolSparge').value = VolSparge;
    }
	}
  HopRatio = HBill / BatchVol;
  LossBoil = BoilTime * BoilRate / 60;
  LossHop = HBill * Habs;
  LossGrain = GBill * Gabs;
  LossTot = LossGrain + LossHop + LossBoil + LossTrub + LossTunTrub;
  WaterTot = BatchVol + LossTot;
  MashThick = (WaterTot - VolSparge) * 4 / GBill;
  if (MashThickness == 0) {
    VolSparge2 = 0;
  } else {
    VolSparge2 = WaterTot - (GBill * MashThickness / 4);
    MashThick = MashThickness;
    VolSparge = VolSparge2;
  }
  VolStart = (WaterTot - VolSparge);
  TempStrike = TempMash + (0.05 * GBill / VolStart) * (TempMash - TempGrain);
       if (radio =='metric'){
  TempMash = (TempMash * 1.8) + 32;
  TempGrain = (TempGrain * 1.8) + 32;
    TempStrike = TempMash + ( 0.05 * ( GBill * 2.20462262184878
) / ( VolStart * 0.264172052358148 )) * (TempMash - TempGrain);
  }
  MashAdj = 1.022494888;
  StrikeAdj = 1.025641026;
  VolStrike = VolStart * StrikeAdj;
  VolMash = (VolStart + GBill * 0.08) * MashAdj;
  VolPre = (WaterTot - LossGrain - LossTunTrub) * 1.043841336;
  VolPost = (WaterTot - LossTot + LossTrub) * 1.043841336;
  VolChilled = (VolPost / 1.043841336) - LossTrub;
  VolPackaged = VolChilled - LossFermTrub - (DHop * Habs);
  GalH = 294.118334834 / (KettleID * KettleID);
  HTot = GalH * WaterTot;
  HStart = GalH * VolStart;
  HStrike = GalH * VolStrike;
  HMash = GalH * VolMash;
  HPre = GalH * VolPre;
  HChilled = GalH * VolChilled;
  VolMinSparge = Math.max(0, ((WaterTot + GBill * 0.08) * MashAdj) - (PotSize - 0.1));
  HPost = GalH * VolPost;
  FirstRun = (VolStart - LossGrain - LossTunTrub) * MashAdj;
  HFirstRun = FirstRun * GalH;
  SecRun = ((VolPre*MashAdj) / 1.043841336)  - FirstRun;
    SecRun2 = VolSparge;
  HSecRun = SecRun * GalH;
  EBoil = (0.0058 * KettleID * KettleID) - (0.0009 * KettleID) + 0.0038;
  
  //convert metric to imperial
  
  if (radio == 'metric')
  {
  GBill = GBill * 2.20462262184878;
  VolStart = VolStart * 0.264172052358148;
  LossGrain = LossGrain * 0.264172052358148;
  MashAdj = 1.022494888;
  StrikeAdj = 1.025641026;
  VolStrike = VolStart * StrikeAdj;
  VolMash = VolMash * 0.264172052358148;
  VolPre = VolPre * 0.264172052358148;
  VolPost = VolPost * 0.264172052358148;
  VolChilled = VolChilled * 0.264172052358148;
  VolPackaged = VolPackaged * 0.264172052358148;
  GalH = GalH * 0.3937007874015750000000;
  HTot = HTot * 0.3937007874015750000000;
  HStart = HStart * 0.3937007874015750000000;
  HStrike = HStrike * 0.3937007874015750000000;
  HMash = HMash * 0.3937007874015750000000;
  HPre = HPre * 0.3937007874015750000000;
  HChilled = HChilled * 0.3937007874015750000000;
  VolMinSparge = VolMinSparge * 0.264172052358148;
  HPost = HPost * 0.3937007874015750000000;
  FirstRun =  FirstRun * 0.264172052358148;
  HFirstRun = HFirstRun * 0.3937007874015750000000;
  SecRun = SecRun * 0.264172052358148;
  HSecRun = HSecRun * 0.3937007874015750000000;
  KettleID = KettleID * 0.3937007874015750000000;
  EBoil = (0.0058 * KettleID * KettleID) - (0.0009 * KettleID) + 0.0038;
  WaterTot = WaterTot * 0.264172052358148;
  VolSparge = VolSparge * 0.264172052358148;
  BoilRate = BoilRate * 0.264172052358148;
  MeasPrebVolume = MeasPrebVolume * 0.264172052358148;
  BatchVol = BatchVol * 0.264172052358148;
  Gabs = Gabs / 8.3454;
  
  }
  MashAnalysis();
    if (radio == 'metric')
  {
  
  GBill = GBill / 2.20462262184878;
  VolStart = VolStart / 0.264172052358148;
  VolStrike = VolStart / StrikeAdj;
    LossGrain = LossGrain / 0.264172052358148;
  VolMash = VolMash / 0.264172052358148;
  VolPre = VolPre / 0.264172052358148;
  VolPost = VolPost / 0.264172052358148;
  VolChilled = VolChilled / 0.264172052358148;
  VolPackaged = VolPackaged / 0.264172052358148;
  GalH = GalH / 0.3937007874015750000000;
  HTot = HTot / 0.3937007874015750000000;
  HStart = HStart / 0.3937007874015750000000;
  HStrike = HStrike / 0.3937007874015750000000;
  HMash = HMash / 0.3937007874015750000000;
  HPre = HPre / 0.3937007874015750000000;
  HChilled = HChilled / 0.3937007874015750000000;
  VolMinSparge = VolMinSparge / 0.264172052358148;
  HPost = HPost / 0.3937007874015750000000;
  FirstRun =  FirstRun / 0.264172052358148;
  HFirstRun = HFirstRun / 0.3937007874015750000000;
  SecRun = SecRun / 0.264172052358148;
  HSecRun = HSecRun / 0.3937007874015750000000;
  KettleID = KettleID / 0.3937007874015750000000;
  EBoil = (0.0058 * KettleID * KettleID) - (0.0009 * KettleID) + 0.0038;
  WaterTot = WaterTot / 0.264172052358148;
  VolSparge = VolSparge / 0.264172052358148;
  BoilRate = BoilRate / 0.264172052358148;
  MeasPrebVolume = MeasPrebVolume / 0.264172052358148;
  BatchVol = BatchVol / 0.264172052358148;
  TempStrike = ( TempStrike - 32 ) / 1.8;
    Gabs = Gabs * 8.3454;
  
  }
  PreviousSparge = VolSparge;
  PreviousThickness = MashThickness;
  OGDifference = TargetOG - SGPost;
  updateDisplay();
  preradio = radio;
}



function AutoScale() {
//AutoScale increases or decreases the GrainBill in order to make the Estimated OG match the Target OG.
  if (OGDifference > 0.00099)
    {
  //Big Jumps UP.
  while (OGDifference > 0.01) {
    GBill = GBill + 0.1;
    byId('GBill').value = GBill;
    updateCalc();
  } 
    //small Jumps UP.
  while (OGDifference > 0.00001) {
    GBill = GBill + 0.01;
    byId('GBill').value = GBill;
    updateCalc();
  }
    }//close upward search
      
      if (OGDifference < -0.00099){
    
     //Big Jumps down.
    while (OGDifference < -0.01) {
    GBill = GBill - 0.1;
    byId('GBill').value = GBill;
    updateCalc();
  }
      //small Jumps down.
    while (OGDifference < -0.00001) {
    GBill = GBill - 0.01;
    byId('GBill').value = GBill;
    updateCalc();
  }
    }//close downward search
  byId('GBill').value = GBill;
  GBill = GBill.toFixed(3);
  OGDifference=0.00000001;
	  $('#OGDifference').text(OGDifference.toFixed(3));
}
function SaveData() {
CreateSaved();
  localStorage.setItem(DataName, Saved);
}

function CreateSaved()
{
DataName = byId('DataName').value;
BeerName = byId('BeerName').value;
BatchVol = byId('BatchVol').value;
GBill = byId('GBill').value;
HBill = byId('HBill').value;
DHop = byId('Dhop').value;
BoilTime = byId('BoilTime').value;
TempMash = byId('TempMash').value;
TempGrain = byId('TempGrain').value;
TempSparge = byId('TempSparge').value;
MashThickness = byId('MashThickness').value;
VolSparge = byId('VolSparge').value;
Gabs = byId('Gabs').value;
Habs = byId('Habs').value;
BoilRate = byId('BoilRate').value;
PotSize = byId('PotSize').value;
KettleID = byId('KettleID').value;
LossTrub = byId('LossTrub').value;
LossFermTrub = byId('LossFermTrub').value;
LossTunTrub = byId('LossTunTrub').value;
MAGEstConv = byId('MAGEstConv').value;
SavedRadio = $("input[name=units]:checked").val()
SavedArray = [BatchVol,GBill,HBill,DHop,BoilTime,TempMash,TempGrain,TempSparge,VolSparge,Gabs,Habs,BoilRate,PotSize,KettleID,LossTrub,LossFermTrub,LossTunTrub,MAGEstConv,SavedRadio,MashThickness];
Saved = SavedArray.join();
}

var LoadData = function LoadData() {

DataName = byId('DataName').value;
 Saved = localStorage.getItem(DataName);
 SavedArray = Saved.split(",")
  byId('BatchVol').value = SavedArray[0];
  byId('GBill').value = SavedArray[1];
  byId('HBill').value = SavedArray[2];
  byId('Dhop').value = SavedArray[3];
  byId('BoilTime').value = SavedArray[4];
  byId('TempMash').value = SavedArray[5];
  byId('TempGrain').value = SavedArray[6];
  byId('TempSparge').value = SavedArray[7];
  byId('VolSparge').value = SavedArray[8];
  byId('Gabs').value = SavedArray[9];
  byId('Habs').value = SavedArray[10];
  byId('BoilRate').value = SavedArray[11];
  byId('PotSize').value = SavedArray[12];
  byId('KettleID').value = SavedArray[13];
  byId('LossTrub').value = SavedArray[14];
  byId('LossTunTrub').value = SavedArray[15];
  byId('LossFermTrub').value = SavedArray[16];
  byId('MAGEstConv').value = SavedArray[17];
    byId('MashThickness').value = SavedArray[19];
  SavedRadio = SavedArray[18];
  document.getElementById(SavedRadio).checked = true;
  byId('MashThickness').value = SavedArray[19];
  preradio=SavedRadio;
  radio = preradio;
  updateCalc();
}

function byId(id) {
  return (document.getElementById(id));
}

window.onload = LoadData;

function validateField(field) {
  $field = $(field);
  if ($field.val().match(/^d*(.\d+)?/)) {
    $field.parents('div.control-group:first').removeClass('error');
    return true;
  }
  $field.parents('div.control-group:first').addClass('error');
  return false;
}

