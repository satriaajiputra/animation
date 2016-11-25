$(document).ready(function() {
	$('a[role="play"]').on('click', function(e) {
		e.preventDefault();
		var video = $('#video-src');
		// var src_v = video.attr('src');
		// var v_id = src_v.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
		$(this).toggleClass('none');
		$('#video-src')[0].src += "&autoplay=1";
	})
});

var Carousel = (function() {
	var that = {};

	that.init = function() {
		$(document).ready(function() {
			$('.saids-carousel').owlCarousel({
				items:2,
			    loop:true,
			    margin:20,
			    nav:false,
			    navRewind:true,
			    dots:true,
			    responsive: {
			    	0: {
			    		items: 1
			    	},

			    	1024: {
			    		items: 2
			    	}
			    }
			});
		});
		$(document).ready(function() {
			$('.owl-galeri').owlCarousel({
				items:1,
			    loop:true,
			    margin:0,
			    nav:true,
			    navRewind:true,
			    dots:true
			});
		});
	}

	return that;
})();

var Fancy = (function() {
	var that = {};
	that.init = function() {
		$(document).ready(function() {
			$(".fancybox").fancybox({
				fitToView	: false,
				maxWidth	: '100%',
			});
		});
	}
	return that;
})();

$(document).ready(function() {
	$('a[role="close-search"]').on('click', function(e) {
		e.preventDefault();
		$('#search').slideUp();
	});

	$('a[role="show-search"]').on('click', function(e) {
		e.preventDefault();
		$('#search').slideDown();
	});
});
