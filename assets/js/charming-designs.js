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
		console.info('all events loaded');
	}
};

Charming.initialize();