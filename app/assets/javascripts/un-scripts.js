/************/
/* JS INDEX */
/************/
/*-------------------------------------------------------------------------------------
	
	A. INIT FUNCTIONS
		
		a1. Appended Code
		a2. Features Init
		a3. Carousels Init
		a4. Isotope Grids
	
	B. COMPONENTS
	
		b1. Widgets
		b2. Audio Player 
		b3. Custom Select fields
		b4. Page Loader
		b5. Home Scroll
		b6. Youtube Player
	
	C. EVENTS
	
		c1. Items Hover
		c2. Sharing Icons
		c3. Top Button
		c4. Sticky Menu 
		c5. Sub Menu
		c6. Modals 
		c7. Load More Posts
	
	D. HELPERS
		
		d1. Modal Image Size
		d2. Home Scroll Resize
	
	E. WINDOW.EVENTS
    
-------------------------------------------------------------------------------------*/

jQuery(function($){
	
'use strict';

var INKAS = window.INKAS || {};



/**********************/
/* A. INIT FUNCTIONS  */
/**********************/



/* a1. Appended Code
-------------------------------------------------------------------------------------*/

INKAS.appendCodes = function(){
	
	// Sticky Menu
	var wSize = $(window).width();
	
	if( !$('#un-sticky').length && $('.un-header-wide').length ) {
		
		$('#un-wrap').prepend('<div id="un-sticky" class="un-sticky"></div>');
		
	}
	
	if( !$('#un-sticky .un-header-wide').length ) {
	
		$('.un-header-wide').clone().appendTo( '#un-sticky' );
	
	}
	
	TweenMax.set($('#un-sticky'), { width: wSize });	
	
	
	// Big and Small Images Overlay
	$('.un-overlay-1').each(function(){
		
		$(this).append('<div class="un-item-overlay-1"></div><div class="un-item-more-icon"><i class="un-icon-read-more"></i><div>');
		
	});
	
	
	// Medium Images Overlay
	$('.un-overlay-2').each(function(){
		
		var olWidth = $(this).width() - 50;
		var olHeight = $(this).height() - 50;
		
		$(this).append('<div class="un-item-overlay-2"><div class="un-item-more-icon"><i class="un-icon-read-more"></i><div></div>');
		TweenMax.set($('.un-item-overlay-2', this), { left: 25, right: 25, top: 25, bottom: 25, height: 'auto', width: 'auto' });	
		
	});
	
	
	// Page/Post Image Overlay
	$('.un-overlay-4').each(function(){
		
		$(this).append('<div class="un-item-overlay-4"></div><div class="un-item-view-icon"><i class="un-icon-search"></i><div>');
		
	});
	
	// Horiz Home Tips 
	$('.un-slider-page-nav .un-slider-dot').each(function(){
		$(this).append('<div class="un-slider-tip"><div class="un-slider-tip-angle"></div>' + $(this).data('label') + '</div>');
	});
		
}



/* a2. Features Init
-------------------------------------------------------------------------------------*/

INKAS.featuresInit = function(){

	// Double Menu
	$('.un-logo-center').each(function() {
		
		// Put the Logo on to the perfect center		
		var logoCenteredLeft = -$(this).width()/2;
		var logoCenteredTop = -$(this).height()/2;
		
		TweenMax.set($(this), {marginTop: logoCenteredTop, marginLeft: logoCenteredLeft });	
		
		// Put the menus to the right positions
		var menuTrans = ( $(this).width() / 2 );
		var $menuParent = $(this).parent();
				
		TweenMax.set($('.un-menu-left', $menuParent), {paddingRight: menuTrans+20 });
		TweenMax.set($('.un-menu-right', $menuParent), {paddingLeft: menuTrans+20 });	 
        
    });
	
	// Author Stats
	$('.un-about-author .un-about-bar-label').each(function() {
		
		var labelWidth = $(this).outerWidth();
		
		TweenMax.set($('.un-about-bar-count', $(this).parent() ), { width: labelWidth + 5 });
		
	});
		

}



/* a3. Carousels Init
-------------------------------------------------------------------------------------*/

INKAS.carouselsInit = function(){
	
	// One-Slide Carousel
	$('.un-post-slides').owlCarousel({
			
		items: 1,
		nav: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 8000,
		loop: true,
		navText: ['<div class="un-slider-nav-arrow un-slider-nav-prev"><i class="un-icon-keyboard-arrow-left"></i></div>','<div class="un-slider-nav-arrow un-slider-nav-next"><i class="un-icon-keyboard-arrow-right"></i></div>'],
		smartSpeed: 450,
		 
	});
	
	// Instagram Carousel
	$('.un-social-slides').owlCarousel({
			
		items: 1,
		nav: true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 8000,
		loop: true,
		navText: ['<div class="un-slider-nav-arrow un-slider-nav-prev"><i class="un-icon-keyboard-arrow-left"></i></div>','<div class="un-slider-nav-arrow un-slider-nav-next"><i class="un-icon-keyboard-arrow-right"></i></div>'],
		smartSpeed: 450,
		 
	});
	
	// Four-Slides Carousel
	$('.un-post-carousel').owlCarousel({
			
		items: 4,
		nav: true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 8000,
		loop: true,
		navText: ['<div class="un-slider-nav-arrow un-slider-nav-prev"><i class="un-icon-keyboard-arrow-left"></i></div>','<div class="un-slider-nav-arrow un-slider-nav-next"><i class="un-icon-keyboard-arrow-right"></i></div>'],
		smartSpeed: 300,
		responsive : {
			0 : {
				items: 1,
				nav: false,
			},
			768 : {
				items: 2,
			},
			992 : {
				items: 3,
			},
			1400 : {
				items: 4,
			}
		}
		
	});
		
}



/* a4. Isotope Grids
-------------------------------------------------------------------------------------*/

INKAS.isotopeGrids = function(){
		
	// Simple Grid
	var $simpleGrid = $('.un-page-full .un-grid-post');
	
	$simpleGrid.imagesLoaded( function(){
		
		$simpleGrid.isotope({
			itemSelector: '.un-col-grid',
			layoutMode: 'masonry',
			transitionDuration: '0.3s',
			masonry: {
				columnWidth: '.un-col-md-4',
			}, 
			
		});
		
	});
	
	
	// Simple Grid + Sidebar
	var $simpleGridSide = $('.un-page-sidebar .un-grid-post');
	
	$simpleGridSide.imagesLoaded( function(){
		
		$simpleGridSide.isotope({
			itemSelector: '.un-col-grid',
			layoutMode: 'masonry',
			masonry: {
				columnWidth: '.un-col-md-6'
			}, 
			hiddenStyle: {
			  opacity: 0
			},
			visibleStyle: {
			  opacity: 1
			}	
		});
		
	});	
	
	
}




/******************/
/* B. COMPONENTS  */
/******************/



/* b1. Widgets
-------------------------------------------------------------------------------------*/

INKAS.widgets = function(){
	
	// Categories
	
	// Init the open items
	$('ul.un-widget-list-main li.un-widget-item-parent').each(function() {
		
		if( $(this).hasClass('un-list-open') ){
			
			var ulHeight = $('.un-widget-list-sub', this).height() + 20;
			TweenMax.set($('.un-list-toggle', this),{ height: ulHeight });
			$('.un-widgte-item-toggle', this).html('-');
			
		}else{
			
			TweenMax.set($('.un-list-toggle', this),{ height: 0 });
			$('.un-widgte-item-toggle', this).html('+');
			
		}
        
    });
	
	// Open/Close Item
	$('ul.un-widget-list-main li.un-widget-item-parent > a').on( 'click', function(e){
		
		e.preventDefault();		
		
		var $li = $(this).parent();
		
		var ulHeight = $('.un-widget-list-sub', $li).height() + 20;	
			
		$li.toggleClass('un-list-open');
		
		if( $li.hasClass('un-list-open') ){
			
			TweenMax.to($('.un-list-toggle', $li), 0.3, { height: ulHeight,  ease: Power2.easeOut });
			$('.un-widgte-item-toggle', $li).html('-');
			
		}else{
			
			TweenMax.to($('.un-list-toggle', $li), 0.3, { height: 0,  ease: Power2.easeOut });
			$('.un-widgte-item-toggle', $li).html('+');
			
		}
		
	
	});

	
}



/* b2. Audio Player  
-------------------------------------------------------------------------------------*/

INKAS.audioPlayer = function(){
	
	$('.un-item-big .un-audio-play, .un-item-medium .un-audio-play').on( 'click', function(){ 
		
		var $audioBox = $(this).parent().children('audio'); 
		var $audioEq = $(this).parent().children('.un-audio-equalizer');
		var $audioimg = $(this).parent().children('img');
		
		if( $('i', this).hasClass('un-icon-play') ) {
		
			$audioBox.trigger('play');
			
			$(this).parent().append('<div class="un-audio-anim"><div class="un-audio-anim-circles"></div></div>');
			
			TweenMax.to( $('i', this), 0, {className:'un-icon-pause'} );
			TweenMax.to( $audioEq, 0.3, {opacity: 0, display: 'none', ease: Power2.easeOut} );
			TweenMax.to( $('.un-audio-anim', $(this).parent()), 2, {opacity: 1, ease: Power2.easeOut, delay: 0.3} );
			TweenMax.to( $audioimg, 50, {scale: 1.3, rotation: 5} );
			
		}else{
			
			$audioBox.trigger('pause');
			TweenMax.to( $('i', this), 0, {className:'un-icon-play'} );
			TweenMax.to( $('.un-audio-anim', $(this).parent()), 0.5, {opacity: 0, ease: Power2.easeOut} );
			TweenMax.to( $audioEq, 0.5, {opacity: 1, display: 'block', ease: Power2.easeOut, delay: 0.3} );
			TweenMax.to( $audioimg, 1, {scale: 1, rotation: 0} );
			
			setTimeout(function(){
				$('.un-audio-anim').remove();
			}, 1000);
			
		}
		
	});
		
}



/* b3. Custom Select fields
-------------------------------------------------------------------------------------*/

INKAS.customSelects = function(){
	
	$('.un-select').customSelect();

}



/* b4. Page Loader
-------------------------------------------------------------------------------------*/

INKAS.pageLoader = function(){

	// Loading
	TweenMax.to( $('.un-mask .un-loader'), 0.5, { opacity: "1", delay:0.5 } );
	TweenMax.to( $('.un-mask .un-load-bg'), 3, { height: "0", ease:Power3.easeInOut, delay:0.5 } );
	TweenMax.to( $('.un-mask .un-loader'), 0.5, { opacity: "0", delay:3 } );
	TweenMax.to( $('.un-mask'), 0.5, { height:"0",  ease:Power2.easeOut, delay:3.3 } );
	
	var tl = new TimelineMax({repeat:100});
	tl.add( TweenMax.to('.un-load-color', 1, {left: '100%', marginLeft: '-50px', ease:Power1.easeInOut }) );
	tl.add( TweenMax.to('.un-load-color', 1, {left: '0%', marginLeft: '0', ease:Power1.easeInOut }) );
		
	// Remove Loader Mask
	setTimeout( function(){ 

		$('.un-mask').hide();

	}, 5000);	

}



/* b5. Home Scroll
-------------------------------------------------------------------------------------*/

INKAS.homeScroll = function(){ 
	
	// Check if is_horiz_home
	if( $('.un-home-horizontal').length != 0 && $(window).width() > 1600 ){
		
		// Vars
		var $slider = $('.un-page-slider');
		var wWidth = $(window).width();
		var nSlides = $('.un-page-slide').length;
		var $sLabel = $('.un-slider-page-label');
		$slider.attr('data-current', 1);
		
		// Init 
		$slider.outerWidth( wWidth * nSlides );
		$('.un-page-slide').outerWidth( wWidth );
		$sLabel.html( $('.un-dot-active').data('label') );
		
		// Slider Animation next ->
		$('.un-slider-arrow-next').on( 'click', function(){
			
			var current = $slider.data('current');
			var next = current + 1;
		
			// Moving
			if ( current < nSlides){
				
				// Dot
				$('.un-pos-' + current).removeClass('un-dot-active');
				
				// Content
				var nextMargin = -(current * wWidth);
				TweenMax.to( $slider, 1.2, {marginLeft: nextMargin, ease:Back. easeOut.config(1)} );
	
				// Main Position Update
				$slider.data('current', next);
				
				// Dot
				$('.un-pos-' + next).addClass('un-dot-active');
			
				// Label
				$sLabel.html( $('.un-dot-active').data('label') );
				
				// Stop Periscope
				$(".un-video-data").YTPPause();
				TweenMax.to( $('.un-logo-live'), 0.5, {opacity: 0.3, ease:Power2.easeOut} );
				TweenMax.to( $('.un-video-raster'), 1, {opacity: 1, ease:Power2.easeOut} );
				
			}		
			
		});
		
		// Slider Animation prev <-
		$('.un-slider-arrow-prev').on( 'click', function(){
			
			var current = $slider.data('current');
			var prev = current - 1;
			
			if (current > 1){
				
				// Dot
				$('.un-pos-' + current).removeClass('un-dot-active');
				
				// Content
				var currentMargin = -(prev * wWidth);
				var nextMargin = currentMargin + wWidth;
				TweenMax.killTweensOf($slider);
				TweenMax.to( $slider, 1.2, {marginLeft: nextMargin, ease:Back. easeOut.config(1) } );
				
				// Main Position Update
				$slider.data('current', prev);
				
				// Dot
				$('.un-pos-' + prev).addClass('un-dot-active');
								
				// Label
				$sLabel.html( $('.un-dot-active').data('label') );
				
				// Stop Periscope
				$(".un-video-data").YTPPause();
				TweenMax.to( $('.un-logo-live'), 0.5, {opacity: 0.3, ease:Power2.easeOut } );
				TweenMax.to( $('.un-video-raster'), 1, {opacity: 1, ease:Power2.easeOut } );
				
			}
				
		}); 
		
		// Dot Click
		$('.un-slider-dot').on( 'click', function(){
			
			// Get Position to reach
			var pos = $(this).data('pos');
			
			// Main Position Update
			$slider.data('current', pos);
		
			// Move Content
			var nextMargin = -((pos-1) * wWidth);
			TweenMax.to( $slider, 1.2, {marginLeft: nextMargin, ease:Back. easeOut.config(1) } );
			
			// Remove the other Acitve classes
			$('.un-dot-active').each(function(){ $(this).removeClass('un-dot-active') });
			
			// Add Active on this Dot
			$('.un-pos-' + pos).addClass('un-dot-active');
			
			// Change Label
			$sLabel.html( $('.un-dot-active').data('label') );
			
			// Stop Periscope
			$(".un-video-data").YTPPause();
			TweenMax.to( $('.un-logo-live'), 0.5, {opacity: 0.3, ease:Power2.easeOut } );
			TweenMax.to( $('.un-video-raster'), 1, {opacity: 1, ease:Power2.easeOut } );	
			
		});
		
	}else{
		
		// Vars
		var $slider = $('.un-page-slider');
		var wWidth = $(window).width();
		var nSlides = $('.un-page-slide').length;
		var $sLabel = $('.un-slider-page-label');
		$slider.attr('data-current', 1);
		
		// Init 
		$slider.outerWidth( wWidth );
		TweenMax.set($slider, {marginLeft:''});
		$('.un-page-slide').outerWidth( wWidth );
		$sLabel.html( $('.un-dot-active').data('label') );
		
		// Slider Animation next ->
		$('.un-slider-arrow-next').on( 'click', function(){
			
			var current = $slider.data('current');
			var next = current + 1;
			
			// Moving
			if (current < nSlides){
				
				// Dot
				$('.un-pos-' + current).removeClass('un-dot-active');
				
				// Content
				$('body').scrollTo('#un-page-slide-'+next, {duration:500, offset:-90}); 
				
				// Main Position Update
				$slider.data('current', next);
				
				// Dot
				$('.un-pos-' + next).addClass('un-dot-active');
			
				// Label
				$sLabel.html( $('.un-dot-active').data('label') );
				
				// Stop Periscope
				$(".un-video-data").YTPPause();
				TweenMax.to( $('.un-logo-live'), 0.5, {opacity: 0.3, ease:Power2.easeOut} );
				TweenMax.to( $('.un-video-raster'), 1, {opacity: 1, ease:Power2.easeOut} );
				
			}		
			
		});
		
		// Slider Animation prev <-
		$('.un-slider-arrow-prev').on( 'click', function(){
			
			var current = $slider.data('current');
			var prev = current - 1;
			
			if (current > 1){
				
				// Dot
				$('.un-pos-' + current).removeClass('un-dot-active');
			
				// Content
				$('body').scrollTo('#un-page-slide-'+prev, {duration:500, offset:-90}); 
				
				// Main Position Update
				$slider.data('current', prev);
				
				// Dot
				$('.un-pos-' + prev).addClass('un-dot-active');
				
				// Label
				$sLabel.html( $('.un-dot-active').data('label') );
				
				// Stop Periscope
				$(".un-video-data").YTPPause();
				TweenMax.to( $('.un-logo-live'), 0.5, {opacity: 0.3, ease:Power2.easeOut } );
				TweenMax.to( $('.un-video-raster'), 1, {opacity: 1, ease:Power2.easeOut } );
				
			}
				
		}); 
		
		// Dot Click
		$('.un-slider-dot').on( 'click', function(){
			
			// Get Position to reach
			var pos = $(this).data('pos');
			
			// Main Position Update
			$slider.data('current', pos);
		
			// Move Content
			$('body').scrollTo('#un-page-slide-'+pos, {duration:500, offset:-90}); 
	
			// Remove the other Acitve classes
			$('.un-dot-active').each(function(){ $(this).removeClass('un-dot-active') });
			
			// Add Active on this Dot
			$('.un-pos-' + pos).addClass('un-dot-active');
			
			// Change Label
			$sLabel.html( $('.un-dot-active').data('label') );
			
			// Stop Periscope
			$(".un-video-data").YTPPause();
			TweenMax.to( $('.un-logo-live'), 0.5, {opacity: 0.3, ease:Power2.easeOut } );
			TweenMax.to( $('.un-video-raster'), 1, {opacity: 1, ease:Power2.easeOut } );	
			
		});
	
	}
	
	// Dot Tooltip
	$('.un-slider-dot').on({
		
		mouseenter: function(){
	
		TweenMax.killTweensOf($('.un-slider-tip', this));
		TweenMax.to( $('.un-slider-tip', this), 0.3, {display: 'block', opacity: 1, right: 15, ease:Power2.easeOut } );
		
		}, 
	
		mouseleave: function(){
			
			TweenMax.killTweensOf($('.un-slider-tip', this));
			TweenMax.to( $('.un-slider-tip', this), 0.3, {display: 'none', opacity: 0, right: 30, ease:Power2.easeOut } );
		
		}
		
	});
	
	// Category Filter
	$('.un-list-filters li').on( 'click', function(e){
		
		e.preventDefault();
				
		$('.un-list-filters li').each(function(){
			
			$(this).removeClass('un-active');
			
		});
		
		$(this).addClass('un-active');
		
		var cat = $(this).data('filter'); 
		
		$('.un-col-msnr').each(function(){
			
			if( $(this).hasClass(cat) ) {
				TweenMax.to( $(this), 0.5, {opacity: 1, ease:Power2.easeOut } );	
			}else{
				TweenMax.to( $(this), 0.5, {opacity: 0.1, ease:Power2.easeOut } );
			}
			
		});
		
	});
		
}



/* b6. Youtube Players
-------------------------------------------------------------------------------------*/

INKAS.YTplayers = function(){ 
	
	// Init all YT Players
	$(".un-video-data").YTPlayer();
	
	$('.un-video-control .un-icon-play').on( 'click', function(e){
		e.preventDefault();
		$(".un-video-data").YTPPlay();
		TweenMax.to( $('.un-logo-live'), 0.5, {opacity: 1, ease:Power2.easeOut } );
	});
	
	$('.un-video-control .un-icon-pause').on( 'click', function(e){
		e.preventDefault();
		$(".un-video-data").YTPPause();
		TweenMax.to( $('.un-logo-live'), 0.5, {opacity: 0.3, ease:Power2.easeOut } );
		TweenMax.to( $('.un-video-raster'), 1, {opacity: 1, ease:Power2.easeOut } );
	});
	
	$('.un-video-data').on('YTPStart',function(){
		
		TweenMax.to( $('.un-video-raster'), 2, {opacity: 0, ease:Power2.easeOut } );
		
	});
	
}



/**************/
/* C. EVENTS  */
/**************/



/* c1. Items Hover
-------------------------------------------------------------------------------------*/

INKAS.itemHovers = function(){
	
	
	// Big and Small Images
	$('.un-overlay-1').on({
		
		mouseenter: function(){
			
			TweenMax.to($('.un-item-overlay-1', this), 0.3, { opacity: "1",  ease: Power1.easeOut });
			TweenMax.to($('.un-item-more-icon', this), 0.3, { opacity: "1", marginTop: '-25px',  ease: Power1.easeOut});
			
		}, 
		
		mouseleave: function(){
			
			TweenMax.to($('.un-item-more-icon', this), 0.3, { opacity: "0", marginTop: '25px',  ease: Power1.easeOut });
			TweenMax.to($('.un-item-overlay-1', this), 0.3, { opacity: "0",  ease: Power1.easeOut });
	
		}
	
	});
	
	
	// Medium Images
	$('.un-overlay-2').on({
		
		mouseenter: function(){
			
			TweenMax.fromTo($('.un-item-overlay-2', this), 0.3, 
				{ scale: "0.1", opacity: "0"}, 
				{ scale: "1", opacity: "1",  ease: Power2.easeOut }
			);
			
			
		}, 
		
		mouseleave: function(){
		
			TweenMax.to($('.un-item-overlay-2', this), 0.3, { opacity: "0",  scale: '0.9', ease: Power2.easeOut });
	
		}
	
	});
	
		
	// Widget Images
	$('.un-widget-posts .un-widget-post-image, .un-post-carousel .un-slide-media').on({
	
		mouseenter: function(){
			
			TweenMax.to($('.un-item-overlay-3', this), 0.3, { opacity: "1",  ease: Power2.easeOut });
			TweenMax.to($('.un-item-more-icon', this), 0.3, { opacity: "1", marginTop: '-25px',  ease: Power2.easeOut});
			
		}, 
		
		mouseleave: function(){
			
			TweenMax.to($('.un-item-more-icon', this), 0.5, { opacity: "0", marginTop: '25px',  ease: Power2.easeOut });
			TweenMax.to($('.un-item-overlay-3', this), 0.3, { opacity: "0",  ease: Power2.easeOut });
	
		}
		
	});
	
	$('.un-widget-photo a, .un-social-thumb a').on({
	
		mouseenter: function(){
			
			TweenMax.to($('img', this), 1, { opacity: 0.5,  ease: Power2.easeOut });
			
		},
		
		mouseleave: function(){
			
			TweenMax.to($('img', this), 1, { opacity: 1, ease: Power2.easeOut });
			
		}
	
	});
	
	
	// Page/Post Image
	$('.un-overlay-4').on({
	
		mouseenter: function(){
			
			TweenMax.to($('.un-item-overlay-4', this), 0.3, { opacity: "1",  ease: Power1.easeOut });
			TweenMax.to($('.un-item-view-icon', this), 0.3, { opacity: "1", marginTop: -25,  ease: Power1.easeOut});
			
			
		}, 
		
		mouseleave: function(){
			
			TweenMax.to($('.un-item-view-icon', this), 0.3, { opacity: "0", marginTop: 0,  ease: Power1.easeOut });
			TweenMax.to($('.un-item-overlay-4', this), 0.3, { opacity: "0",  ease: Power1.easeOut });
	
		}
	
	});	
	
	
	// Post - Author Stats
	$('.un-about-author').on({
	
		mouseenter: function(){
			
			$('.un-about-bar-count', this).each(function() {
				TweenMax.to($(this), 0.5, { width: $(this).data('width'),  ease: Power3.easeInOut});			
			});
			
		}, 
		
		mouseleave: function(){
			
			$('.un-about-bar-count', this).each(function() {
				var labelWidth = $('.un-about-bar-label', $(this).parent()).outerWidth();
				TweenMax.to($(this), 0.5, { width: labelWidth + 5,  ease: Power3.easeInOut});			
			});
	
		}
	
	});
	
		
}



/* c2. Sharing Icons
-------------------------------------------------------------------------------------*/

INKAS.sharingIcons = function(){
	
	$('.un-list-share-top li').on({
	
		mouseenter: function(){ 
			
			TweenMax.to($(this), 0.5, { marginBottom: '-25px',  ease: Power2.easeOut });
			
		},
		
		mouseleave: function(){
			
			TweenMax.to($(this), 0.5, { marginBottom: '0',  ease: Power2.easeOut });
			
		}
	
	});
	
	$('.un-list-share-side li').on({
	
		mouseenter: function(){
	
			TweenMax.to($(this), 0.3, { marginLeft: '25px' });
			
		},
		
		mouseleave: function(){
			
			TweenMax.to($(this), 0.3, { marginLeft: '0' });
			
		}
	
	});
		
}



/* c3. Top Button 
-------------------------------------------------------------------------------------*/

INKAS.btnTop = function(){

	// BTN UP
	$('.un-btn-top i').on( 'click', function(){ 
		$('html, body').animate({				
			scrollTop: 0
		}, 1500);
	});
	
}



/* c4. Sticky Menu 
-------------------------------------------------------------------------------------*/

INKAS.stickyMenu = function(){
	
	var wPos = $(window).scrollTop();
	
	if( wPos > 300 ){
	
		TweenMax.to($('#un-sticky'), 0.4, { top: 0,  ease:Power1. easeOut });		
	
	}else{
	
		TweenMax.to($('#un-sticky'), 0.3, { top: -100, ease:Power1. easeOut });
		
	}
	
	
}



/* c5. Sub Menu
-------------------------------------------------------------------------------------*/

INKAS.subMenu = function(){ 
	
	// Standard Sub Menus
	$('.un-header-wide .un-item-parent, .un-header-narrow .un-item-parent').on({
	
		mouseenter: function(){
			
			var $sub = $(this).children('ul');
			TweenMax.killTweensOf($sub); 
				
			TweenMax.fromTo( $sub, 0.3, {marginTop: '20px'},{ marginTop: "0px", opacity: 1, display: 'block',  ease:Power2.easeOut } );
			
		},
		
		mouseleave: function(){
			
			var $sub = $(this).children('ul');
			TweenMax.killTweensOf($sub);
			
			TweenMax.to( $sub, 0.3, { opacity: 0, display: 'none',  ease:Power2.easeOut } );		
			
		}
	
	});
	
	// Modal Sub Menu
	$('#un-menu-modal .un-item-parent').on({
	
		mouseenter: function(){
			
			var $sub = $(this).children('ul');
			
			$sub.stop(true, true).slideDown(300);
			
		},
		
		mouseleave: function(){
			
			var $sub = $(this).children('ul');
			
			$sub.slideUp(300);
			
		}
	
	});
	
}



/* c6. Modals 
-------------------------------------------------------------------------------------*/

INKAS.modals = function(){
	
	// MENU
	$('.un-list-share-top li#un-btn-menu a, .un-btn-switch').on( 'click', function(e){
		
		e.preventDefault();
		
		TweenMax.set( $('body'), { overflow: 'hidden' } );	
		TweenMax.set( $('#un-menu-modal'), { display: 'block' } );	
		
		TweenMax.to( $('#un-menu-modal'), 0.5, { left: "0",  ease:Power2.easeOut } );
		TweenMax.staggerFromTo( $('#un-menu-modal .un-main-menu > li'), 0.3, { opacity: 0, marginLeft: 20 }, { opacity: 1, marginLeft: 0,  ease:Power2.easeOut, delay: 0.5 }, 0.1 );	
		
		$('.un-menu-close').on( 'click', function(){
			TweenMax.set( $('body'), { overflow: "" } );
			
			TweenMax.to( $('#un-menu-modal .un-main-menu > li'), 0.3, { opacity: 0, marginLeft: -50,  ease:Power2.easeOut } );
			TweenMax.to( $('#un-menu-modal'), 0.5, { left: "100%",  ease:Power2.easeOut, delay: 0.3 } );	
				
		});
		 
	});
	
	// SEARCH
	$('.un-list-share-top li#un-btn-search a, .un-btn-search').on( 'click', function(e){
		
		e.preventDefault();
		
		$('body').append('<div id="un-search-modal" class="un-search-modal"><div class="un-search-close"><i class="un-icon-close"></i></div><form id="un-search-form" class="un-search-form" action="" method="get"><input type="textbox" placeholder="Search..." value="" id="un-search-field" class="un-search-field"><div class="un-search-row"></div></form></div>');
		
		TweenMax.set( $('body'), { overflow: "hidden" } );		
		
		TweenMax.to( $('#un-search-modal'), 0.5, { left: "0",  ease:Power2.easeOut } );
		TweenMax.to( $('.un-search-row'), 0.5, { width: "100%",  ease:Power2.easeOut, delay:0.5 } );
		
		
		$('.un-search-close').on( 'click', function(){
			TweenMax.set( $('body'), { overflow: "" } );
			TweenMax.to( $('.un-search-row'), 0.5, { width: "0",  ease:Power2.easeOut } );
			TweenMax.to( $('#un-search-modal'), 0.5, { left: "100%",  ease:Power2.easeOut, delay:0.5 } );	
			
			setTimeout(function(){
				$('#un-search-modal').remove();
			}, 1500);
				
		});
		 
	});
	
	/* IMAGE MODAL */
	
	$('.un-page-standard .un-item-overlay-4, .un-page-standard .un-item-view-icon, .un-home-horizontal .un-item-overlay-4, .un-home-horizontal .un-item-view-icon').on( 'click', function(){
		
		var imageSrc = $(this).parent().children('img').data('fullimage');
		
		if(imageSrc){
			
			$('body').append('<div id="un-image-modal" class="un-image-modal"><div class="un-image-close"><i class="un-icon-close"></i></div><img src="'+imageSrc+'"></div>');
			
			var $modal = $('#un-image-modal');
			var $image = $('#un-image-modal img');
			
			TweenMax.set( $('body'), { overflow: "hidden" } );
			
			TweenMax.to( $modal, 0.5, { left: "0",  ease:Power2.easeOut } );
			
			$modal.imagesLoaded( function(){
				INKAS.modalImageSize($image);
				TweenMax.fromTo( $image, 0.5, { opacity: 0 },{ opacity: 1,  ease:Power2.easeOut, delay:0.4 } );
			});
			
			
			$('.un-image-close').on( 'click', function(){
				TweenMax.set( $('body'), { overflow: "" } );
				TweenMax.to( $image, 0.5, { opacity: 0,  ease:Power2.easeOut } );
				TweenMax.to( $modal, 0.5, { left: "100%",  ease:Power2.easeOut, delay:0.4 } );	
				
				setTimeout(function(){
					$('#un-image-modal').remove();
				}, 1100);
					
			});
		
		}
		
	});
	

}



/* c7. Load More Posts
-------------------------------------------------------------------------------------*/

INKAS.loadMorePosts = function(){

	$('.un-btn-load a').on( 'click', function(e){
		
		e.preventDefault();
		
		if($('.un-msnr-post .un-hidden').length > 0){
			TweenMax.staggerFromTo($('.un-msnr-post .un-hidden'), 0.4, {marginTop:20, opacity:0, display: 'none'}, {marginTop: '0', opacity:1, display: 'block'}, 0.1);
		}
		
		setTimeout(function(){
			
			$('.un-msnr-post .un-hidden').each(function() {
                $(this).removeClass('un-hidden');
				$('.un-btn-load a').html('no more posts to load<i class="un-icon-loader"></i>')
            });
			
		}, 0.5);

	});

}



/***************/
/* C. HELPERS  */
/***************/



/* d1. Modal Image Size
-------------------------------------------------------------------------------------*/

INKAS.modalImageSize = function($target){ 
	
	if( $target.length > 0 ){
		
		// Image Data
		var orImage = new Image();
		orImage.src = $target.attr("src");
		var w = orImage.width;
		var h = orImage.height;
		var winW = $(window).width() - 50;
		var winH = $(window).height() - 50;
		var nw, nh, nnw, nnh;
		
		// Check the width 
		if( w > winW ) {
				
			nw = winW;
			nh = nw * h / w;
			nh.toFixed();
							
		}else{
			
			nw = w;
			nh = h;
						
		}		
		
		// Check the height		
		if( nh > winH ) {
			
			nnh = winH;
			nnw = nw * nnh / nh;
			nnw.toFixed();
			
		}else{
			
			nnh = nh;
			nnw = nw;
			
		}
		
		// Generate the Margins		
		var ml = nnw / 2;
		var mt = nnh / 2;
		
		// Apply the result		
		TweenMax.set( $target, { width: nnw, height: nnh, marginLeft: -ml, marginTop: -mt } );
		
	}

}



/* d2. Home Scroll Resize 
-------------------------------------------------------------------------------------*/

INKAS.homeScrollResize = function(){ 

if( $('.un-home-horizontal').length != 0 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ){
	
	if( $('.un-alert').length == 0 ){
		$('body').append('<div class="un-alert"><div class="un-alert-center"><h2>You are resizing the window</h2> <h4>to enable the sliding feature for your new window sizes please update the page.</h4> <div class="un-btn-more un-btn-style-2"><a href="" onclick="location.reload()">update the page<i class="un-icon-loader"></i></a></div></div></div>');
	}
	
	TweenMax.to( $('.un-alert'), 0.5, { opacity: 1, display: 'block', ease:Power2.easeOut  } );
	TweenMax.set( $('body'), { overflow: 'hidden' } );
	
	$(".un-video-data").YTPPause();
	
	INKAS.homeScroll(); 

}

}



/*********************/
/* E. WINDOW.EVENTS  */
/*********************/



// READY EVENT //		
$(document).ready(function(){	
	
	INKAS.pageLoader();
	INKAS.appendCodes();
	INKAS.isotopeGrids();
	INKAS.btnTop();
	INKAS.customSelects();
	INKAS.subMenu();
	INKAS.loadMorePosts();
	INKAS.widgets();
	INKAS.audioPlayer();
	INKAS.carouselsInit();	
	INKAS.YTplayers();
	INKAS.homeScroll();

}); // END READY EVENT



// LOAD EVENT //
$(window).load(function(){		
	
	INKAS.featuresInit();
	INKAS.modals();
	INKAS.itemHovers();
	INKAS.sharingIcons();	
	
});



// SCROLL EVENT //
$(window).scroll(function(){
	
	INKAS.stickyMenu();
	
});



// RESIZE EVENT //
$(window).on("debouncedresize", function() {
	
	INKAS.stickyMenu();
	INKAS.modalImageSize($('#un-image-modal img'));
	INKAS.featuresInit();
	INKAS.isotopeGrids();
	TweenMax.set($('#un-sticky'), { width: $(window).width() });
	INKAS.homeScrollResize();
	 
});

	

}); // END JQUERY