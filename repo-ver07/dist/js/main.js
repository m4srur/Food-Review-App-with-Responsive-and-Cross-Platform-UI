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
	  App.AppSelectBox();
	  App.AppFullImg();
	  App.AppSlider();
	  App.AppSliderInfo();
	  App.imgVibrate();
	  App.scrollToDiv();
	  App.AppSliderInfoTitle();
	  App.AppNavButton();
	  App.TabSystem();
	  App.AppcarouselOne();
	  App.fancyPopUp();
	  App.fancyPopVideo();
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
    AppSelectBox: function() {
		$(".dropSelect").selectbox();
    } ,
	
	/*
	* AppFullVideo
	*/
	AppFullImg: function() {
		$(".full-screen-bg").each(function() {
        	var width = $(window).width(); 
            var height = $(window).height(); 
            $(this).css("width", width);
            $(this).css("height",height);
        });
		$(window).resize(function() {
            $(".full-screen-bg").each(function() {
                var width = $(window).width();
                var height = $(window).height();
                var imgwidth = $(this).width();
                var imgheight = $(this).height();
                //console.log((imgwidth - width) / 2);
                $(this).css("margin-left", -(imgwidth - width) / 2);
            	$(this).css("margin-top", -(imgheight - height) / 2);
        	});
        });
		
		$(".intro-block").each(function() {
        	var height = $(window).height(); 
            $(this).css("height",height);
        });
	
	} ,
	
	AppSlider: function() {
		$('.dish-day-slider').bxSlider({
			mode: 'horizontal',
		  	pager: true,
			controls: true ,
			auto: false,
			speed: 800,
			pause: 5000,
			onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
				console.log(currentSlideHtmlObject);
				$('.active-slide').removeClass('active-slide');
				$('.dish-day-slider > li').eq(currentSlideHtmlObject + 1).addClass('active-slide')
			},
			onSliderLoad: function () {
				$('.dish-day-slider > li').eq(1).addClass('active-slide')
			},
		});
		
		$('.recipe-slider-02').bxSlider({
			mode: 'horizontal',
		  	pager: true,
			controls: false ,
			auto: true,
			speed: 800,
			pause: 5000,
			onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
				console.log(currentSlideHtmlObject);
				$('.active-slide').removeClass('active-slide');
				$('.recipe-slider-02 > li').eq(currentSlideHtmlObject + 1).addClass('active-slide')
			},
			onSliderLoad: function () {
				$('.recipe-slider-02 > li').eq(1).addClass('active-slide')
			},
		});
		
		
		$('.recipe-slider-03').bxSlider({
			mode: 'horizontal',
		  	pager: true,
			controls: true ,
			auto: true,
			speed: 800,
			pause: 5000,
			onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
				console.log(currentSlideHtmlObject);
				$('.active-slide').removeClass('active-slide');
				$('.recipe-slider-03 > li').eq(currentSlideHtmlObject + 1).addClass('active-slide')
			},
			onSliderLoad: function () {
				$('.recipe-slider-03 > li').eq(1).addClass('active-slide')
			},
		});
		
				
	},
	
	AppSliderInfo: function() {
		
		var timer = setInterval(function() {
			
			if ( $('.dish-01').hasClass('active-slide')) {
				$('.info-dish-01').css('display','block');
				$('.info-dish-02 ,.info-dish-03 ,.info-dish-04 ,.info-dish-05').css('display','none');
			}
			
			if ( $('.dish-02').hasClass('active-slide')) {
				$('.info-dish-02').css('display','block');
				$('.info-dish-01 ,.info-dish-03 ,.info-dish-04 ,.info-dish-05').css('display','none'); 
			}
			
			if ( $('.dish-03').hasClass('active-slide')) {
				$('.info-dish-03').css('display','block');
				$('.info-dish-02 ,.info-dish-01 ,.info-dish-04 ,.info-dish-05').css('display','none'); 
			}
			
			if ( $('.dish-04').hasClass('active-slide')) {
				$('.info-dish-04').css('display','block');
				$('.info-dish-02 ,.info-dish-03 ,.info-dish-01 ,.info-dish-05').css('display','none'); 
			}	
			
			if ( $('.dish-05').hasClass('active-slide')) {
				$('.info-dish-05').css('display','block');
				$('.info-dish-02 ,.info-dish-03 ,.info-dish-04 ,.info-dish-01').css('display','none');
			}	
		
		},500);
		
		
	},
	
	/*
	* image Vibrate
	*/
	imgVibrate: function() {
		$('.recipes-main-wrapper a').hover(function() {
			$('.recipes-main-wrapper a:hover .img-sooka-recipes').vibrate();
			$('.recipes-main-wrapper a:hover h3').vibrate();
		});
		
		$('.search-btn').hover(function() {
			$('.search-btn i').vibrate();
			$('.search-btn span').vibrate();
		});
		
		$('.view-all-recipes').hover(function() {
			$('.view-all-recipes i').vibrate();
			$('.view-all-recipes span').vibrate();
		});
		$('.rate-num').hover(function() {
			$('.rate-num i').vibrate();
			$('.rate-num span').vibrate();
		});
	},
	 
	 
	/*
	* scroll To Div
	*/
	scrollToDiv: function() {
		$(".go-down").click(function() {
			$('html, body').animate({
				scrollTop: $(".content").offset().top
			}, 600);
			return false;
		});
	},
	
	/*
	* scroll To Div
	*/
	AppSliderInfoTitle: function() {
		$(".title-trigger-01").click(function() {
			$('.title-wrapper-info-01').toggleClass('open');
			//$(".line-info-01-right").css('height','111px');
			//$(".line-info-01-up").css('width','304px');
			
		});
	},
	
	/*
	* scroll To Div
	*/
	AppNavButton: function() {
		var windowheight = $(window).height();
		
		$(window).scroll(function() {
			if ($(window).scrollTop() >= ( windowheight - 60)) {
				$('.special-nav .nav-trigger').addClass('black');
			} else {
				$('.special-nav .nav-trigger').removeClass('black');
			}
		});
	},
	
	/*
	* scroll To Div
	*/
	TabSystem: function() {
		$('#myTab a').click(function (e) {
		  	e.preventDefault();
		  	$(this).tab('show');
		})
	},
	 
	 
	 /*
	  * AppcarouselOne
	  */
	  AppcarouselOne: function() {
		  if($(window).width() > 1071){
			  $('.slider1').bxSlider({
				  slideWidth: 279,
				  minSlides: 2,
				  maxSlides: 3,
				  slideMargin: 10 ,
				  pager: false ,
				  controls: true
			  });
		  }
		  
		  
		  else if($(window).width() <= 1070 && $(window).width() >= 769 ){
			  $('.slider1').bxSlider({
					slideWidth: 250,
					minSlides: 2,
					maxSlides: 4,
					slideMargin: 10 ,
					pager: false ,
				  controls: true
				});
		  }
		  
		  else { 
			  $('.slider1').bxSlider({
					slideWidth: 284,
					minSlides: 1,
					maxSlides: 1,
					slideMargin: 10 ,
					pager: false ,
				  	controls: true
				});
		  }
		  
		} ,
		
		/*
		*	fancy images album
		*/
		fancyPopUp: function(){
			$(".fancybox-button").fancybox({
				prevEffect		: 'none',
				nextEffect		: 'none',
				closeBtn		: false,
				helpers		: {
					title	: { type : 'inside' },
					buttons	: {}
				}
			});
		},

		

		/*
		*	fancy images videos
		*/
		fancyPopVideo: function(){
			$('.fancybox-media').fancybox({
				openEffect  : 'none',
				closeEffect : 'none',
				helpers : {
					media : {}
				}
			});
		},
	 
	 
	 

  };

  $(function() {
    App.init();
  });

})(jQuery);

