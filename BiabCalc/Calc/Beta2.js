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


      // Load the Visualization API and the corechart package.
     google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.


/*$(document)
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
  });*/
  
$(document)
    .one('focus.textarea', '.autoExpand', function(){
        var savedValue = this.value;
        this.value = '';
        this.baseScrollHeight = this.scrollHeight;
        this.value = savedValue;
    })
    .on('input.textarea', '.autoExpand', function(){
        var minRows = this.getAttribute('data-min-rows')|0,
            rows;
        this.rows = minRows;
        rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 16);
        this.rows = minRows + rows;
    });

var BatchVol, DataName, BoilRate, coefficient, DHop, EBoil, EstBrewhEff, EstConvWt, EstLauterEff, EstMashEff, ExConv, ExPot, FirstRun, Gabs, GalH, GBill,
  Habs, HBill, HChilled, HFirstRun, HMash, HPost, HPre, HSecRun, HStart, HStrike, HTot, KettleID, LossBoil, LossFermTrub, LossGrain, LossHop, LossTot, LossTrub,
  MAGDryG, MAGEstConv, MAGFine, MAGMoist, MAGPot, MAGRunRatio, MAGTotWater, MAGVolWater, MAGWtWater, MashAdj, MashSugarWt2, MashWaterWt1,
  MeasBrewhEff, MeasConv, MeasGabs, MeasLautEff, MeasLautWT, MeasMashEff, MeasMashGrav2, MeasMashPlato, MeasMashSugarWT, MeasMashWortWT, MeasMashWT,
  MeasPostSG, MeasPrebGrav2, MeasPrebPlato, MeasPrebSugarWT, MeasPrebWT, MeasSecRunPlato, MeasSecRunSG, MeasSecRunWT,
  MSW1, MWT2, Plato1, Plato2, PlatoPost, PlatoPre, PotSize, preradio, radio, RCSTot, RCWT2, RCWtr1, RecW2, RetS1, RetS2, RetSF, RetWat1, RetWat2, RS1, RS2, RW1, SecRun, SG1, SG2, SGPost, SGPre, SGSuccrose,
  StrikeAdj, SugarTot, Temp_Coeff, TempGrain, TempMash, TempMashout, TempSparge, TempStrike, TotalPoints, TotalPot, TrueAbs1, TrueAbs2, Units_BoilOff, Units_DHop, Units_EBoil, Units_FirstRun, Units_FTrub_Volume,
  Units_Gabs, Units_GallonHeight, Units_GBill, Units_GTemp, Units_Habs, Units_HChilled, Units_HFirstRun, Units_Hop, Units_HPost, Units_HPre, Units_HSecondRun, Units_HStrike, Units_HTot, Units_HVolMash, Units_HVolStart,
  Units_KettleVolume, Units_KettleWidth, Units_LossTot, Units_MashoutTemp, Units_MashThickness, Units_MashThickness2, Units_MeasuredGabs, Units_MinSparge, Units_MTemp, Units_MTrub_Volume, Units_Post, Units_Pre,
  Units_PreboilVolume, Units_SecondRun, Units_Sparge, Units_STemp, Units_TempStrike, Units_Trub_Volume, Units_VChilled, Units_VolMash, Units_VolStart, Units_VolStrike, Units_VPackaged, Units_WaterTot,
  VolChilled, VolMash, VolMinSparge, VolPackaged, VolPost, VolPre, VolSparge, VolSparge2, VolStart, VolStrike, Volume_Coeff, Volumes, WaterTot, Weight_Coeff, Weight_Small_Coeff, YeastPitch, OGDifference, TargetOG, PreviousSparge,PreviousThickness,SavedRadio, DataName, BeerName, SavedMashThickness, SavedVolSparge,NoSpargeLauter,BatchSpargeLauter,EstSpargeEff,LauterGained,MeasuredSpargeEfficiency,ExpSpargeEf,VolSparge3,EstLauterEff2,LauterGained2,RS22,RCSTot2,SecRun2,VolStart2,FirstRun2, OverrideBrewhouse,ManualSGPost,ManualSGPre,OverrideBrewhouseCheck,Style,Brewday,now,today,YeastRate,StarterSize,n1,MashThick, Control1, PreviousGBill,counter,MeasuredStrikeVol,MeasuredStrikeTempVol,MeasuredStrikeTemp,MeasuredFirstRunningsVol,MeasuredFirstRunningsTemp,MeasuredFirstRunningsGrav,MeasuredFirstRunningsTempVol,MeasuredPreboilVol,MeasuredPreboilTemp,MeasuredPreboilGrav,MeasuredPreboilTempVol,MeasuredChilledVol,MeasuredChilledTemp,MeasuredChilledGrav,TempAdjustmentFirst,TempAdjustmentSecond,TempAdjustmentBoil,TempAdjustmentChilled,MeasuredConversion,MeasuredLauter,MeasuredMash,MeasuredBrewhouse,MeasuredConversionFeedback,MeasuredLauterFeedback,MeasuredMashFeedback,MeasuredBrewhouseFeedback,TotalPoints,MashSG,MashWortVolume,MashWortWeight,TempAdjustmentStrike,EstLauterMashSG,EstLauterMashGrav,EstLauterFirstRunningsVolume,EstLauterFirstRunEff,EstLauterSecRunEff,EstLauterTotalEff, LauterGBill, LauterArray, GBillArray,LauterData,LauterArrayJSON, data,LauterWaterTot,LauterVolStart,LauterVolSparge,MaxLauterGBill,LauterNoSpargeArray,MashArray,MashNoSpargeArray,BrewhouseArray,BrewhouseNoSpargeArray,EstLauterFirstRunEffArray,EstLauterSecRunEffArray, GBillArrayIndex, MeasuredSparge,MeasuredSpargeFeedback;



now = new Date();
 today = (now.getMonth() + 1) + '-' + now.getDate();
  
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
  
    // check location hash'
var hashID = window.location.hash;

if (hashID === "#Simple")
{
	Simple();
}

else if(hashID === "#EfficiencyEvaluation")
{
	EfficiencyEvaluationToggle();
}

else if(hashID === "#Advanced")
{
	Advanced();
}

else if(hashID === "#Thermal")
{
	ThermalToggle();
}
  else {
		Advanced();
  
  }
  
});

