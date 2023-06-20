

if(jQuery('#rev_slider_3_1')){
	/******************************************
		-	PREPARE PLACEHOLDER FOR SLIDER	-
	******************************************/

	var setREVStartSize = function() {
		var	tpopt = new Object();
			tpopt.startwidth = 1200;
			tpopt.startheight = 528;
			tpopt.container = jQuery('#rev_slider_3_1');
			tpopt.fullScreen = "off";
			tpopt.forceFullWidth="off";

		tpopt.container.closest(".rev_slider_wrapper").css({height:tpopt.container.height()});tpopt.width=parseInt(tpopt.container.width(),0);tpopt.height=parseInt(tpopt.container.height(),0);tpopt.bw=tpopt.width/tpopt.startwidth;tpopt.bh=tpopt.height/tpopt.startheight;if(tpopt.bh>tpopt.bw)tpopt.bh=tpopt.bw;if(tpopt.bh<tpopt.bw)tpopt.bw=tpopt.bh;if(tpopt.bw<tpopt.bh)tpopt.bh=tpopt.bw;if(tpopt.bh>1){tpopt.bw=1;tpopt.bh=1}if(tpopt.bw>1){tpopt.bw=1;tpopt.bh=1}tpopt.height=Math.round(tpopt.startheight*(tpopt.width/tpopt.startwidth));if(tpopt.height>tpopt.startheight&&tpopt.autoHeight!="on")tpopt.height=tpopt.startheight;if(tpopt.fullScreen=="on"){tpopt.height=tpopt.bw*tpopt.startheight;var cow=tpopt.container.parent().width();var coh=jQuery(window).height();if(tpopt.fullScreenOffsetContainer!=undefined){try{var offcontainers=tpopt.fullScreenOffsetContainer.split(",");jQuery.each(offcontainers,function(e,t){coh=coh-jQuery(t).outerHeight(true);if(coh<tpopt.minFullScreenHeight)coh=tpopt.minFullScreenHeight})}catch(e){}}tpopt.container.parent().height(coh);tpopt.container.height(coh);tpopt.container.closest(".rev_slider_wrapper").height(coh);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);tpopt.container.css({height:"100%"});tpopt.height=coh;}else{tpopt.container.height(tpopt.height);tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);}
	};

	/* CALL PLACEHOLDER */
	setREVStartSize();

	var tpj=jQuery;
	tpj.noConflict();
	var revapi3;

	tpj(document).ready(function() {

		if(tpj('#rev_slider_3_1').revolution == undefined){
			revslider_showDoubleJqueryError('#rev_slider_3_1');
		}else{
			revapi3 = tpj('#rev_slider_3_1').show().revolution({
				dottedOverlay:"none",
				delay:6000,
				startwidth:1200,
				startheight:528,
				hideThumbs:200,

				thumbWidth:100,
				thumbHeight:50,
				thumbAmount:3,
				simplifyAll:"off",

				navigationType:"none",
				navigationArrows:"solo",
				navigationStyle:"round",

				touchenabled:"on",
				onHoverStop:"on",
				nextSlideOnWindowFocus:"off",

				swipe_threshold: 0.7,
				swipe_min_touches: 1,
				drag_block_vertical: false,
				keyboardNavigation:"off",

				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,

				shadow:0,
				fullWidth:"on",
				fullScreen:"off",
				spinner:"spinner0",
										
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,

				shuffle:"off",
				autoHeight:"off",
				forceFullWidth:"off",

				hideTimerBar:"on",
				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,

				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0
			});
		}
	});
}

