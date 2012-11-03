$(document).ready(function() {
	
	$('.more-btn').click(function() {
		$(this).fadeToggle('fast'); 		
		$('#about-more').slideToggle();	
	});	
  
});