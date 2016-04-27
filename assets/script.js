$(document).ready(function(){

	$(window).scroll(function(){
		/* This function tells you how far you have 
		scrolled from the top off the page */
		var offsetY = $(window).scrollTop();
		
	});

	/* Navigation waypoint */
	$('#content').waypoint(function(direction) {
		if (direction == 'down') {
			$('#nav').addClass('sticky');
		} else {
			$('#nav').removeClass('sticky');
		}
	});


	/* Animation */
  	$('.box').fadeOut(200);

	$('.box').each(function() {
		$(this).waypoint(function() {
      $(this).animate({left:50, opacity:"show"}, 1000);
	}, { offset: '50%'});
	});


  	$('.section-bg').fadeOut(200);

	$('.section-bg').each(function() {
		$(this).waypoint(function() {
      $(this).animate({right:40, opacity:"show"}, 1000);
	}, { offset: '50%'});
	});

	/* Click Scroll*/

	$('#home').click(function() {
		$('html, body').animate({
        scrollTop: $("#header").offset().top
    	}, 1500);
	});


	$('#destinations').click(function() {
		$('html, body').animate({
        scrollTop: $("#destination-section").offset().top
    	}, 1500);
	});


	$('#community').click(function() {
		$('html, body').animate({
        scrollTop: $("#community-section").offset().top
    	}, 1500);
	});

		$('#contact').click(function() {
		$('html, body').animate({
        scrollTop: $("#contact-section").offset().top
    	}, 1500);
	});


});