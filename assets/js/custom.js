$(document).ready(function () {
    
    
// Navbar Background Change on scroll   
 
$(function () {
    $(window).scroll(function () { 
        $('.custom-nav').toggleClass('bg-first , shadow-lg', $(this).scrollTop()> 50);
    });
});



// Testimonial Start
$('#testimonial-slider').owlCarousel({
	items:1,
	itemsDesktop:[1000,1],
	itemsDesktopSmall:[979,1],
	itemsTablet:[768,1],
	pagination: false,
	navigation:true,
	navigationText:["",""],
	slideSpeed:1000,
	autoPlay:true
});
$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".owl-next").html('<i class="fa fa-chevron-right"></i>');

// button animation
$(".owl-prev, .owl-next").hover(function () {
		$(this).css({
			background : 'white',
			color : '#daa520',
			position : 'relative'
		});
		$(this).animate({
			bottom : '5px',
		});
		
	}, function () {
		$(this).css({
			color : 'white',
			background : '#daa520',
			position : 'relative'
		});
		$(this).animate({
			bottom : '0px',
		});
	}
);
// Testimonial End

// Fade Up Animation
$('.fade-up').hover(function () {
		// over
		$(this).css({
			position : 'relative'
		});
		$(this).animate({
			bottom : '25px',
		});
	}, function () {
		// out
		$(this).animate({
			bottom : '0',
		});
	}
);

// Fade Up sm
$('.fade-up-sm').hover(function () {
		// over
		$(this).css({
			position : 'relative'
		});
		$(this).animate({
			bottom : '2px',
		});
	}, function () {
		// out
		$(this).animate({
			bottom : '0',
		});
	}
);





// Javascript to enable link to tab
var hash = location.hash.replace(/^#/, '');  // ^ means starting, meaning only match the first hash
if (hash) {
    $('.nav-tabs a[href="#' + hash + '"]').tab('show');
} 

// Change hash for page-reload
$('.nav-tabs a').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash;
})




});


