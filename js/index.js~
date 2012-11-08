$(document).ready(function() {
	
	$('#more-btn').click(function() {
		
		$moreBtn = $(this);
		
		$('#about-more').slideToggle();
		
		
		var txt = $moreBtn.text() == 'More' ? 'Less ^' : 'More';
		
		$moreBtn.text(txt);			
		
		
	});	
	
	$('nav li a').click(function(evt) {
       
       evt.preventDefault(); 		
	 	
		var elem =  $(this).attr('href');	
        
        animTo(elem);	   
     	
	});	
	
	$('#to-top').click(function(evt) {	
		
		var elem = $('body');	
		
		animTo(elem);	

	});
	
	$('#close-pop').click(function() {	
		
		$('#light').fadeOut();	
		$('#fade').fadeOut();	
	   $('body').removeClass('noScroll');	
	   
	   $(document).bind('touchmove', true);
	
	});	
	
	
	$('.project').click(function() {
		$lightBox = $('#light');	
		$lightBox.fadeIn();
		$('#fade').fadeIn();		
        $('body').addClass('noScroll');	
        
        $(document).bind('touchmove', false);
        
        //$lightBox.find('#content').html($(this).attr("id"));
  		
		/*  		
  		var str = "<p style='width:100%; height:100px; background: red'>This is image place holder</p><h1>The SUN - Header</h1>" +
  				   "<br><p>Project Description</p> <br> <p>Skills Used, Tested On, optimised for</p>"; 
        
		$lightBox.find('#content').html(str);        
       
       */ 	
	});
	
    var animTo = function(elem) {
          		
		$('html, body').animate({
        	scrollTop: $(elem).offset().top
     	}, 500);	    	
    } 	
	
});

