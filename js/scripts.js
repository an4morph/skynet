/******* Modal Window ***********/

$(document).ready(function() {
	$('i#call, #connect').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(400, function(){
			$('#modal_form').css('display', 'block').animate({opacity: 1}, 200);
		});
	});

	$('#modal_close, #overlay').click( function(){
		$('#modal_form').animate({opacity: 0}, 200,	function(){ 
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
			);
	});
});