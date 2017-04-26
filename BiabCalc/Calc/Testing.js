var MashThickness, VolSparge, PreviousSparge, PreviousThickness;



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
    'VolSparge',
    'MashThickness',

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
  MashThickness = parseFloat($('#MashThickness').val());
  VolSparge = parseFloat($('#VolSparge').val());

    //do math

	
	
 if (MashThickness != PreviousThickness) {
    VolSparge = MashThickness * 2;
    byId("VolSparge").value = VolSparge.toFixed(2);
    PreviousSparge = VolSparge.toFixed(2);
  }

  if (VolSparge != PreviousSparge) {
    MashThickness = VolSparge / 2;
    byId("MashThickness").value = MashThickness.toFixed(3);
    PreviousThickness = MashThickness.toFixed(3);
    PreviousSparge = VolSparge.toFixed(2);
  }

  if (VolSparge <= 0) {
    VolSparge = 0;
    byId("VolSparge").value = VolSparge.toFixed(2);
    MashThickness = VolSparge / 2;
    byId("MashThickness").value = MashThickness.toFixed(3);
    PreviousThickness = MashThickness.toFixed(3);
    PreviousSparge = 0;
  }


	
     
  PreviousSparge = VolSparge;
  PreviousThickness = MashThickness;	
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