function allFieldsValid() {
//check if all input cells are valid, if not it doesn't run updateCalc
  var fields = [
  	'OverrideBrewhouse',
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
	'DataName',
	'MAGPot',
	'Style',
	'Brewday', 
	'MeasuredStrikeTemp', 
	/*'MeasuredFirstRunningsVol', 
	'MeasuredFirstRunningsTemp',*/ 
	'MeasuredFirstRunningsGrav', 
	/*'MeasuredFirstRunningsTempVol',*/
	'MeasuredPreboilVol', 'MeasuredPreboilTemp', 'MeasuredPreboilGrav','MeasuredChilledVol', 'MeasuredChilledTemp', 'MeasuredChilledGrav','MeasuredStrikeVol',

	
	
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
  OverrideBrewhouse = parseFloat($('#OverrideBrewhouse').val());
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
  MAGPot = parseFloat($('#MAGPot').val());
  Style = parseFloat($('#Style').val());
  Brewday = parseFloat($('#Brewday').val());
MeasuredStrikeVol = parseFloat($('#MeasuredStrikeVol').val());
MeasuredStrikeTempVol = parseFloat($('#MeasuredStrikeTempVol').val());
MeasuredStrikeTemp = parseFloat($('#MeasuredStrikeTemp').val());
//MeasuredFirstRunningsVol = parseFloat($('#MeasuredFirstRunningsVol').val());
//MeasuredFirstRunningsTemp = parseFloat($('#MeasuredFirstRunningsTemp').val());
MeasuredFirstRunningsGrav = parseFloat($('#MeasuredFirstRunningsGrav').val()).toFixed(3);
//MeasuredFirstRunningsTempVol = parseFloat($('#MeasuredFirstRunningsTempVol').val());
MeasuredPreboilVol = parseFloat($('#MeasuredPreboilVol').val());
MeasuredPreboilTemp = parseFloat($('#MeasuredPreboilTemp').val());
MeasuredPreboilGrav = parseFloat($('#MeasuredPreboilGrav').val()).toFixed(3);
MeasuredPreboilTempVol = parseFloat($('#MeasuredPreboilTempVol').val());
MeasuredChilledVol = parseFloat($('#MeasuredChilledVol').val());
MeasuredChilledTemp = parseFloat($('#MeasuredChilledTemp').val());
MeasuredChilledGrav = parseFloat($('#MeasuredChilledGrav').val()).toFixed(3);


 

  if (radio == 'imperial') {
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
      HBill = HBill * 0.035274;
      HBill = HBill.toFixed(2);
      DHop = DHop * 0.035274;
      DHop = DHop.toFixed(2);
      TempSparge = (TempSparge * 1.8) + 32;
      TempSparge = TempSparge.toFixed(1)
      TempGrain = (TempGrain * 1.8) + 32;
      TempGrain = TempGrain.toFixed(1);
      MashThickness = MashThickness * 0.479305709267586;
      MashThickness = MashThickness.toFixed(3);
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
      MashThickness = MashThickness.toFixed(3);
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
      MashThickness = MashThickness.toFixed(3);
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
      MashThickness = MashThickness.toFixed(3);
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
      MashThickness = MashThickness.toFixed(3);
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
  byId('MAGPot').value = MAGPot;
  byId('OverrideBrewhouse').value = OverrideBrewhouse;
    byId('MeasuredStrikeVol').value = MeasuredStrikeVol;
	    byId('MeasuredStrikeTempVol').value = MeasuredStrikeTempVol;
 byId('MeasuredStrikeTemp').value = MeasuredStrikeTemp;
  //byId('MeasuredFirstRunningsVol').value = MeasuredFirstRunningsVol;
  //byId('MeasuredFirstRunningsTemp').value = MeasuredFirstRunningsTemp;
  byId('MeasuredFirstRunningsGrav').value = MeasuredFirstRunningsGrav;
  //byId('MeasuredFirstRunningsTempVol').value = MeasuredFirstRunningsTempVol;
  byId('MeasuredPreboilVol').value = MeasuredPreboilVol;
  byId('MeasuredPreboilTemp').value = MeasuredPreboilTemp;
  byId('MeasuredPreboilGrav').value = MeasuredPreboilGrav;
    byId('MeasuredPreboilTempVol').value = MeasuredPreboilTempVol;
  byId('MeasuredChilledVol').value = MeasuredChilledVol;
  byId('MeasuredChilledTemp').value = MeasuredChilledTemp;
  byId('MeasuredChilledGrav').value = MeasuredChilledGrav;

  
  updateCalc();
}

//UpdateDisplay is used to convert unit labels, and to update input variable cells where the value is changed via a datastring import/load, or via a function, or changed dynamically. 

function updateDisplay() {
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
  $('#MashThick').text(MashThickness);
  $('#VolSparge').text(VolSparge);
  $('#MashThickness').text(MashThickness);
  $('#YeastPitch').text(YeastPitch.toFixed(0));
  $('#MeasConv').text(MeasConv.toFixed(1));
  $('#MeasSecRunWT').text(MeasSecRunWT.toFixed(1));
  $('#MeasMashSugarWT').text(MeasMashSugarWT.toFixed(1));
  $('#MeasSecRunSG').text(MeasMashWortWT.toFixed(1));
  $('#MeasMashEff').text(MeasMashEff.toFixed(1));
  $('#MeasPostSG').text(MeasPostSG.toFixed(3));
  $('#MeasMashGrav2').text(MeasMashGrav2.toFixed(3));
  $('#MeasSecRunSG').text(MeasSecRunSG.toFixed(3));
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
  $('#LossBoil').text(LossBoil.toFixed(2));
  $('#LossHop').text(LossHop.toFixed(2));
  $('#LossGrain').text(LossGrain.toFixed(2));
  $('#LossTot').text(LossTot.toFixed(2));
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
  $('#MeasPrebGrav2').text(MeasPrebGrav2.toFixed(3));
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
  $('#EstSpargeEff').text(EstSpargeEff.toFixed(1));
  $('#MeasuredSpargeEfficiency').text(MeasuredSpargeEfficiency.toFixed(1));
  $('#EstMashEff').text(EstMashEff.toFixed(1));
  $('#PlatoPre').text(PlatoPre.toFixed(3));
  $('#SGPre').text(SGPre.toFixed(4));
  $('#TotalPoints').text(TotalPoints.toFixed(0));
  $('#PlatoPost').text(PlatoPost.toFixed(0));
  $('#SGPost').text(SGPost.toFixed(4));
  $('#SugarTot').text(SugarTot.toFixed(4));
  $('#RetSF').text(RetSF.toFixed(4));
  $('#OGDifference').text(OGDifference.toFixed(4));
  $('#OverrideBrewhouse').text(OverrideBrewhouse.toFixed(2));
  $('#BeerName').text(BeerName);
  $('#Style').text(Style);
  $('#TargetOG').text(TargetOG);
  $('#SpargeCoeff').text(SpargeCoeff.toFixed(0));
  $('#MeasPrebGrav').text(MeasPrebGrav.toFixed(3));
  $('#MeasMashGrav').text(MeasMashGrav.toFixed(3));
  $('#MeasPrebVolume').text(MeasPrebVolume.toFixed(2));
  $('#YeastPitch').text(YeastPitch.toFixed(0));
  $('#YeastRate').text(YeastRate.toFixed(2));
    $('#StarterSize').text(StarterSize.toFixed(1));
	$('#MeasuredConversion').text(MeasuredConversion.toFixed(1));
	$('#MeasuredConversionFeedback').text(MeasuredConversionFeedback.toFixed(1));
	$('#MeasuredLauter').text(MeasuredLauter.toFixed(1));
	$('#MeasuredLauterFeedback').text(MeasuredLauterFeedback.toFixed(1));
	$('#MeasuredMash').text(MeasuredMash.toFixed(1));
	$('#MeasuredMashFeedback').text(MeasuredMashFeedback.toFixed(1));
	$('#MeasuredBrewhouse').text(MeasuredBrewhouse.toFixed(1));
	$('#MeasuredSparge').text(MeasuredSparge.toFixed(1));
	$('#MeasuredSpargeFeedback').text(MeasuredSparge.toFixed(1));
	$('#MeasuredBrewhouseFeedback').text(MeasuredBrewhouseFeedback.toFixed(1));
	
	
}
	LauterGBill = 5;
	GBillArray = [];
	LauterArray = []; 
	LauterNoSpargeArray = [];
	MashArray = []; 
	MashNoSpargeArray = [];
	BrewhouseArray = []; 
	BrewhouseNoSpargeArray = [];
	EstLauterFirstRunEffArray = [];
	EstLauterSecRunEffArray = [];
	
	
function LauterEfficiency()
{
	LauterGBill = 5;
	GBillArray = [];
	LauterArray = []; 
	LauterNoSpargeArray = [];
	MashArray = []; 
	MashNoSpargeArray = [];
	BrewhouseArray = []; 
	BrewhouseNoSpargeArray = [];
	EstLauterFirstRunEffArray = [];
	EstLauterSecRunEffArray = [];
	
	EstLauterTotalEff = 90;
//0.75 is the minimum mash thickness when equal sparging to define the upper limit

	MaxLauterGBill = -(2*(LossBoil+BatchVol+LossTunTrub+LossTrub+LossHop))/((4*Gabs)-0.825);
while (LauterGBill < MaxLauterGBill )
{
	//equal runnings

  LauterWaterTot = BatchVol + (LauterGBill * Gabs) + LossHop + (LossBoil) + LossTrub + LossTunTrub;
  
    LauterVolSparge = (BatchVol + LossHop + (LossBoil) + LossTrub + LossTunTrub)/2;
  LauterVolStart = LauterWaterTot - LauterVolSparge;
  
  
  //efficiency prediction formula
EstLauterMashSG =  1+((100*MAGPot*LauterGBill)/(MAGPot*LauterGBill+SGSuccrose*8.3304*LauterVolStart)/(258.6-227.1*((100*MAGPot*LauterGBill)/(MAGPot*LauterGBill+SGSuccrose*8.3304*LauterVolStart)/258.2)));

EstLauterMashGrav = 10*(EstLauterMashSG - 1)*MAGEstConv/100;

EstLauterMashSG = (EstLauterMashGrav / 1000)+1;

EstLauterFirstRunningsVolume = LauterVolStart - (LauterGBill*Gabs)-LossTunTrub;

EstLauterFirstRunEff = (EstLauterFirstRunningsVolume*EstLauterMashSG*8.3304)/(((MAGPot/SGSuccrose)*LauterGBill)+(8.3304*LauterVolStart));
	
EstLauterSecRunEff = ((LauterVolSparge/(LauterVolSparge+((1-EstLauterFirstRunEff)*(((MAGPot*LauterGBill)/SGSuccrose)+(8.3304*LauterVolStart)))/(8.3304*EstLauterMashSG)))*((1-EstLauterFirstRunEff)*(MAGPot/SGSuccrose)*LauterGBill))/((1-EstLauterFirstRunEff)*(MAGPot/SGSuccrose)*LauterGBill)*(1-EstLauterFirstRunEff);

EstLauterTotalEff = 100*(EstLauterFirstRunEff + EstLauterSecRunEff);
//LauterArray.push(LauterGBill+":"+EstLauterTotalEff);
LauterArray.push(EstLauterTotalEff);
//LauterArray.push("'Grain Bill': "+LauterGBill);
//LauterArray.push({"'gbill'" : LauterGBill,"'Lauter'"  : EstLauterTotalEff});
GBillArray.push(LauterGBill);
EstLauterFirstRunEffArray.push(EstLauterFirstRunEff);
EstLauterSecRunEffArray.push(EstLauterSecRunEff);
//get mash efficiency
EstLauterFirstRunEff = EstLauterTotalEff * MAGEstConv/100;
MashArray.push(EstLauterFirstRunEff);


EstLauterFirstRunEff = EstLauterFirstRunEff * (VolChilled/(VolPost/1.043841336));
BrewhouseArray.push(EstLauterFirstRunEff);

 LauterVolSparge = 0;
  LauterVolStart = LauterWaterTot - LauterVolSparge;
  
  
  //efficiency prediction formula for no sparge
EstLauterMashSG =  ((1+((100*MAGPot*LauterGBill)/(MAGPot*LauterGBill+SGSuccrose*8.3304*LauterVolStart)/(258.6-227.1*((100*MAGPot*LauterGBill)/(MAGPot*LauterGBill+SGSuccrose*8.3304*LauterVolStart)/258.2)))));

EstLauterMashGrav = 10*(EstLauterMashSG - 1)*MAGEstConv/10000;

EstLauterMashSG = (EstLauterMashGrav / 1000)+1;

EstLauterFirstRunningsVolume = LauterVolStart - (LauterGBill*Gabs)-LossTunTrub;

EstLauterFirstRunEff = ((EstLauterFirstRunningsVolume*EstLauterMashSG*8.3304)/(((MAGPot/SGSuccrose)*LauterGBill)+(8.3304*LauterVolStart)))*100;

LauterNoSpargeArray.push(EstLauterFirstRunEff);

//get mash efficiency for no sparge
EstLauterFirstRunEff = EstLauterFirstRunEff * MAGEstConv/100;
MashNoSpargeArray.push(EstLauterFirstRunEff);

EstLauterFirstRunEff = EstLauterFirstRunEff * (VolChilled/(VolPost/1.043841336));
BrewhouseNoSpargeArray.push(EstLauterFirstRunEff);




LauterGBill = (LauterGBill +0.1);
}

     google.charts.setOnLoadCallback(drawChart);

}

function drawChart(){
  // create DataTable
var data = new google.visualization.DataTable();		
data.addColumn('number', 'Grain Bill');
data.addColumn('number', 'Lauter');
data.addColumn('number', 'NoSparge Lauter');
data.addColumn('number', 'Mash');
data.addColumn('number', 'NoSparge Mash');
data.addColumn('number', 'Brewhouse');
data.addColumn('number', 'NoSparge Brewhouse');

  // load data
  for (var i = 0; i < LauterArray.length; i++) {
    var row = [
	GBillArray[i], 
	LauterArray[i],
	LauterNoSpargeArray[i], 
	MashArray[i], 
	MashNoSpargeArray[i], 
	BrewhouseArray[i], 
	BrewhouseNoSpargeArray[i]];
    data.addRow(row);
  }

  var options = {
	  
title:'Efficiency vs Grain Bill Curves specific to you',
chartArea:{
    left:'10%',
    top: 20,
	bottom: 20,
    width: '70%',
	height: '80%',
  }
  }
 //chartArea: {left: 50}


 

  var chart = new  google.visualization.LineChart(document.getElementById('curve_chart'));
  chart.draw(data, options);
}






  function MashAnalysis(){
	  
  //initial analysis for no sparge setup
  
 var SpargeCoeff = parseFloat($('#SpargeCoeff').val());
SavedVolSparge = SecRun;

VolStart2 = WaterTot;
  FirstRun2 = (VolStart2 - LossGrain - LossTunTrub) * MashAdj;
  MAGMoist = 0.00;
  SGSuccrose = 46.21;
  MAGDryG = (1 - MAGMoist) * GBill;
  ExPot = MAGPot / SGSuccrose;
  ExConv = ExPot * (MAGEstConv / 100);
  MashWaterWt1 = (VolStart2 * 8.3304) + (GBill - MAGDryG);
  MSW1 = MAGDryG * ExConv;
  Plato1 = (100 * MSW1) / (MSW1 + MashWaterWt1);
  SG1 = 1 + (Plato1 / (258.6 - 0.879551 * Plato1));
  RW1 = (SG1 * (FirstRun2 / 1.022494888) * 8.3304);
  RS1 = (RW1 * Plato1) / 100;
  NoSpargeLauter = 100 * (RS1 / MSW1);
  
  //Secondary Analysis for equal runnings setup
  VolSparge = (VolPre/1.022494888)/ 2;
  VolStart2 = (WaterTot - VolSparge);
  FirstRun2 = (VolStart2 - LossGrain - LossTunTrub) * MashAdj;
  MAGDryG = (1 - MAGMoist) * GBill;
  ExPot = MAGPot / SGSuccrose;
  ExConv = ExPot * (MAGEstConv / 100);
  MashWaterWt1 = (VolStart2 * 8.3304) + (GBill - MAGDryG);
  MSW1 = MAGDryG * ExConv;
  Plato1 = (100 * MSW1) / (MSW1 + MashWaterWt1);
  SG1 = 1 + (Plato1 / (258.6 - 0.879551 * Plato1));
  RW1 = (SG1 * (FirstRun2 / 1.022494888) * 8.3304);
  RS1 = (RW1 * Plato1) / 100;
  RCWtr1 = RW1 - RS1;
  RetS1 = MSW1 - RS1;
  RetWat1 = VolStart2 * 8.3304 - RCWtr1;
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

  VolSparge = SavedVolSparge;

  SecRun = VolSparge;
  MAGFine = 0.7797;
  MAGRunRatio = Math.max(SecRun / FirstRun, 0);
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
  EstBrewhEff = VolChilled / (VolPost / 1.043841336) * EstMashEff;
  
  
 
  PlatoPre = (100 * RCSTot) / (RCSTot + RecW2 + RCWtr1);
  SGPre = 1 + (PlatoPre / (258.6 - 0.879551 * PlatoPre));
  RetSF = RetS2;
  EstConvWt = SugarTot * MAGEstConv / 100;
  TotalPoints = ((VolPre / 1.043841336) * (SGPre - 1) * 1000);
  PlatoPost = (100 * RCSTot) / (RCSTot + RecW2 + RCWtr1 - (BoilRate * 8.3304 * (BoilTime / 60)));
  SGPost = 1 + (PlatoPost / (258.6 - 0.879551 * PlatoPost));
  TempMashout = (TempMash * (GBill + 5 * (GBill * Gabs)) + (5 * TempSparge * VolSparge)) / (GBill + 5 * (VolSparge + (GBill * Gabs)));
  
  
  //Measured gravities and efficiencies
  MeasMashPlato = -616.868 + (1111.14 * MeasMashGrav) - (630.272 * MeasMashGrav * MeasMashGrav) + (135.997 * MeasMashGrav * MeasMashGrav * MeasMashGrav);
  MeasGabs = Gabs;
  MeasMashWT = -((VolStart * 8.335 + (GBill * MAGMoist)) * MeasMashPlato) / (-100 + MeasMashPlato);
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
    YeastPitch = YeastRate * 3785.41 * BatchVol * MeasPostPlato / 1000;
  } else {
    YeastPitch = YeastRate * 3785.41 * BatchVol * PlatoPost / 1000;
  }
 
	StarterSize = (YeastPitch - 75 ) / 141;
	
	
  	if ($('#OverrideBrewhouse').is(':visible'))
		{
			
			counter = 1;
		SGPost = (1+(((OverrideBrewhouse / 100) * MAGPot * GBill )/ VolChilled)/1000);
		SGPre = 1+((((SGPost - 1)* 1000) * VolChilled)/(6.94/1.043841336))/1000;
		
		}
	
//EfficiencyEvaluation

	//TempAdjustmentFirst =( 4.13643 * Math.pow(10,-16) * Math.pow($('#MeasuredFirstRunningsTemp').val(),6) - 4.05998 * Math.pow(10,-13) * Math.pow($('#MeasuredFirstRunningsTemp').val(),5) + 1.61536 * Math.pow(10,-10) * Math.pow($('#MeasuredFirstRunningsTemp').val(),4) - 3.44854 * Math.pow(10,-8) * Math.pow($('#MeasuredFirstRunningsTemp').val(),3) + 0.00000532769 * Math.pow($('#MeasuredFirstRunningsTemp').val(),2) - 0.000292675 * $('#MeasuredFirstRunningsTemp').val() + 1.00493)/1.0019647220067072;
	
	TempAdjustmentStrike =( 4.13643 * Math.pow(10,-16) * Math.pow($('#MeasuredStrikeTemp').val(),6) - 4.05998 * Math.pow(10,-13) * Math.pow($('#MeasuredStrikeTemp').val(),5) + 1.61536 * Math.pow(10,-10) * Math.pow($('#MeasuredStrikeTemp').val(),4) - 3.44854 * Math.pow(10,-8) * Math.pow($('#MeasuredStrikeTemp').val(),3) + 0.00000532769 * Math.pow($('#MeasuredStrikeTemp').val(),2) - 0.000292675 * $('#MeasuredStrikeTemp').val() + 1.00493)/1.0019647220067072;
	
	MeasuredStrikeTempVol = MeasuredStrikeVol / TempAdjustmentStrike;
    byId('MeasuredStrikeTempVol').value = MeasuredStrikeTempVol.toFixed(2);
	
	//MeasuredFirstRunningsTempVol = MeasuredFirstRunningsVol / TempAdjustmentFirst;
    //byId('MeasuredFirstRunningsTempVol').value = MeasuredFirstRunningsTempVol.toFixed(3);
		
	TempAdjustmentBoil =( 4.13643 * Math.pow(10,-16) * Math.pow($('#MeasuredPreboilTemp').val(),6) - 4.05998 * Math.pow(10,-13) * Math.pow($('#MeasuredPreboilTemp').val(),5) + 1.61536 * Math.pow(10,-10) * Math.pow($('#MeasuredPreboilTemp').val(),4) - 3.44854 * Math.pow(10,-8) * Math.pow($('#MeasuredPreboilTemp').val(),3) + 0.00000532769 * Math.pow($('#MeasuredPreboilTemp').val(),2) - 0.000292675 * $('#MeasuredPreboilTemp').val() + 1.00493)/1.0019647220067072;
	
	MeasuredPreboilTempVol = MeasuredPreboilVol / TempAdjustmentBoil;
    byId('MeasuredPreboilTempVol').value = MeasuredPreboilTempVol.toFixed(2);
	
	TempAdjustmentChilled =( 4.13643 * Math.pow(10,-16) * Math.pow($('#MeasuredChilledVol').val(),6) - 4.05998 * Math.pow(10,-13) * Math.pow($('#MeasuredChilledVol').val(),5) + 1.61536 * Math.pow(10,-10) * Math.pow($('#MeasuredChilledVol').val(),4) - 3.44854 * Math.pow(10,-8) * Math.pow($('#MeasuredChilledVol').val(),3) + 0.00000532769 * Math.pow($('#MeasuredChilledVol').val(),2) - 0.000292675 * $('#MeasuredChilledVol').val() + 1.00493)/1.0019647220067072;
	
	MeasuredChilledTempVol = MeasuredChilledVol / TempAdjustmentChilled;
    byId('MeasuredChilledTempVol').value = MeasuredChilledTempVol.toFixed(2);
		//MeasuredStrikeVol = VolStrike;
	//byId('MeasuredStrikeVol').value = MeasuredStrikeVol.toFixed(3);
	//MeasuredStrikeTemp = TempStrike;
	//byId('MeasuredStrikeTemp').value = MeasuredStrikeTemp.toFixed(3);
	
	
	
	//Gravity points
	

		
	MashSG =  ((1+((100*MAGPot*GBill)/(MAGPot*GBill+SGSuccrose*8.3304*MeasuredStrikeVol)/(258.6-227.1*((100*MAGPot*GBill)/(MAGPot*GBill+SGSuccrose*8.3304*MeasuredStrikeVol)/258.2)))));
	MashWortWeight =(((MAGPot*GBill)/SGSuccrose)+(8.3304*MeasuredStrikeVol));
	MashWortVolume = MashWortWeight/(8.3304*MashSG);
	TotalPoints = MashWortVolume * (MashSG-1)*1000;
	FirstRunningGravPoints = ((MeasuredFirstRunningsGrav-1)*1000)*MashWortVolume;
		if (GBill > 0.1 && MeasuredStrikeVol > 0.1 &&  MeasuredFirstRunningsGrav > 1.001) {
	MeasuredConversion = 100* (FirstRunningGravPoints/TotalPoints);
	MeasuredConversionFeedback = 10+((MeasuredConversion-96)*1.25);
	
		}
		else {
	MeasuredConversion = 0;
	MeasuredConversionFeedback = 0;
		}
				if (MeasuredConversion > 0 && MeasuredPreboilGrav > 1.001 && MeasuredPreboilTempVol > 0.1) {
	BoilGravPoints = ((MeasuredPreboilGrav-1)*1000)*MeasuredPreboilTempVol;
	MeasuredMash = 100 * (BoilGravPoints/TotalPoints);
	MeasuredLauter = 100*MeasuredMash / MeasuredConversion;
	MeasuredSparge = 100*((MeasuredLauter/100) - EstLauterFirstRunEffArray[GBillArrayIndex])/EstLauterSecRunEffArray[GBillArrayIndex];
		}
		else {
	BoilGravPoints = 0;
	MeasuredMash = 0;
	MeasuredLauter = 0;
	MeasuredSparge = 0;
		}

		
		
	GBillArrayIndex = (GBill-5)/0.1;
	
					if (MeasuredMash > 0 && MeasuredChilledGrav > 1.001 && MeasuredChilledTempVol > 0.1) {
	ChilledGravPoints = ((MeasuredChilledGrav-1)*1000)*MeasuredChilledTempVol;
	MeasuredBrewhouse = 100 * (ChilledGravPoints/TotalPoints);
		}
		else {
	ChilledGravPoints = 0;
	MeasuredBrewhouse = 0;
		}
		//feedback scores
		MeasuredLauterFeedback = MeasuredLauter/(100*LauterArray[GBillArrayIndex]);
		MeasuredSpargeFeedback = MeasuredSparge/10;
		if (MeasuredConversion < 1) {
			MeasuredMashFeedback = 0;
		}
		else {
			MeasuredMashFeedback = MeasuredMash / ((LauterArray[GBillArrayIndex])*MeasuredConversion);
		}
				if (MeasuredMash < 1) {
			MeasuredBrewhouseFeedback = 0;
		}
		else {
		MeasuredBrewhouseFeedback = 10*MeasuredBrewhouse / MeasuredMash;
		}
	
	
	
	//Estimate LauterEfficiency
	
	
  }




function updateCalc() {
  if (!allFieldsValid()) {
    return;
  }
  
  
  //Input Variables are taken here
  SpargeCoeff = parseFloat($('#SpargeCoeff').val());
  TargetOG = parseFloat($('#TargetOG').val());
  BatchVol = parseFloat($('#BatchVol').val());
  GBill = parseFloat($('#GBill').val());
  MAGPot = parseFloat($('#MAGPot').val());
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
  OverrideBrewhouse = parseFloat($('#OverrideBrewhouse').val());
  YeastRate = parseFloat($('#YeastRate').val());
  MeasuredStrikeTemp = parseFloat($('#MeasuredStrikeTemp').val());
//MeasuredFirstRunningsVol = parseFloat($('#MeasuredFirstRunningsVol').val());
//MeasuredFirstRunningsTemp = parseFloat($('#MeasuredFirstRunningsTemp').val());
MeasuredFirstRunningsGrav = parseFloat($('#MeasuredFirstRunningsGrav').val());
MeasuredStrikeVol = parseFloat($('#MeasuredStrikeVol').val());
MeasuredStrikeTempVol = parseFloat($('#MeasuredStrikeTempVol').val());
//MeasuredFirstRunningsTempVol = parseFloat($('#MeasuredFirstRunningsTempVol').val());
MeasuredPreboilVol = parseFloat($('#MeasuredPreboilVol').val());
MeasuredPreboilTemp = parseFloat($('#MeasuredPreboilTemp').val());
MeasuredPreboilGrav = parseFloat($('#MeasuredPreboilGrav').val());
MeasuredPreboilTempVol = parseFloat($('#MeasuredPreboilTempVol').val());
MeasuredChilledVol = parseFloat($('#MeasuredChilledVol').val());
MeasuredChilledTemp = parseFloat($('#MeasuredChilledTemp').val());
MeasuredChilledGrav = parseFloat($('#MeasuredChilledGrav').val());
  

  
  
    //convert metric to imperial
  
  if (radio == 'metric')
  {
  GBill = GBill * 2.20462262184878;
  KettleID = KettleID * 0.3937007874015750000000;
  VolSparge = VolSparge * 0.264172052358148;
  BoilRate = BoilRate * 0.264172052358148;
  BatchVol = BatchVol * 0.264172052358148;
  Gabs = Gabs / 8.3454;
  PotSize = PotSize * 0.264172052358148;
  LossTrub = LossTrub * 0.264172052358148;
  LossTunTrub = LossTunTrub * 0.264172052358148;
  LossFermTrub = LossFermTrub * 0.264172052358148;
  HBill = HBill * 0.035274;
  DHop = DHop * 0.035274;
  TempSparge = (TempSparge * 1.8) + 32;
  TempGrain = (TempGrain * 1.8) + 32;
  MashThickness = MashThickness * 0.479305709267586;
  TempMash = (TempMash * 1.8) + 32;
  Habs = Habs / 0.133526;
  
  }  


	
	
  HopRatio = HBill / BatchVol;
  LossBoil = (BoilTime * BoilRate / 60) / 1.043841336;
  LossHop = HBill * Habs;
  LossGrain = GBill * Gabs;
  LossTot = LossGrain + LossHop + (LossBoil) + LossTrub + LossTunTrub;
  WaterTot = BatchVol + LossTot;
  
  /*if (MashThickness == 0) {
    VolSparge2 = 0;
  } else {
    VolSparge2 = WaterTot - (GBill * MashThickness / 4);
    VolSparge = VolSparge2;
  }*/
 
 /*Use control1 to monitor sparge/mash thickness
 
 /if (PreviousSparge != VolSparge)
 /{Control1 = 1;)

 if (PreviousThickness != MashThickness)
 {Control1 = 2; */


  
  /*Make a new sparge input set mashThickness to zero
  if (MashThickness != MashThick)
    {
		if (PreviousSparge !== VolSparge)
		{
     MashThickness = (WaterTot - VolSparge) * 4 / GBill;
	 
  byId('MashThickness').value = MashThickness.toFixed(2);

  PreviousSparge = VolSparge;
    }    }*/
  
       //Make a new MashThickness input set Sparge to zero
	   
	   if (radio !== 'metric')
	   {
	   
	   if (GBill != PreviousGBill)
	   {
		        VolSparge = WaterTot - ( ( MashThickness * GBill ) / 4);
  byId('VolSparge').value = VolSparge.toFixed(2);
    PreviousSparge = VolSparge.toFixed(2);
	   }

	   if (MashThickness != PreviousThickness)
	   {
     VolSparge = WaterTot - ( ( MashThickness * GBill ) / 4);
  byId('VolSparge').value = VolSparge.toFixed(2);
    PreviousSparge = VolSparge.toFixed(2);
	   }
	   
	   
  if (VolSparge != PreviousSparge)
    {
		
     MashThickness = ((WaterTot - VolSparge) * 4 / GBill);
  byId('MashThickness').value = MashThickness.toFixed(3);
  	 PreviousThickness = MashThickness.toFixed(3);
  PreviousSparge = VolSparge.toFixed(2);
   }
   

	      if (VolSparge <= 0)
   {
	
	   VolSparge = 0;
  byId('VolSparge').value = VolSparge.toFixed(2);
     MashThickness = (WaterTot) * 4 / GBill;
	   byId('MashThickness').value = MashThickness.toFixed(3);
	   PreviousThickness = MashThickness.toFixed(3);
	   PreviousSparge = 0;
	   
   }
  
	   }
	   
	   // add sparge - thickness relationship to metric
	   
	   
	   
	   
	   
  VolStart = (WaterTot - VolSparge);
  TempStrike = TempMash + (0.05 * GBill / VolStart) * (TempMash - TempGrain);
  MashAdj = ( 4.13643 * Math.pow(10,-16) * Math.pow($('#TempMash').val(),6) - 4.05998 * Math.pow(10,-13) * Math.pow($('#TempMash').val(),5) + 1.61536 * Math.pow(10,-10) * Math.pow($('#TempMash').val(),4) - 3.44854 * Math.pow(10,-8) * Math.pow($('#TempMash').val(),3) + 0.00000532769 * Math.pow($('#TempMash').val(),2) - 0.000292675 * $('#TempMash').val() + 1.00493);
  
  //1.022494888;
  StrikeAdj = ( 4.13643 * Math.pow(10,-16) * Math.pow($('#TempStrike').val(),6) - 4.05998 * Math.pow(10,-13) * Math.pow($('#TempStrike').val(),5) + 1.61536 * Math.pow(10,-10) * Math.pow($('#TempStrike').val(),4) - 3.44854 * Math.pow(10,-8) * Math.pow($('#TempStrike').val(),3) + 0.00000532769 * Math.pow($('#TempStrike').val(),2) - 0.000292675 * $('#TempStrike').val() + 1.00493);
  
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
  


 MashAnalysis();
 
 
 
 //convert both inputs and outputs to imperial, if it's in metric.
    if (radio == 'metric')
  {
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
      MashThickness = MashThickness.toFixed(3);
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
  
  
  VolStart = VolStart / 0.264172052358148;
  VolStrike = VolStart / StrikeAdj;
  LossGrain = LossGrain / 0.264172052358148;
  WaterTot = WaterTot / 0.264172052358148;
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
    SecRun2 = SecRun2 / 0.264172052358148;
  HSecRun = HSecRun / 0.3937007874015750000000;
  EBoil = (0.0058 * KettleID * KettleID) - (0.0009 * KettleID) + 0.0038;
  MeasPrebVolume = MeasPrebVolume / 0.264172052358148;
  TempStrike = ( TempStrike - 32 ) / 1.8;
  TempMashout = ( TempMashout - 32 ) / 1.8;
  
  
  }
  OGDifference = TargetOG - SGPost;
  updateDisplay();
  preradio = radio;
  PreviousSparge = VolSparge;
  PreviousGBill = GBill;
  
LauterEfficiency();
//end of updateCalc
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
    //medium Jumps UP.
  while (OGDifference > 0.001) {
    GBill = GBill + 0.01;
    byId('GBill').value = GBill;
    updateCalc();
  }
      //small Jumps UP.
  while (OGDifference > 0.0001) {
    GBill = GBill + 0.001;
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
      //medium Jumps down.
    while (OGDifference < -0.001) {
    GBill = GBill - 0.01;
    byId('GBill').value = GBill;
    updateCalc();
  }
        //small Jumps down.
    while (OGDifference < -0.0001) {
    GBill = GBill - 0.001;
    byId('GBill').value = GBill;
    updateCalc();
  }
    }//close downward search
	  GBill = GBill.toFixed(3);
  byId('GBill').value = GBill;
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
SavedRadio = $("input[name=units]:checked").val();
TargetOG = byId('TargetOG').value;
Style = byId('Style').value;
Brewday = byId('Brewday').value;
MAGPot = byId('MAGPot').value;
SpargeCoeff = byId('SpargeCoeff').value;
MeasPrebVolume = byId('MeasPrebVolume').value;
MeasMashGrav = byId('MeasMashGrav').value;
MeasPrebGrav = byId('MeasPrebGrav').value;

SavedArray = [BatchVol,GBill,HBill,DHop,BoilTime,TempMash,TempGrain,TempSparge,VolSparge,Gabs,Habs,BoilRate,PotSize,KettleID,LossTrub,LossFermTrub,LossTunTrub,MAGEstConv,SavedRadio,MashThickness,BeerName,Style,TargetOG,Brewday,MAGPot,SpargeCoeff,MeasPrebVolume,MeasMashGrav,MeasPrebGrav];
Saved = SavedArray.join();
updateCalc();

}

function ExportData()
{
CreateSaved();
byId('DataName').value = "" + Saved;
}

var ImportData = function ImportData() {

DataName = byId('DataName').value;
//Check SavedData 
if (DataName.length <60)
{
//do nothing
  byId('DataName').value = "Import Failed, paste data string here to import.";
}
else {

 Saved = DataName;
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
  byId('LossTunTrub').value = SavedArray[16];
  byId('LossFermTrub').value = SavedArray[15];
  byId('MAGEstConv').value = SavedArray[17];
  byId('MashThickness').value = SavedArray[19];
  SavedRadio = SavedArray[18];
  document.getElementById(SavedRadio).checked = true;
  byId('BeerName').value = SavedArray[20];
  byId('Style').value = SavedArray[21];
  byId('TargetOG').value = SavedArray[22];
  byId('Brewday').value = SavedArray[23];
  byId('MAGPot').value = SavedArray[24];
  byId('SpargeCoeff').value = SavedArray[25];
  byId('MeasPrebVolume').value = SavedArray[26];
  byId('MeasMashGrav').value = SavedArray[27];
  byId('MeasPrebGrav').value = SavedArray[28];
  preradio = SavedRadio;
  radio = SavedRadio;
  
    byId('DataName').value = "Import of " + byId('BeerName').value +" Complete";
  
}
  updateCalc();
}


var LoadData = function LoadData() {

DataName = byId('DataName').value;
 Load = localStorage.getItem(DataName);
 CreateSaved();
 if (Load == Saved)
 {
 }
 else if (DataName == "Reset")
 {
  byId('BatchVol').value = 5.5;
  byId('GBill').value = 12;
  byId('HBill').value = 57;
  byId('Dhop').value = 0;
  byId('BoilTime').value = 60;
  byId('TempMash').value = 154;
  byId('TempGrain').value = 72;
  byId('TempSparge').value = 168;
  byId('VolSparge').value = 0;
  byId('Gabs').value = 0.08;
  byId('Habs').value = 0.0014;
  byId('BoilRate').value = 1.2;
  byId('PotSize').value = 9;
  byId('KettleID').value = 13.898;
  byId('LossTrub').value = 0;
  byId('LossTunTrub').value = 0;
  byId('LossFermTrub').value = 0.5;
  byId('MAGEstConv').value = 95;
  byId('MashThickness').value = 0;
    SavedRadio = SavedArray[18];
  document.getElementById(SavedRadio).checked = true;
  radio = SavedRadio;
  byId('BeerName').value = "InitiAle";
  byId('Style').value = "Stout";
  byId('TargetOG').value = "1.060";
  byId('Brewday').value = today;
  byId('MAGPot').value = 33;
  byId('SpargeCoeff').value = 100;
  byId('MeasPrebVolume').value = VolPre;
  byId('MeasMashGrav').value = SG1;
  byId('MeasPrebGrav').value = SGPre;
    preradio=SavedRadio;
  radio = preradio;
      byId('DataName').value = "Values reset to default";
 }
 
 else {
 SavedArray = Load.split(",")
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
  byId('LossTunTrub').value = SavedArray[16];
  byId('LossFermTrub').value = SavedArray[15];
  byId('MAGEstConv').value = SavedArray[17];
    byId('MashThickness').value = SavedArray[19];
  SavedRadio = SavedArray[18];
  document.getElementById(SavedRadio).checked = true;
  byId('BeerName').value = SavedArray[20];
  byId('Style').value = SavedArray[21];
  byId('TargetOG').value = SavedArray[22];
  byId('Brewday').value = SavedArray[23];
  byId('MAGPot').value = SavedArray[24];
  byId('SpargeCoeff').value = SavedArray[25];
  byId('MeasPrebVolume').value = SavedArray[26];
  byId('MeasMashGrav').value = SavedArray[27];
  byId('MeasPrebGrav').value = SavedArray[28];
  preradio = SavedRadio;
  radio = preradio;
  
      byId('DataName').value = "Import of " + byId('BeerName').value +" Complete";
 }
  updateCalc();
}


//window.onload = LoadData;

window.onload = updateCalc();




function validateField(field) {
  $field = $(field);
  if ($field.val().match(/^d*(.\d+)?/)) {
    $field.parents('div.control-group:first').removeClass('error');
    return true;
  }
  $field.parents('div.control-group:first').addClass('error');
  return false;
}

function Simple() {

	
$('#MAGPotToggle').hide();
$('#TempSpargeToggle').hide();
$('#BeerNameToggle').hide();
$('#StyleToggle').hide();
$('#BrewdayToggle').hide();
$('#TargetOGToggle').hide();
$('#YeastRateToggle').hide();
$('#HBillToggle').hide();
$('#DHopToggle').hide();
$('#MiddlecolumnToggle').hide();
$('#SimpleToggle').hide();
$('#OGDifferenceToggle').hide();
$('#HabsToggle').hide();
$('#YeastPitchToggle').hide();
$('#StarterSizeToggle').hide();
$('#OGDifferenceToggle').hide();
$('#AdvancedToggle').show();
$('#YeastToggle').show();
$('#EfficiencyEvaluationToggle').show();
$('#FeedbackToggle').hide();
$('#RightColumnToggle').show();
$('#MeasuredEfficiencyToggle').hide();
$('#Calculators').hide();
location.hash = "Simple";
}
function Advanced() {
$('#MAGPotToggle').show();
$('#SimpleToggle').show();
$('#AdvancedToggle').hide();
$('#MiddlecolumnToggle').show(); 
$('#EfficienciesToggle').show();
$('#EfficiencyEvaluation').hide();
$('#EfficiencyFeedback').hide(); 
$('#BeerNameToggle').show();
$('#StyleToggle').show();
$('#BrewdayToggle').show();
$('#TargetOGToggle').show();
$('#YeastRateToggle').show();
$('#BoilTimeToggle').show();
$('#Gabs').show();
$('#ProcessToggle').show();
$('#HBillToggle').show();
$('#HabsToggle').show();
$('#DHopToggle').show();
$('#TempMashToggle').show();
$('#TempGrainToggle').show();
$('#MashThicknessToggle').show();
$('#PotSizeToggle').show();
$('#KettleIDToggle').show();
$('#LossFermTrubToggle').show();
$('#LossTunTrubToggle').show();
$('#LossTrubToggle').show();
$('#VolSpargeToggle').show();
$('#TempSpargeToggle').show();
$('#OGDifferenceToggle').show();
$('#YeastPitchToggle').show();
$('#StarterSizeToggle').show();
$('#RightColumnToggle').show();
$('#EfficiencyEvaluationToggle').show();
$('#FeedbackToggle').hide();
$('#MeasuredEfficiencyToggle').hide();
location.hash = "Advanced";
$('#Calculators').hide();
    $('#GBill').focus();
}

function BrewhouseToggle() {
		
byId('OverrideBrewhouse').value = EstBrewhEff.toFixed(1);
$('#BrewHouseToggle').toggle();
updateCalc();
}

function MeasuredEffToggle() {
byId('MeasPrebVolume').value = VolPre.toFixed(2);
byId('MeasPrebGrav').value = SGPre.toFixed(3);
byId('MeasMashGrav').value = SG1.toFixed(3);
$('#MeasuredEff').toggle();
updateCalc();
updateInputs();
}

/*function YeastToggle() {
	//hide all middle column
$('#EfficienciesToggle').toggle();
$('#YeastContainer').show();
$('#AdvancedToggle').show();
$('#YeastToggle').hide();
updateCalc();
location.hash = "Yeast";
}*/

/*function MeasureEfficiencyToggle() {
	//hide all middle column
$('#EfficienciesToggle').toggle();
$('#YeastContainer').show();
$('#AdvancedToggle').show();
$('#YeastToggle').hide();
updateCalc();
location.hash = "EfficiencyEvaluation";
}*/

function EfficiencyEvaluationToggle() {
$('#BeerNameToggle').hide();
$('#StyleToggle').hide();
$('#BrewdayToggle').hide();
$('#TargetOGToggle').hide();
$('#YeastRateToggle').hide();
$('#BoilTimeToggle').show();
$('#Gabs').show();
$('#HBillToggle').hide();
$('#HabsToggle').hide();
$('#DHopToggle').hide();
$('#TempMashToggle').hide();
$('#TempGrainToggle').hide();
$('#MashThicknessToggle').hide();
$('#PotSizeToggle').hide();
$('#KettleIDToggle').hide();
$('#LossFermTrubToggle').show();
$('#LossTunTrubToggle').show();
$('#LossTrubToggle').show();
$('#VolSpargeToggle').hide();
$('#TempSpargeToggle').hide();
$('#OGDifferenceToggle').hide();
$('#YeastPitchToggle').hide();
$('#StarterSizeToggle').hide();
$('#OGDifferenceToggle').hide();
$('#MiddlecolumnToggle').show();  
$('#EfficienciesToggle').hide();
$('#RightColumnToggle').hide();
$('#EquipmentToggle').show();
$('#EfficiencyEvaluation').show();
$('#FeedbackToggle').show();
//$('#YeastContainer').hide();
$('#AdvancedToggle').show();
$('#EfficiencyEvaluationToggle').hide();
$('#FirstRunningsToggle').show();
//$('#YeastToggle').hide();
updateCalc();
location.hash = "EfficiencyEvaluation";
$('#Calculators').hide();
window.scrollTo(0, 0);
}


function ThermalToggle() {
	//hide all middle column
$('#MiddlecolumnToggle').show();  
$('#EfficienciesToggle').hide();
$('#EfficiencyEvaluation').show();
//$('#YeastContainer').hide();
$('#AdvancedToggle').show();
$('#EfficiencyEvaluationToggle').hide();

$('#FirstRunningsToggle').hide();
//$('#YeastToggle').hide();
updateCalc();
location.hash = "Thermal";
$('#Calculators').hide();
window.scrollTo(0, 0);
}



