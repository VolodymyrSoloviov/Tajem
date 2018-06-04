$(function() {
	$('#menu-icon').click(function() {
		if ($('#mobile-menu').is(':visible'))
			$('#mobile-menu').hide();
		else 
			$('#mobile-menu').show();
	});

	window.onresize = function(event) {
		$('#mobile-menu').hide();
	};	
});