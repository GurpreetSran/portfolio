var projects = [
    {
        url: 'assets/images/sun-main.jpg',
        description: 'Project Description',
        skills: 'html, as3'  
    },
    {
        url: 'assets/images/match-center-main.jpg',
        description: 'Project 2',
        skills: ''
    },
    {
        url: 'assets/images/ipad-poc-main.jpg',
        description: 'Project Description',
        skills: 'html, as3'  
    },
    {
        url: 'assets/images/notw-main.jpg',
        description: 'Project 2',
        skills: ''
    },
    {
        url: 'assets/images/thetimes-main.jpg',
        description: 'Project Description',
        skills: 'html, as3'  
    },
    {
        url: 'assets/images/thesundaytimesmain.jpg',
        description: 'Project 2',
        skills: ''
    },
    {
        url: 'assets/images/',
        description: "<p><a href= '#'>Anna's Richardson's</a> Body Blitz Diet is a two week diet plan that guarantees up to 7lb weight loss in just 14 days." + 
        			  "Featuring the 5 RULES to guarantee weight loss, over 35 delicious, easy-to-prepare recipes, and the exclusive PANIC" + 
        			  "BUTTON to keep dieters on the straight and getting narrower!</p> <p>Whilst this app has been developed specifically"+
        			  "for iphone use, ELIPS studio is a plug-in for Flex that allows us to create native applications for multiple mobile" +
        			  "platforms (Apple, Android, Windows Mobile and Symbian). Therefore, because the app was built in ELIPS it is possible" +
        			  "to repurpose the app at a later date for use on another platform, should this be required.",
        skills: 'html, as3'  
    },
    {
        url: 'assets/images/',
        description: 'Project 2',
        skills: ''
    },
    {
        url: 'assets/images/',
        description: 'Project Description',
        skills: 'html, as3'  
    },
    {
        url: 'assets/images/',
        description: 'Project 2',
        skills: ''
    },
    {
        url: 'assets/images/',
        description: 'Project Description',
        skills: 'html, as3'  
    },
    {
        url: 'assets/images/',
        description: 'Project 2',
        skills: ''
    }
];

$(document).ready(function() {
	
	$('#more-btn').click(function() {
		
		$moreBtn = $(this);
		
		$('#about-more').slideToggle();
		
		
		var txt = $moreBtn.text() == 'Skills & Services' ? 'Skills & Services ^' : 'Skills & Services';
		
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
	   
	   $('body').bind('touchmove', true);
	
	});	
	
	
	$('.project').click(function() {
		
		$lightBox = $('#light');	
		$lightBox.fadeIn();
		$('#fade').fadeIn();		
       $('body').addClass('noScroll');	
        
        //$('body').bind('touchmove', false);
        //Try to set touchmove true on child elements
        
        var current_id = $(this).attr("id");
        var current_header = $(this).find("h3").html();    		
  		
		var str = "<div style='text-align: center'><img style='width: 100%;' src='"+projects[current_id].url+"'/></div><h1> " + current_header +"</h1>" +
		projects[current_id].description+ "<p><span>Skills Used: "+projects[current_id].skills+"</p>"; 
        
		$lightBox.find('#content').html(str);        
       
	});
	
    var animTo = function(elem) {
          		
		$('html, body').animate({
        	scrollTop: $(elem).offset().top
     	}, 500);	    	
    } 	
	
});

