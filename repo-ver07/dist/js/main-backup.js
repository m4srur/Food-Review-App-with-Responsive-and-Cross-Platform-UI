/* ==========================================================================

    Project: SuperMoney
    Author: 
    Last updated: Sun Jul 05 2015 09:40:58

   ========================================================================== */

(function($) {

  'use strict';

  var App = {

    /**
     * Init Function
     */
    init: function() {
      // App.feature1();
      // App.feature2();
	  App.selectboxjs();
	  App.reviewsApp();
	  App.gallerySliderVertical()
	  App.ActivitesFilter();
	  App.ShowMoreFilter();
	  App.SearchLauncher();
	  App.AppStickyNav();
    },

    /**
     * Custom feature 1
     */
    feature1: function() {

    },

    /**
     * Custom feature 2
     */
    feature2: function() {

    } ,
	
	/**
     * select box js
     */
    selectboxjs: function() {
		$('input:radio').screwDefaultButtons({
			image: 'url("img/commen/radioSmall.png")',
			width:	17,
			height: 17
		});
			
		$('input:checkbox').screwDefaultButtons({
			image: 'url("img/commen/checkboxSmall.png")',
			width:	17,
			height: 17,		
		});
    } ,
	/**
     * reviewsApp
     */
    reviewsApp: function() {
		$(".btn-reviews").click(function(){
			  $( ".reviews-content" ).slideToggle( "slow", function() {
				// Animation complete.
			  });
		});
		
		$(".dropdown-trigger-01").click(function(){
			  $( ".dropdown-content-01" ).slideToggle( "fast", function() {
				// Animation complete.
			  });
		});
		$(".dropdown-trigger-02").click(function(){
			  $( ".dropdown-content-02" ).slideToggle( "fast", function() {
				// Animation complete.
			  });
		});
		$(".dropdown-trigger-03").click(function(){
			  $( ".dropdown-content-03" ).slideToggle( "fast", function() {
				// Animation complete.
			  });
		});
		$(".dropdown-trigger-04").click(function(){
			  $( ".dropdown-content-04" ).slideToggle( "fast", function() {
				// Animation complete.
			  });
		});
		$(".dropdown-trigger-05").click(function(){
			  $( ".dropdown-content-05" ).slideToggle( "fast", function() {
				// Animation complete.
			  });
		});
		$(".dropdown-trigger-06").click(function(){
			  $( ".dropdown-content-06" ).slideToggle( "fast", function() {
				// Animation complete.
			  });
		});
		
		
		$('.open-close-trigger').click(function(e) {
			e.preventDefault();
			var clicks = $(this).data('clicks');
			if (clicks) {
				$(this).closest(".select-box-list").removeClass('open');
				$(this).parents(".sidebar-block-03").removeClass('selected');
			} else {
				//$(this).closest(".select-box-list").addClass('open');
				$('.select-box-list').addClass('open');
				$(this).parents(".sidebar-block-03").addClass('selected');
		
				
			}
			
			$(this).data("clicks", !clicks);
				
		});
		
		
		/*	topic-follow-btn*/	
		$('.topic-follow-btn').click(function(e) {
			e.preventDefault();
			var clicks = $(this).data('clicks');
			if (clicks) {
				$(this).closest(".block-02-wrapper").removeClass('topic-selected');
				
				//$(this).text('Follow');
				$('button i').removeClass('fa-check');
				$('button i').addClass('fa-plus');
			} else {
				$(this).closest(".block-02-wrapper").addClass('topic-selected');
				
				//$(this).text('Following');
				$('.topic-selected button i').addClass('fa-check');
				$('.topic-selected button i').removeClass('fa-plus');
			}
			$(this).data("clicks", !clicks);
		});

    } ,
	
	/**
     * gallerySliderVertical
     */
    gallerySliderVertical: function() {
		$('.gallery-slide-vertical').bxSlider({
			mode: 'vertical',
			minSlides: 3,
			maxSlides: 6,
			slideWidth: 77,
			slideMargin: 10
		});
	 } ,
	 
		
	 	/*
		* HealthchoicFilter
		*/
		ActivitesFilter: function() {
			$('.filter-nav .btn').click(function(){
				$('.filter-nav .active').removeClass('active');
				$(this).addClass('active');
			});
			// init Isotope
			var $container = $('.filter-result-wrapper').isotope({
			  itemSelector: '.iso_item',
			  layoutMode : 'fitRows'
			});
			// filter items on button click
			$('.filter-nav').on( 'click', 'a', function() {
			  var filterValue = $(this).attr('data-filter');
			  $container.isotope({ filter: filterValue });
			});
		},
		
		
		/**
		 * ShowMoreFilter
		 */
		ShowMoreFilter: function() {
			
			 $('.filters-launcher').on('click', function(event){
				 event.preventDefault();
				$( ".hide-resp" ).slideToggle( "slow", function() {
				// Animation complete.
			  	});
			 });
			
			
		 } ,
		
		 
		 /*
		* search launcher
		*/		
		SearchLauncher: function(){
			if($(window).width() <= 974){			
				 $('.search-launcher').on('click', function(event){
					 event.preventDefault();
					$(".search-wrapper").animate({width: "100%"},'fast');
				 });
				 
				 $('.content').on('click', function(event){
					 event.preventDefault();
					$(".search-wrapper").animate({width: "0px"},'fast');
				 });
			}
			$(window).resize(function() {
				if($(window).width() <= 974){
					$('.search-launcher').on('click', function(event){
						 event.preventDefault();
						$(".search-wrapper").animate({width: "100%"},'fast');
					 });
					 
					 $('.content').on('click', function(event){
						 event.preventDefault();
						$(".search-wrapper").animate({width: "0px"},'fast');
					 });
			
				}
			});
			
		
			
		} ,
		
		
		 /*
		* search launcher
		*/		
		AppStickyNav: function(){
			if($(window).width() <= 974){
				 var stickyNavTop = $('.filter-wrapper').offset().top;
	 
					var stickyNav = function(){
					var scrollTop = $(window).scrollTop();
						  
					if (scrollTop > stickyNavTop) { 
						$('.filter-wrapper').addClass('sticky');
					} else {
						$('.filter-wrapper').removeClass('sticky'); 
					}
				};
				stickyNav();
				 
				$(window).scroll(function() {
					stickyNav();
				});
			}	
			
			if($(window).width() > 975){
				$('.filter-wrapper').removeClass('sticky');
			}
			
			$(window).resize(function() {
				if($(window).width() <= 974){
					 var stickyNavTop = $('.filter-wrapper').offset().top;
		 
						var stickyNav = function(){
						var scrollTop = $(window).scrollTop();
							  
						if (scrollTop > stickyNavTop) { 
							$('.filter-wrapper').addClass('sticky');
						} else {
							$('.filter-wrapper').removeClass('sticky'); 
						}
					};
					stickyNav();
					 
					$(window).scroll(function() {
						stickyNav();
					});
				}
				if($(window).width() > 975){
					$('.filter-wrapper').removeClass('sticky');
				}
				
			});
			
		} ,
		 
		 
		 
	 
	 

  };

  $(function() {
    App.init();
  });

})(jQuery);


/*	special for equal height for results table columns	*/
equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.results-table-row .col-sm-2');
});


$(window).resize(function(){
  equalheight('.results-table-row .col-sm-2');
});