var projects = [
    {
        url: 'assets/images/sun-main.jpg',
        description: 'Project Description',
        skills: 'html, as3'  
    },
    {
        url: 'http://www.example2.com',
        description: 'Project 2',
        skills: ''
    },
    {
        url: 'assets/images/sun-main.jpg',
        description: 'Project Description',
        skills: 'html, as3'  
    },
    {
        url: 'http://www.example2.com',
        description: 'Project 2',
        skills: ''
    },
    {
        url: 'assets/images/sun-main.jpg',
        description: 'Project Description',
        skills: 'html, as3'  
    },
    {
        url: 'http://www.example2.com',
        description: 'Project 2',
        skills: ''
    },
    {
        url: 'assets/images/sun-main.jpg',
        description: 'Project Description',
        skills: 'html, as3'  
    },
    {
        url: 'http://www.example2.com',
        description: 'Project 2',
        skills: ''
    },
    {
        url: 'assets/images/sun-main.jpg',
        description: 'Project Description',
        skills: 'html, as3'  
    },
    {
        url: 'http://www.example2.com',
        description: 'Project 2',
        skills: ''
    },
    {
        url: 'assets/images/sun-main.jpg',
        description: 'Project Description',
        skills: 'html, as3'  
    },
    {
        url: 'http://www.example2.com',
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
        
        $('body').bind('touchmove', false);
        //Try to set touchmove true on child elements
        
        var current_id = $(this).attr("id");
        var current_header = $(this).find("h3").html();    		
  		
		var str = "<div><img src='"+projects[current_id].url+"'/><h1> " + current_header +"</h1>" +
  				   "<br><p>" +projects[current_id].description+"</p> <br> <p>"+projects[current_id].skills+"</p>"; 
        
		$lightBox.find('#content').html(str);        
       
	});
	
    var animTo = function(elem) {
          		
		$('html, body').animate({
        	scrollTop: $(elem).offset().top
     	}, 500);	    	
    } 	
	
});

