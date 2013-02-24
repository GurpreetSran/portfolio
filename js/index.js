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
  				   "<br><p>" +projects[current_id].description+"</p> <br> <p>"+projects[current_id].skills+"</p>"; 
        
		$lightBox.find('#content').html(str);        
       
	});
	
    var animTo = function(elem) {
          		
		$('html, body').animate({
        	scrollTop: $(elem).offset().top
     	}, 500);	    	
    } 	
	
});