(function ($) {

    "use strict";	
	
    /* ---------------------------------------------------------------------------
	 * Sticky header
	 * --------------------------------------------------------------------------- */
	function mfn_sticky(){
		if( $('body').hasClass('sticky-header') ){	
			var start_y = $('#top_bar').innerHeight() + 60;
			var window_y = $(window).scrollTop();
	
			if( window_y > start_y ){
				if( ! ($('#Header').hasClass('is-sticky'))) {
					$('#Header .addons').hide();
					$('.header_placeholder').css('margin-top', $('#Header').innerHeight());
					$('#Header')
						.addClass('is-sticky')
						.css('top', $('#wpadminbar').innerHeight());
					if(enableWhiteLogo){
						$('#logo img.scale-with-grid').hide();
						$('#logo img.logo-custom').show();
					}
				}
			}
			else {
				if($('#Header').hasClass('is-sticky')) {
					$('#Header .addons').show();
					$('.header_placeholder').css('margin-top',0);
					$('#Header').removeClass('is-sticky');
					if(enableWhiteLogo){
						$('#logo img.scale-with-grid').hide();
						$('#logo img.logo-white').show();
					}
				}
			}
		}
	}
	
	
	/* ---------------------------------------------------------------------------
	 * $(document).ready
	 * --------------------------------------------------------------------------- */
	$(document).ready(function() {
	
		/* ---------------------------------------------------------------------------
		 * Content sliders
		 * --------------------------------------------------------------------------- */
		new MfnPortfolioSlider();
		new MfnClientsSlider();
		
		
		/* ---------------------------------------------------------------------------
		 * Testimonials
		 * --------------------------------------------------------------------------- */
		/*$(".testimonials ul.slider").responsiveSlides({
			
			auto:			true,	// Boolean: Animate automatically, true or false
			timeout:		7000,	// Integer: Time between slide transitions, in milliseconds
			
			speed:			0, 
			prevText:		'',
			nextText:		'',
			pager:			false,
			nav:			true
			
		});*/
		
		
		/* ---------------------------------------------------------------------------
		 * Gallery
		 * --------------------------------------------------------------------------- */
		$('.gallery-icon a')
			.attr('rel', 'prettyPhoto[gallery]')
			.append('<div class="mask"></div><i class="fa fa-search"></i>')
			.children('img' )
				.css('height', 'auto')
				.css('width', '100%');
		
		
		/* ---------------------------------------------------------------------------
		 * PrettyPhoto
		 * --------------------------------------------------------------------------- */
		$('a[data-gal^="prettyPhoto"], .prettyphoto').prettyPhoto({
			show_title		: false,
			deeplinking		: false,
			social_tools	: false
		});
				
	
		/* ---------------------------------------------------------------------------
		 * Add classes first/last
		 * --------------------------------------------------------------------------- */
		$(".Recent_comments li:last-child, .Recent_posts li:last-child, .Twitter li:last-child, #Footer .container .column:last-child, .pricing-box .plan-inside ul li:last-child").addClass("last");
		$(".commentlist li li .comment-body:last-child").addClass("last");
		$(".commentlist li .comment-body:last-child").addClass("lastBorder");
		$(".widget ul.menu li:last-child, .widget_links ul li:last-child, .widget_meta ul li:last-child").addClass("last");
	
		// portfolio / blog  -------------------------------------
		$('.portfolio_item.one-second:nth-child(2n+3), .post.one-second:nth-child(2n+3)').css("clear", "both");	
		$('.portfolio_item.one-third:nth-child(3n+4),  .post.one-third:nth-child(3n+4)' ).css("clear", "both");	
		$('.portfolio_item.one-fourth:nth-child(4n+5), .post.one-fourth:nth-child(4n+5)').css("clear", "both");
		
		
		/* ---------------------------------------------------------------------------
		 * Responsive menu
		 * --------------------------------------------------------------------------- */
		/*
		$('.responsive-menu-toggle').click(function(){
			$(this).toggleClass('active');
			$('#Header #menu').stop(true,true).slideToggle(200);
		});*/

		
		/* ---------------------------------------------------------------------------
		 * Main menu
		 * --------------------------------------------------------------------------- */
		function mfn_menu(){
			
			// Muffin Menu --------------------------------
			$("#Header #menu > ul").muffingroup_menu({
				animation	: 'toggle'
			});
			
			// Submenu centering --------------------------
			$("#Header #menu > ul > li.submenu").each(function(){
				var li_width = $(this).width();
				var ul_width = $(this).children('ul').width();
				var margin = ( li_width - ul_width ) / 2;
				$(this).children('ul').css('margin-left',margin);
			});
			
			// Uber Menu compatibility 
			if( $('#Header .megaMenuContainer').length > 0 ){
				$('body').addClass('layout-mega-menu');
			}
			
			// Muffin Sticky Menu
			mfn_sticky();
		}
		mfn_menu();

		
		/* ---------------------------------------------------------------------------
		 * Header search
		 * --------------------------------------------------------------------------- */
		$("#Header #searchform .icon").click(function(e){
			e.preventDefault();
			if( $(this).parent().hasClass('focus') ){
				$('#searchform').submit();
			} else {
				$(this).parent().addClass('focus');
			}
		});
		
		/* ---------------------------------------------------------------------- */
	    /*  Contact Form
	    /* ---------------------------------------------------------------------- */

	    var submitContact = $('#submit_contact'),
	        message = $('#msg');

	    submitContact.on('click', function(e){
	        e.preventDefault();

	        var $this = $(this);
	        
	        $.ajax({
	            type: "POST",
	            url: 'contact.php',
	            dataType: 'json',
	            cache: false,
	            data: $('#contact-form').serialize(),
	            success: function(data) {

	                if(data.info !== 'error'){
	                    $this.parents('form').find('input[type=text],textarea,select').filter(':visible').val('');
	                    message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
	                } else {
	                    message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
	                }
	            }
	        });
	    });
	    
		/* ---------------------------------------------------------------------------
		 * Popup Contact
		 * --------------------------------------------------------------------------- */
		$("#popup_contact a.ico").click(function(e){
			e.preventDefault();
			$(this).parent().toggleClass('focus');
		});
		
		
		/* ---------------------------------------------------------------------------
		 * IE placeholder fix
		 * --------------------------------------------------------------------------- */
		//$("[placeholder]").each(function(){
//			if( $(this).val() === "" && $(this).attr("placeholder") !== "" ){
//				$(this).val($(this).attr("placeholder"));
//				$(this).focus(function(){
//					if($(this).val() === $(this).attr("placeholder")) { $(this).val(""); }
//				});
//				$(this).blur(function(){
//					if( $(this).val() === "" ) { $(this).val($(this).attr("placeholder")); }
//				});
//			}
//		});
	
		
		/* ---------------------------------------------------------------------------
		 * Tabs
		 * --------------------------------------------------------------------------- */
		//$(".jq-tabs").tabs();
		
		
		/* ---------------------------------------------------------------------------
		 * mfn accordion/faq
		 * --------------------------------------------------------------------------- */
		$(".mfn-acc .question:not(:first)").children(".answer").hide();
		$(".mfn-acc .question:first").addClass("active");
		$(".mfn-acc .question > h5").append('<span class="icon"></span>');
		
		$(".mfn-acc .question > h5").click(function() {
			if($(this).parent().hasClass("active")) {
				$(this).parent().removeClass("active").children(".answer").slideToggle(200);
			}
			else
			{
				$(this).parents(".mfn-acc").children().each(function() {
					if($(this).hasClass("active")) {
						$(this).removeClass("active").children(".answer").slideToggle(200);
					}
				});
				$(this).parent().addClass("active");
				$(this).next(".answer").slideToggle(200);
			}
		});
		
		
		/* ---------------------------------------------------------------------------
		 * Blog Grid Iframe height
		 * --------------------------------------------------------------------------- */
		function iframeHeight(group) {
			var tallest = 0;
			var image = group.find('img');
			var iframe = group.find('iframe');
			image.each(function() {
				var thisHeight = $(this).height();
				if(thisHeight > tallest) {
					tallest = thisHeight;
				}
			});
			iframe.height(tallest);
		}
		
		iframeHeight($(".post.one-second .photo, .post.one-third .photo, .post.one-fourth .photo"));
	
		
		/* ---------------------------------------------------------------------------
		 * hoverdir
		 * --------------------------------------------------------------------------- */
		$('.da-thumbs > li:not(.header_li) > a').each( function() { $(this).hoverdir({
			hoverDelay : 75
		}); } );
		
		
		/* ---------------------------------------------------------------------------
		 * isotope
		 * --------------------------------------------------------------------------- */
		function mfnIsotope(domEl,isoWrapper){
			var filter = domEl.attr('rel');
			isoWrapper.isotope({ filter: filter });
			
			domEl.parents('ul').find('li.current-cat').removeClass('current-cat');
			domEl.parent().addClass('current-cat');
		}
		
		$('.portfolio-isotope .categories a').click(function(e){
			e.preventDefault();
			mfnIsotope($(this),$('.portfolio-isotope .Projects_inside_wrapper'));
		});
		
		$('#Projects .categories a').click(function(e){
			e.preventDefault();
			mfnIsotope($(this),$('#Projects .Projects_inside_wrapper'));
		});
		
	});

	/* ---------------------------------------------------------------------------
	 * $(window).load
	 * --------------------------------------------------------------------------- */
	$(window).load(function() {
		
		/* ---------------------------------------------------------------------------
		 * isotope
		 * --------------------------------------------------------------------------- */
		$('.portfolio-isotope .Projects_inside_wrapper').isotope({
			itemSelector: '.column',
			layoutMode: 'fitRows'
		});
		$('#Projects .Projects_inside_wrapper').isotope({
			itemSelector: '.column',
			layoutMode: 'fitRows'
		});
		
	});
	
	
	/* ---------------------------------------------------------------------------
	 * $(window).scroll
	 * --------------------------------------------------------------------------- */
	$(window).scroll(function () {
		mfn_sticky();
    });
	
	
	/* ---------------------------------------------------------------------------
	 * $(document).mouseup
	 * --------------------------------------------------------------------------- */
	$(document).mouseup(function (e)
	{
		if ($("#searchform").has(e.target).length === 0){
			$("#searchform").removeClass('focus');
		}
		if ($("#popup_contact").has(e.target).length === 0){
			$("#popup_contact").removeClass('focus');
		}
	});
	
	
	/* ---------------------------------------------------------------------------
	 * Sliders configuration
	 * --------------------------------------------------------------------------- */
	
	// --- MfnPortfolioSlider ---------------------------------------------------------
	function MfnPortfolioSlider(){
	
		var mfn_slider_portfolio = window.mfn_slider_portfolio;
		
		mfn_slider_portfolio.wrap			= 'both';
		mfn_slider_portfolio.scroll			= 1;
		//mfn_slider_portfolio.buttonPrevHTML	= '<a class="slider_control slider_control_prev"></a>';
		//mfn_slider_portfolio.buttonNextHTML	= '<a class="slider_control slider_control_next"></a>';
		
		$(".recent_works ul").jcarousel( mfn_slider_portfolio );
	}
	
	// --- MfnClientsSlider ---------------------------------------------------------
	function MfnClientsSlider(){
		
		function initCallback(carousel) {
			$('.Our_clients_slider .slider_control_prev').bind('click', function() { carousel.prev(); return false; });
			$('.Our_clients_slider .slider_control_next').bind('click', function() { carousel.next(); return false; });
		}
		
		var mfn_slider_clients = window.mfn_slider_clients;
		
		mfn_slider_clients.wrap				= 'both';
		mfn_slider_clients.scroll			= 1;
		mfn_slider_clients.initCallback		= initCallback;
		mfn_slider_clients.buttonNextHTML	= null;
		mfn_slider_clients.buttonPrevHTML	= null;
		
		$(".Our_clients_slider .inside > ul").jcarousel( mfn_slider_clients );
	}

})(jQuery);