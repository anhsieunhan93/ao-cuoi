jQuery(document).ready(function($) {

	var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

	var slider = function() {
		if ( $().flexslider ) {
		    $('#slider').imagesLoaded(function(){
		        $('#slider').each(function() {
		            $(this).find('.flexslider').flexslider({
		                animation      :  'slide',
		                pauseOnHover   :  false,
		                useCSS         :  false,
		                animationSpeed :  500,
		                slideshowSpeed :  5000,
		                controlNav     :  true,
		                directionNav   :  true,
		                slideshow      :  true,
		                prevText       :  '<i class="fa fa-angle-left"></i>',
		                nextText       :  '<i class="fa fa-angle-right"></i>',
		                smoothHeight   :  false
		            });
		        });
		    });
		} 
	};

	var responsiveMenu = function() {
    	var menuType = "desktop";
    	$(window).on('load resize',function() {
    		var mode = "desktop";
    		if($(window).width() < 991) {
    			mode = "mobile";
    		}

    		if(mode != menuType) {
    			menuType = mode;
    			if(mode == "mobile") {
    				$("#main-menu").attr("id", "main-menu-mobi").appendTo("#header")
    					.hide().find('li:has(ul)').children('.sub-menu').hide().before('<span class="arrow"></span>');
    			} else {
    				$("#main-menu-mobi").attr("id", "main-menu").removeAttr('style').appendTo('.header-inner-wrap').find('.has-sub')
                        .children('.sub-menu')
                        .removeAttr('style')
                        .prev()
                        .remove();
    			}
    		}
    	});

    	$('.btn-menu').on('click', function(){
            $('#main-menu-mobi').slideToggle(300);
            $(this).toggleClass('active'); 
        });
    }

	var projectIsotope = function() {
		if ( $().isotope ) {
			var $container = $('.project-wrap');

			$container.imagesLoaded(function(){
				$container.isotope({
					itemSelector: '.project-item',
					transitionDuration: '2s'
				});
			});

			$('.project-filter li').on('click',function() {
				var selector = $(this).find("a").attr('data-filter');

				$('.project-filter li').removeClass('active');
				$(this).addClass('active');
				$container.isotope({ filter: selector });
				return false;
			});
		};
	};

	var parallax = function() {
        if ( $().parallax && isMobile.any() == null ) {
            $('.parallax').parallax("50%", 0.5);
        }
    };

    var backTop = function() {
    	$(window).on('scroll', function() {
	    	if ($(window).scrollTop() > 300) {
	    		$('.back-top').addClass('show');
	    	} else {
	    		$('.back-top').removeClass('show');
	    	}
    	});

    	$('.back-top').on('click', function() {
	        $('html, body').animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
	        return false;
	    });
    };

	$(function() {
		slider();
		responsiveMenu();
		projectIsotope();	
		parallax();
		backTop();
	});
});