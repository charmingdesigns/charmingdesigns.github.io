var Charming = {
	initialize: function() {
		Charming.loadEvents();
	},
	loadEvents: function() {
		new WOW().init();
		$(window).scroll(function(){
			if($('body').scrollTop() < 50){
				$('.navbar').removeClass('top-nav-collapse');
				$('.navbar').removeClass('top-nav-collapse-full');
			} else {
				$('.navbar').addClass('top-nav-collapse');
			} 
			if($('body').scrollTop() > $(window).height()-$('.navbar').height()) {
				$('.navbar').addClass('top-nav-collapse-full');
			} else {
				$('.navbar').removeClass('top-nav-collapse-full');
			}
		});
		$(document).click(function(event) {
		   $('.navbar-collapse').collapse('hide');
		});

		$.scrollify({
			section : ".scrollify",
			interstitialSection : "",
			easing: "easeInOutQuart",
			scrollSpeed: 700,
			offset : 0,
			scrollbars: true,
			standardScrollElements: "",
			setHeights: true,
			overflowScroll: true,
			updateHash: true,
			touchScroll:true,
			before:function() {},
			after:function() {},
			afterResize:function() {},
			afterRender:function() {}
		});

		$('a.page-scroll').bind('click', function(event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 800, 'easeInOutExpo');
	    });
		console.info('all events loaded');
	}
};

Charming.initialize();