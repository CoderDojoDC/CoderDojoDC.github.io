// LAZY LOAD -- YOU CAN TAKE THIS OUT, BUT DON'T FORGET TO INCLUDE THE JS FILES IN THE THEME FOOTER AGAIN
LazyLoad.js(['/js/lib/jquery-1.10.2.min.js', '/bootstrap/js/bootstrap.min.js', '/js/lib/imagesloaded.pkgd.min.js', '/js/lib/packery.pkgd.min.js', '/js/plugins/nivo-lightbox.min.js', '/js/plugins/jquery.fitvids.js', '/js/plugins/retina-1.1.0.min.js'], function () {
	// PACKERY FRONT PAGE GRID
	var container = document.querySelector('#grid');
	var pckry;
	/*
	// we're not actually using this at the moment
	imagesLoaded( container, function() {
		pckry = new Packery( container, {
			itemSelector: '.item',
			gutter: 0
		});
	});
	*/
	// LIGHTBOX
	$('a.lightbox').nivoLightbox({
		effect: 'fall',                            
		theme: 'default',                                                
		errorMessage: 'The requested content cannot be loaded. Please try again later.'
	}); 
	// FITVIDS    
	$(".video-box").fitVids();
});
