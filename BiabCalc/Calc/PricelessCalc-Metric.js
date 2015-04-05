(function ($) {
	function allFieldsValid() {
		var fields = [ 'BatchVol' , 'GBill', 'HBill', 'BoilTime', 'BoilRate', 'TempGrain', 'TempMash', 'VolSparge', 'PotSize', 'KettleID', 'LossTrub', 'Gabs', 'Habs'];
		for (i = 0 ; i < fields.length ; i++ ) {
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
			//convert To Imperial
			L2G = 0.264172,
			C2I = 0.393701,
			I2C = 2.54,
			G2L = 3.785412,
			TempMashF = TempMash,
			TempGrain = (TempGrain * 1.8 + 32),
			TempMash = (TempMash * 1.8 + 32),
			BatchVol = BatchVol * L2G,
			GBill = GBill * 2.205,
			HBill = HBill * 0.035274,
			BoilRate = BoilRate * L2G,
			VolSparge = VolSparge * L2G,
			PotSize = PotSize * L2G,
			KettleID = KettleID * C2I,
			LossTrub = LossTrub * L2G,
			Gabs = Gabs * 0.1198,
			Habs = Habs * 7.489,
			//Done Converting inputs
			//Outputs
			LossBoil = BoilTime * BoilRate / 60,
			LossHop = HBill * Habs,
			LossGrain = GBill * Gabs,
			LossTot = (LossGrain + LossHop + LossBoil + LossTrub) * G2L,
			WaterTot = (BatchVol * G2L + LossTot),
			VolStart = (WaterTot - VolSparge * G2L),
			TempStrike = ((TempMash + (.05 * GBill / VolStart) * ( TempMash - TempGrain ))-32) / 1.8;	
			TempStrikeF = TempMash + (.05 * GBill / VolStart) * ( TempMash - TempGrain )
			MashAdj = 1.022494888,
//(4.13643E-16 * TempMashF * TempMashF * TempMashF * TempMashF * TempMashF * TempMashF - 4.05998E-13*  TempMashF * TempMashF * TempMashF * TempMashF * TempMashF + 1.61536E-10 * TempMashF * TempMashF * TempMashF * TempMashF - 3.44854E-8 * TempMashF * TempMashF * TempMashF + 5.32769E-6 * TempMashF * TempMashF - 2.92675E-4 * TempMashF  + 1.00493),
			StrikeAdj = 1.025641026,
//(4.13643E-16 * TempStrikeF * TempStrikeF * TempStrikeF * TempStrikeF * TempStrikeF * TempStrikeF - 4.05998E-13*  TempStrikeF * TempStrikeF * TempStrikeF * TempStrikeF * TempStrikeF + 1.61536E-10 * TempStrikeF * TempStrikeF * TempStrikeF * TempStrikeF - 3.44854E-8 * TempStrikeF * TempStrikeF * TempStrikeF + 5.32769E-6 * TempStrikeF * TempStrikeF - 2.92675E-4 * TempStrikeF  + 1.00493),
			VolStrike = (VolStart * StrikeAdj),
			LossHop = HBill * Habs,
			LossGrain = GBill * Gabs,
			VolMash = (VolStart + GBill *0.125) * MashAdj,
			VolPre = (WaterTot * L2G - LossGrain) * 1.043841336 * G2L,
			VolPost = (WaterTot * L2G - LossTot * L2G) * 1.043841336 * G2L,
			GalH = I2C * 294.118334834 / (KettleID * KettleID),
			LH = GalH / G2L,
			HTot = WaterTot * LH,
			HStart = LH * VolStart,
			HStrike = LH * VolStrike,
			HMash = LH * VolMash,
			HPre = LH * VolPre,
			//VolMinSparge = ( ( WaterTot + GBill * 0.08) * MashAdj ) - ( ( PotSize -0.01 ) ), 
			HPost = LH * VolPost;
			
			
		// console.log(VolStrike, WaterTot, MashThick, TempStrike);
		$('#WaterTot').text(WaterTot.toPrecision(4));
		$('#VolStrike').text(VolStrike.toPrecision(4));
		$('#LossBoil').text(LossBoil.toPrecision(4));
		$('#LossHop').text(LossHop.toPrecision(4));
		$('#LossGrain').text(LossGrain.toPrecision(4));
		$('#LossTot').text(LossTot.toPrecision(4));
		$('#VolStart').text(VolStart.toPrecision(4));
		$('#VolMash').text(VolMash.toPrecision(4));
		$('#VolPre').text(VolPre.toPrecision(4));
		$('#VolPost').text(VolPost.toPrecision(4));
		$('#TempStrike').text(TempStrike.toPrecision(4));
		$('#MashAdj').text(MashAdj.toPrecision(4));
		$('#Strikeadj').text(StrikeAdj.toPrecision(4));
		$('#GalH').text(GalH.toPrecision(4));
		$('#HTot').text(HTot.toPrecision(4));
		$('#HStart').text(HStart.toPrecision(4));
		$('#HStrike').text(HStrike.toPrecision(4));
		$('#HMash').text(HMash.toPrecision(4));
		$('#HPre').text(HPre.toPrecision(4));
		$('#HPost').text(HPost.toPrecision(4));
		$('#VolMinSparge').text(VolMinSparge.toPrecision(4));
		
		
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
		$('#calcForm').delegate('input[type=text]', 'change', function() {
			if (validateField(this)) {
				updateCalc();
			}
		}).submit(function (e) {
			e.preventDefault();
			updateCalc();
		});
		updateCalc();
		$('#GBill').focus();
	});
})(jQuery);
