"use strict";

$(document).ready(function () {
	/* Video Lightbox */
	if (!!$.prototype.simpleLightboxVideo) {
		$('.video').simpleLightboxVideo();
	}

	/*ScrollUp*/
	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	/*Responsive Navigation*/
	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").on("click", function () {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		}
	});

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-mobile ul a").on("click", function () {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$("#nav-trigger span").removeClass("open");
		}
	});

	/* Sticky Navigation */
	if (!!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

	$('#content').waypoint(function (direction) {
		if (direction === 'down') {
			$('#header').addClass('nav-solid fadeInDown');
		}
		else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});

});


/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({ 'overflow-y': 'visible' });

	/* WOW Elements */
	if (typeof WOW == 'function') {
		wow = new WOW(
			{
			boxClass:     'wow',      // default
			animateClass: 'animated', // default
			offset:       0,          // default
			mobile:       true,       // default
			live:         true        // default
		  }
		  )
		  wow.init();
		
	}

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}
	
	$(".page-border .top-border").delay(350).addClass("wow fadeInDown animated");
	$(".page-border .top-border").delay(350).attr("style", "visibility: visible; animation-name: fadeInDown;");
	
	$(".page-border .right-border").delay(350).addClass("wow fadeInRight animated");
	$(".page-border .right-border ").delay(350).attr("style", "visibility: visible; animation-name: fadeInRight;");
	
	$(".page-border .bottom-border").delay(350).addClass("wow fadeInUp animated"); 
	$(".page-border .bottom-border ").delay(350).attr("style", "visibility: visible; animation-name: fadeInUp;");
	
	$(".page-border .left-border").delay(350).addClass("wow fadeInLeft animated"); 
	$(".page-border .left-border ").delay(350).attr("style", "visibility: visible; animation-name: fadeInLeft;");
});
