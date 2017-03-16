var Volume, Temp, TempAdjustment, TempMash, BoilTempVolume, RoomTempVolume, FinalTemp, FinalTempVolume, FinalTempAdjustment;



$(document).ready(function() {
  $('#calcForm').delegate('input[type=text]', 'change', function() {
    if (validateField(this)) {
      updateCalc();
    }
  }).submit(function(e) {
    e.defaultPrevented;
    updateCalc();
  });
  $('#Volume').focus();
});


function allFieldsValid() {

  var fields = [
    'Volume',
    'Temp',
	'FinalTemp',
	

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
  }//Parse input variables
  Volume = parseFloat($('#Volume').val());
  Temp = parseFloat($('#Temp').val());
  FinalTemp = parseFloat($('#FinalTemp').val());

    //do math

	
	
		TempAdjustment =( 4.13643 * Math.pow(10,-16) * Math.pow($('#Temp').val(),6) - 4.05998 * Math.pow(10,-13) * Math.pow($('#Temp').val(),5) + 1.61536 * Math.pow(10,-10) * Math.pow($('#Temp').val(),4) - 3.44854 * Math.pow(10,-8) * Math.pow($('#Temp').val(),3) + 0.00000532769 * Math.pow($('#Temp').val(),2) - 0.000292675 * $('#Temp').val() + 1.00493)/1.0019647220067072;
		
		FinalTempAdjustment = ( 4.13643 * Math.pow(10,-16) * Math.pow($('#FinalTemp').val(),6) - 4.05998 * Math.pow(10,-13) * Math.pow($('#FinalTemp').val(),5) + 1.61536 * Math.pow(10,-10) * Math.pow($('#FinalTemp').val(),4) - 3.44854 * Math.pow(10,-8) * Math.pow($('#FinalTemp').val(),3) + 0.00000532769 * Math.pow($('#FinalTemp').val(),2) - 0.000292675 * $('#FinalTemp').val() + 1.00493)/1.0019647220067072;
		
		
			RoomTempVolume = Volume / TempAdjustment;
			FinalTempVolume = (Volume / TempAdjustment )*FinalTempAdjustment;
			BoilTempVolume = RoomTempVolume * 1.043841336;

    //Parse Output variables to fixed length, and update calc form
	
    $('#RoomTempVolume').text(RoomTempVolume.toFixed(2));      
    $('#BoilTempVolume').text(BoilTempVolume.toFixed(2)); 
	 $('#FinalTempVolume').text(FinalTempVolume.toFixed(2)); 
	
     
	
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

window.onload = updateCalc();