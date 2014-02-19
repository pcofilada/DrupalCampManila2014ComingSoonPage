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
	  ], {duration: 3000, fade: 750});
});