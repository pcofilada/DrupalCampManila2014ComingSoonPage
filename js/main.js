$(document).ready(function(){
		var newYear = new Date(); 
		newYear = new Date("April 26, 2014"); 
		$('#countdown').countdown({until: newYear}); 
		 
		$('#removeCountdown').click(function() { 
		    var destroy = $(this).text() === 'Remove'; 
		    $(this).text(destroy ? 'Re-attach' : 'Remove'); 
		    $('#defaultCountdown').countdown(destroy ? 'destroy' : {until: newYear}); 
		});
		$.backstretch([
	      "images/1.jpg",
	      "images/2.jpg",
	      "images/3.jpg",
	      "images/4.jpg",
	      "images/5.jpg",
	      "images/6.jpg",
	      "images/7.jpg",
	      "images/8.jpg",
	      "images/9.jpg",
	      "images/10.jpg",
	      "images/11.jpg",
	      "images/12.jpg",
	      "images/13.jpg",
	      "images/14.jpg",
	      "images/15.jpg",
	      "images/16.jpg"
	  ], {duration: 3000, fade: 750});
});