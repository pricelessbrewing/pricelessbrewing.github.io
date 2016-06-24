var R, ActivationEnergy, Konstant, VaporPressureA, VaporPressureB, VaporPressureC, DMSPressureA, DMSPressureB, DMSPressureC, GammaA, GammaB, GammaC, GammaD, TempMash, TempBoil, TempCooled, TempWater, Patm, WindSpeed, TempAmbient, RH, SatPressureH2O, PartialPressureH20, MassRatioH20Air, VolPre, mass, BoilSurface, TimeHeat, TimeBoil, TimeCool, time, temp, conConcSMMInitial, conConcDMSInitial, volatility, volume, constant, relpressure, deltaT, heatRate, boilRate, Ta, Ti, Tf, kcool, ConcSMMInitial, ConcDMSInitial, Temp, t, deltat, k1, DeltaConcSmm, ConcDMSInitial, deltaConcDMS, pw, tau, gamma, pd, K, xs, deltam, t1, t2,BoilRate,KettleID,GBill, BoilTime,TempChilled,SMMContent,TimeHeating,TimeCooling,AtmTemp,Pressure,ConcDMSBoil,ConcDMSVolChilled,DMSBoilLost,DMSHeatLost,DMSChillLost;  

function toggleDiv(divId) {

   $("#"+divId).toggle();

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
  $('#GBill').focus();
});


