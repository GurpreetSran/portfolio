$(document).ready(function() {
	
	$('.more-btn').click(function() {
		//$(this).fadeToggle('fast'); 		
		$('#about-more').slideToggle();	
	});	
	
	$('nav li a').click(function() {
		
		var elem =  $(this).attr('href');	
	   
		$('html, body').animate({
        	scrollTop: $(elem).offset().top
     	}, 500);	
     	
     	return false;
	});	
	
	
	$('.project').click(function() {
		$lightBox = $('#light');	
		$lightBox.fadeIn();
		$('#fade').fadeIn();		
        $('body').addClass('noScroll');		
	});
	
});