function allFieldsValid() {

  var fields = [
    'GBill',
    'BoilTime',
    'BoilRate',
    'TempMash',
    'KettleID',
	'VolPre',
	'TempMash',
	'TempBoil',
	'TempChilled',
	'SMMContent',
	'TimeHeating',
	'TimeCooling',
	'RH',
	'AtmTemp',
	'WindSpeed',
	'Pressure',
	'TempWater',
	

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



function updateCalc() {
  if (!allFieldsValid()) {
    return;
  }
  GBill = parseFloat($('#GBill').val());
  BoilTime = parseFloat($('#BoilTime').val());
  BoilRate = parseFloat($('#BoilRate').val());
  TempMash = parseFloat($('#TempMash').val());
  KettleID = parseFloat($('#KettleID').val());
  VolPre = parseFloat($('#VolPre').val());
  TempBoil = parseFloat($('#TempBoil').val());
  TempChilled = parseFloat($('#TempChilled').val());
  SMMContent = parseFloat($('#SMMContent').val());
  TimeHeating = parseFloat($('#TimeHeating').val());
  TimeCooling = parseFloat($('#TimeCooling').val());
  RH = parseFloat($('#RH').val());
  AtmTemp = parseFloat($('#AtmTemp').val());
  WindSpeed = parseFloat($('#WindSpeed').val());
  Pressure = parseFloat($('#Pressure').val());
    TempWater = parseFloat($('#TempWater').val());
    //do math

	//convert KettleID to cm
	KettleID = KettleID / 2.54;
	
	//get absolute value of wind speed
WindSpeed = Math.abs(WindSpeed);
//inputs
//ConcSMMInitial = 1000;
ConcSMMInitial = (1000 * SMMContent * GBill ) / VolPre; 



//convert inputs to Mark Hammonds variables here. 
boilRate = BoilRate /( 60 * 60);

//#mass loss in kg/s during a boil (my own kettle)


//Code courtesy of Mark Hammond. 
// Define Stuff
////ActivationEnergy = 186.e3            //activation energy ( from Scheuren 2014 )

////Konstant = 4.0e24            //rate constant ( from Scheuren 2014 )

R = 8.324; //Ideal gas constant

//these are typical values for open boil with poor heat distribution

ActivationEnergy = 128.9e3;
Konstant = 2.05e16;

//for Antoine Eqn. for vapor pressure of water 
VaporPressureA = 5.0854;
VaporPressureB = 1663.125;
VaporPressureC =  - 45.622;

//for Antoine Eqn. for vapor pressure of DMS

DMSPressureA = 4.28713;
DMSPressureB = 1201.134;
DMSPressureC =  - 29.906;

//for calculating target function ( gamma ) from Scheuren 2016 
GammaA = 59.966;
GammaB = 363.469;
GammaC = 783.32;
GammaD =  - 418.415;

//Temperatures (celsius) Input
//TempMash = 60;             //wort as it comes out of the lauter tun
//TempBoil = 100;             //boil or pasteurization temp
TempCooled = TempChilled;              //final cooled temp
//TempWater = 12;				//Cooling water temp


// Atmospheric conditions Input, or assume?
Patm = Pressure;             //pressure in hPa
//WindSpeed = 0;                 //windspeed in m / s
TempAmbient = AtmTemp;           //ambient air temperature
//RH = 50;                 //relative humidity of ambient air
SatPressureH2O = ( Math.pow(10,( VaporPressureA - ( VaporPressureB / ( VaporPressureC + ( TempAmbient + 273.15 ) ) ) ) )) * 1000 ; 
//saturation partial press of H2O at ambient temp
PartialPressureH20 = ( RH / 100 ) * SatPressureH2O;
//partial pressure of H2O ambient
MassRatioH20Air = ( 18 / 29 ) * ( PartialPressureH20 / ( Patm - PartialPressureH20 ) );               
 //mass ratio of water to air ( kg of H2O / kg of air )
 
 // Kettle Input
//VolPre = 30;                  //beginning liquid volume in liters
BoilMass = VolPre;                //liquid mass in kg
//BoilSurface = 0.196;               //area of kettle surface ( my own kettle )
BoilSurface = (3.14159265359 * (KettleID /2) * (KettleID /2)) * 0.00064516;
// Times Input

TimeHeat = TimeHeating;
TimeBoil = BoilTime;
TimeCool = TimeCooling;

//Constant Heating
deltaT = TempBoil  -  TempMash;
heatRate =  deltaT / TimeHeat;        //temperature change per minute

// Boil - off parameters 
//boilRate = 0.0011;                
//BoilMass loss in kg / s during a boil ( my own kettle )
// convert Input Boil rate gal/hr to kg/s. 


// Newton's Law of Cooling 
Ta = TempWater;                
Ti = TempBoil;
Tf = TempCooled;
kcool = ( Math.log( Ti - Ta )  -  Math.log( Tf - Ta ) ) / TimeCool; 
//cooling time constant for my kettle and immersion cooler


//Set Initial Values
//ConcSMMInitial = 1000;             
//initial concentration of SMM in micrograms per liter
ConcDMSInitial = 0;                //initial concentration of DMS 
Temp = TempMash;               //starting temp for all calculations
t = 0;                   //time in minutes
deltat = 0.01;           //time step ( 0.01 is 0.6s )


//heating loop
function Heat() {
while (Temp < TempBoil)
{
    
    k1 = Konstant * Math.exp(  - ActivationEnergy / ( R * ( Temp + 273.15 ) ) );

    //ConcSMMInitial.push( ConcSMMInitial );
    DeltaConcSmm = ConcSMMInitial * ( 1 - Math.exp(  - k1 * deltat ) );
    ConcSMMInitial = ConcSMMInitial - DeltaConcSmm;
    deltaConcDMS = ( 62 / 164 ) * DeltaConcSmm;
    ConcDMSInitial = ConcDMSInitial + deltaConcDMS;
    pw = ( Math.pow(10,( VaporPressureA - ( VaporPressureB / ( VaporPressureC + ( Temp + 273.15 ) ) ) )) ) * 1000;
	//saturation partial pressure of H2O in hPa
    tau = ( Temp + 273.15 ) / 298.15;
    gamma = Math.exp( GammaA + GammaB / tau + GammaC * Math.log( tau ) + GammaD * tau ); //CheckthisMath.exp()
	//Scheuren 2016 ( equation 29 )
    //constant.push( Math.log( gamma ) );
    pd = ( Math.pow(10, ( DMSPressureA - ( DMSPressureB / ( DMSPressureC + ( Temp + 273.15 ) ) ) ) )) * 1000;
	
	//partial pressure of DMS in hPa
    //relpressure.push( pd / 1000 );
    K = gamma * pd / Patm;        
	//volatility Scheuren 2016 ( equation 23 )
    //volatility.push( K );
    xs = ( 18 / 29 ) * ( pw / Patm );                   
	//rough aPartialPressureH20roMassRatioH20Airmation
	if (document.getElementById("Heat").checked == true)
{
deltam = 0;
}
else
{
    deltam = ( 25 + 19 * WindSpeed ) * BoilSurface * ( xs  -  MassRatioH20Air ) / 60 * deltat; 
}

	//evaporated water mass
    //conConcDMSInitial.push( ConcDMSInitial );
    ConcDMSInitial = ConcDMSInitial * Math.pow(( 1  -  deltam / BoilMass ), ( K - 1 ));       
	//Scheuren 2016 ( equation 32 );
    if (ConcDMSInitial <= 0){
        ConcDMSInitial = 0;}
    BoilMass = BoilMass - deltam;
   // volume.push(VolPre);
    VolPre = VolPre - deltam;
    //temp.push(Temp);
    Temp = Temp  + ( heatRate * deltat);
    //time.push(t);
    t  = t + deltat;

}//endloop

}//endfunction

Heat();
ConcDMSMash = ConcDMSInitial;

//get radio selections



//boil or pasteurization loop

Temp = TempBoil;
t1 = t;
k1 = Konstant * Math.exp( - ActivationEnergy / ( R * ( Temp + 273.15 ) ) );

function Pasteurization() {
while (t1 <= ( t + TimeBoil))
    {
    //conConcSMMInitial.push( ConcSMMInitial );
    DeltaConcSmm = ConcSMMInitial * ( 1 - Math.exp(  - k1 * deltat ) );
    //print ( DeltaConcSmm )
    ConcSMMInitial = ConcSMMInitial - DeltaConcSmm;
    //print( ConcSMMInitial )
    deltaConcDMS = ( 62 / 164 ) * DeltaConcSmm;
    //print( deltaConcDMS )
    ConcDMSInitial = ConcDMSInitial + deltaConcDMS;
    pw = Math.pow(10,( VaporPressureA - ( VaporPressureB / ( VaporPressureC + ( Temp + 273.15 ) ) ) ) ) * 1000;
    //print ( pw )
    tau = ( Temp + 273.15 ) / 298.15;
    gamma = Math.exp( GammaA + GammaB / tau + GammaC * Math.log( tau ) + GammaD * tau );
    //constant.push( Math.log( gamma ) );
    //print ( gamma )
    pd =  Math.pow(10,( DMSPressureA - ( DMSPressureB / ( DMSPressureC + ( Temp + 273.15 ) ) ) ) ) * 1000;
    //relpressure.push( pd / 1000 );
    K = gamma * pd / Patm;
    //print ( K )
    //volatility.push( K );
    xs = ( 18 / 29 ) * ( pw / Patm );
    //print( xs )
    if (Temp == 100){
        deltam = boilRate * 60 * deltat;
		}
    else {
        deltam = ( 25 + 19 * WindSpeed ) * BoilSurface * ( xs  -  MassRatioH20Air ) / 60 * deltat;
		}
    //print ( deltam )
    //conConcDMSInitial.push( ConcDMSInitial );
    //print ( ConcDMSInitial )
		if (document.getElementById("boil").checked == true)
{
deltam = 0;
}
    ConcDMSInitial = ConcDMSInitial * Math.pow(( 1  -  deltam / BoilMass ),( K - 1 )); 
    if (ConcDMSInitial <= 0){
        ConcDMSInitial = 0;
		}
    BoilMass  = BoilMass - deltam;
    //volume.push( VolPre );
    VolPre  = VolPre - deltam;
    //print( VolPre )
    //temp.push( Temp );
    //print( Temp )
    //time.push( t1 );
    t1 = t1 + deltat;
}//end loop
}//end pasturization function

Pasteurization();

ConcDMSBoil = ConcDMSInitial;
// Cooling loop 
Temp = TempBoil;
t2 = t1;

function Cooling() {

while (Temp > TempCooled){
    
    k1 = Konstant * Math.exp(  - ActivationEnergy / ( R * ( Temp + 273.15 ) ) );
    //print( k1 );
    //conConcSMMInitial.append( ConcSMMInitial );
    DeltaConcSmm = ConcSMMInitial * ( 1 - Math.exp(  - k1 * deltat ) );
    //print ( DeltaConcSmm )
    ConcSMMInitial  = ConcSMMInitial - DeltaConcSmm;
    //print( ConcSMMInitial )
    deltaConcDMS = ( 62 / 164 ) * DeltaConcSmm;
    //print( deltaConcDMS )
    ConcDMSInitial  = ConcDMSInitial + deltaConcDMS;
    pw = Math.pow(10,( VaporPressureA - ( VaporPressureB / ( VaporPressureC + ( Temp + 273.15 ) ) ) ) ) * 1000;
    //print ( pw )
    tau = ( Temp + 273.15 ) / 298.15;
    gamma = Math.exp( GammaA + GammaB / tau + GammaC * Math.log( tau ) + GammaD * tau );
    //constant.append( Math.log( gamma ) )
    //print ( gamma );
    pd = Math.pow(10,( DMSPressureA - ( DMSPressureB / ( DMSPressureC + ( Temp + 273.15 ) ) ) ) ) * 1000;
    //relpressure.append( pd / 1000 );
    K = gamma * pd / Patm;
    //print ( K )
    //volatility.append( K );
    xs = ( 18 / 29 ) * ( pw / Patm );
    //print( xs )
    deltam = ( 25 + 19 * WindSpeed) * BoilSurface * ( xs  -  0.0008 ) / 60 * deltat;
	
		if (document.getElementById("Chilling").checked == true)
{
deltam = 0;
}
    //print ( deltam )
    //conConcDMSInitial.append( ConcDMSInitial );
    //print ( ConcDMSInitial )
    ConcDMSInitial = ConcDMSInitial * Math.pow((1  -  deltam / BoilMass ),( K - 1 ));
	
    if (ConcDMSInitial < 0){
	
        ConcDMSInitial = 0;
		}
    BoilMass = BoilMass - deltam;
    //volume.append( VolPre );
    VolPre  = VolPre - deltam;
    //print( VolPre )
    //temp.append( Temp );
    Temp = Ta  +  ( Temp - Ta ) * Math.exp(-1*kcool * deltat);
    //print( Temp )
   // time.append( t2 );
    t2 = t2 + deltat;

} // end cooling loop

} //end cooling function

Cooling();

ConcDMSVolChilled = ConcDMSBoil - ConcDMSInitial;

ConcDMSInitial = ConcDMSInitial + 


//plotting python code. I have no idea how to plot things. Currently the data is saved as a very long string. See js .push(); 

/*##n=len( time )
##m=len( conConcSMMInitial )
##print ( n,m )

#### Plotting data ####    
plt.figure( 1 )
plt.subplot( 411 )
plt.plot( time,conConcSMMInitial )
#plt.aMassRatioH20Airs( [0,60,10,110] )
plt.ylabel( 'SMM Conc ( $\mu g / L$ )' )
plt.subplot( 412 )
plt.plot( time,conConcDMSInitial )
#plt.aMassRatioH20Airs( [0,60,990,1000] )
plt.ylabel( 'DMS Conc ( $\mu g / L$ )' )
plt.subplot( 413 )
plt.plot( time,temp )
#plt.aMassRatioH20Airs( [0,60,990,1000] )
plt.xlabel( 'Time ( $min$ )' )
plt.ylabel( 'Temp ( $\degree C$ )' )
plt.subplot( 414 )
plt.plot( time,volume )
#plt.aMassRatioH20Airs( [0,60,990,1000] )
plt.xlabel( 'Time ( $min$ )' )
plt.ylabel( 'VolPreol ( $liters$ )' )

##plt.figure( 2 )
##plt.semilogy( temp,relpressure )
##plt.xlabel( 'Temperature ( $\degree C$ )' )
##plt.ylabel( 'VolPreapor Press DMS ( $bar$ )' )
##
##plt.figure( 3 )
##plt.plot( temp,constant )
##plt.xlabel( 'Temperature ( $\degree C$ )' )
##plt.ylabel( 'ln( gamma ) ( $ - $ )' )
##
##plt.figure( 4 )
##plt.plot( temp,volatility )
##plt.xlabel( 'Temperature ( $\degree C$ )' )
##plt.ylabel( 'VolPreolatility, K ( $ - $ )' )
plt.show(  )

print( 'end' )

*/

    
    $('#ConcDMSInitial').text(ConcDMSInitial.toFixed(1));      
    $('#ConcDMSMash').text(ConcDMSMash.toFixed(1));      
    $('#ConcDMSBoil').text(ConcDMSBoil.toFixed(1));      
    $('#ConcDMSVolChilled').text(ConcDMSVolChilled.toFixed(1));      
	
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

function Checkboxes() {

if (document.getElementById("boil").checked == true)
{
DMSBoilLost = 0;

}

}

