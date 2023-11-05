(function($) {
	Drupal.behaviors.artist_search = {
		attach: function(context, settings) {
			$(window).on('click', function() {
				$('.dropdown', '.custom-select').addClass('close');

				// if (!$('.main-navigation').hasClass('close')) {
				// 	if (window.screen.width > 990) {
				// 		$('.toggle-menu > .hamburger').click(); //desktop menu
				// 	} else {
				// 		$('.mobile-toggle-menu > .hamburger').click(); // mobile menu
				// 	}
				// }
			});

			jQuery(function() {
				jQuery('.lazy').Lazy({
					afterLoad: function(element) {
						if (jQuery(window).width() > 800) {
							jQuery('.visible-sm').css('display', 'none');
						} else {
							jQuery('.visible-lg').css('display', 'none');
						}
						window.onresize = function() {
							if (jQuery(window).width() > 800) {
								jQuery('.visible-sm').css('display', 'none');
							} else {
								jQuery('.visible-lg').css('display', 'none');
							}
						};
					}
				});
			});

			$(document).ready(function() {
			    jQuery("#webform-ajax-wrapper-118 .messages.error").detach().appendTo(".careers-file-upload");
                jQuery(".careers-file-upload .messages.error").addClass('cv-upload-error cv-upload-warning');
				//For headeraniamtion
				var scrollPos = 0;
				var topComp = $('.header');
				jQuery(window).scroll(function() {
					var scroll = document.body.getBoundingClientRect().top;
					if (scroll > scrollPos) {
						// scrolling Upward
						jQuery('body').removeClass('animate-header-out').addClass('animate-header-in');
					} else {
						// scrolling Downward
						if (scroll < 0) {
							//fixed top space issue on mobile
							jQuery('body').removeClass('animate-header-in').addClass('animate-header-out');
						} else {
							//do nothing
						}
					}
					scrollPos = scroll;
				});

				$('.nav-search').click(function() {
					$('.nav-search-pop').toggleClass('active');
				});
				$('.nav-search-pop .nav-search-close .hamburger-search').click(function() {
					$('.nav-search-pop').removeClass('active');
				});
				$('body', context).on('click', '.custom-select', function(e) {
					e.stopPropagation();
					var label = $(this).find('.custom-select-label');
					var value = $(this).find('.custom-select-value');

					var toggle = $(this).data('toggle');
					var target = $(toggle, this);

					//close all other dropdown if opened
					$('.dropdown', '.custom-select').not(target).addClass('close');

					target.css({ top: $(this).height() + 4 + 'px' });
					target.toggleClass('close');

					target.find('a').each(function() {
						$(this).unbind().click(function() {
							label.html($(this).html());
							value.val($(this).data('value'));
						});
					});
				});

				// add custom class on drupal select field
				$('.form-type-select').addClass('skd-select');
			});

			$(document).ready(function() {
				/** $('.main-navgitaion-mobile .beefup').each(function() {
                     if ($(this).find('div').hasClass('beefup__body') == false) {
                         $(this).find('h4').removeClass('beefup__head');
                         $(this).find('.expand').hide();
                     }
                 });**/

				/*Phone 800 or 971*/
				/**$.get(
					'https://ipinfo.io',
					function(response) {
						//alert(response.country);
						var country = response.country;
						if (country == 'AE') {
							$('.contact-number .text-42').text('800');
							$('.contact-number .text-48').text('800');
							$('.call-now').attr('href', 'tel:80075903483');
						} else {
							$('.contact-number .text-42').text('+971800');
							$('.contact-number .text-48').text('+971800');
							$('.call-now').attr('href', 'tel:+97180075903483');
						}
					},
					'jsonp'
				);**/

				/* Testimonial Slider */
				$('.testimonial').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					arrows: true,
					prevArrow: $('.slider-controls .arrow.left'),
					nextArrow: $('.slider-controls .arrow.right'),
					lazyLoad: 'ondemand'
				});

				// $('.box-slider').slick({
				// 	slidesToShow: 2,
				// 	slidesToScroll: 1,
				// 	infinite: true,
				// 	arrows: true,
				// 	lazyLoad: 'ondemand',
				// 	prevArrow: $('.box-slider-controls .arrow.left'),
				// 	nextArrow: $('.box-slider-controls .arrow.right'),
				// 	responsive: [
				// 		{
				// 			breakpoint: 960,
				// 			settings: 'unslick'
				// 		}
				// 	]
				// });

				$('.thumbnail-slider').slick({
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					arrows: false,
					responsive: [
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								infinite: true,
								centerMode: true,
								dots: true,
								arrows: true,
								centerPadding: '20px'
							}
						},
						{
							breakpoint: 800,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
								infinite: true,
								centerMode: false,
								centerPadding: '10px',
								rtl: true
							}
						}
					]
				});

				//Toggle Menu  old code replaced from QA 21-dec-2018
				$(document).ready(function() {
					$('.hamburger', context).on('click', function(e) {
						e.stopPropagation();
						$(this).toggleClass('is-active');
						if ($(this).data('toggle') == 'mobile') {
							$('html,body').animate({ scrollTop: 0 }, 1000);
							$('.main-navgitaion-mobile').css({
								top: $('.mobile-navigation').height()
							});
							$('.main-navgitaion-mobile').toggleClass('close');
							$('.booknow-form-mobile').addClass('close');
						} else {
							$('.main-navigation').css({ top: $('.navbar').height() + 34 });
							$('.main-navigation').removeClass('close');
						}
					});

					// $("body", context).on("click", ".hamburger", function(e) {
					//     e.stopPropagation();
					//     $(this).toggleClass("is-active");
					//     if ($(this).data("toggle") == "mobile") {
					//         $("html,body").animate({ scrollTop: 0 }, 1000);
					//         $(".main-navgitaion-mobile").css({
					//             top: $(".mobile-navigation").height()
					//         });
					//         $(".main-navgitaion-mobile").toggleClass("close");
					//         $(".booknow-form-mobile").addClass("close");
					//     } else {
					//         $(".main-navigation").css({ top: $(".navbar").height() + 34 });
					//         $(".main-navigation").toggleClass("close");
					//     }
					// });
				});

				/* Toggle Menu */
				/* $(".hamburger").click(function(e) {
                    e.stopPropagation();
                    $(this).toggleClass("is-active");
                    if ($(this).data("toggle") == "mobile") {
                        $('html,body').animate({ scrollTop: 0 }, 1000);
                        $('.main-navgitaion-mobile').css({ "top": $('.mobile-navigation').height() });
                        $('.main-navgitaion-mobile').toggleClass('close');
                        $('.booknow-form-mobile').addClass('close');
                    } else {
                        $('.main-navigation').css({ "top": $('.navbar').height() + 34 });
                        $('.main-navigation').toggleClass('close');
                    }

                });*/

				/* Accordion */
				$('.accordion').beefup({
					openSingle: true,
					stayOpen: null
				});

				$('.menu-accordion').beefup({
					openSingle: true
				});

				$('.choose-language-accordion').beefup({
					openSingle: true
				});

				/* custom select nice */

				$('select#edit-price-dropdown').niceSelect();
				$('select#edit-faq-dropdown').niceSelect();

				// // /* Video Player */
				$('.video-player').simplePlayer();

				// $('.video-player').addEventListener('ended', function() {
				// 	$(this).find('iframe').hide();
				// 	$(this).find('.video-play-button').show();
				// });
				/* Book Now Mobile Toggle */
				$('.booknow-mobile').click(function() {
					window.location.href = '/book-your-experience';
					return false;

					console.log($(this).text(), $(this).html());
					if ($(this).text() == 'Book Now') {
						// $(this).text("Close");
						$(this).text('Book Now');
					} else {
						$(this).text('Book Now');
					}
					$('.booknow-form-mobile').toggleClass('close');
					$('.main-navgitaion-mobile').addClass('close');
				});

				function changeLanguage(elem) {
					$('.choose-language-accordion').find('.beefup__head a').html($(elem).html());
					$('.choose-language-accordion').beefup().close();
					$('input[name="language"]').val($(elem).data('value'));
				}

				/* Image to Background */
				function imagetoBackground() {
					$('.img2bg').each(function() {
						let src = $(this).attr('src') || $(this).data('src');
						let target = $(this).data('target');
						$(this)
							.parent()
							.addClass('bgcover')
							.css({ backgroundImage: 'url("' + src + '")', width: '100%' });

						$(this).hide();
					});
				}

				/* Cover Image tag to background */
				imagetoBackground();

				/* Ads notification banner */
				setTimeout(function() {
					$('.ad-notification').addClass('show');
				}, 2000);

				$('.ad-notification .close-arrow').on('click', function() {
					$('.ad-notification').removeClass('show');
				});

				// file upload validation for careers
				jQuery('#webform-client-form-118 input#edit-webform-ajax-submit-118').click(function() {
				    //alert('444');
					$('.cv-upload-error').remove();
					if (document.getElementById('edit-submitted-upload-cv-upload').files.length == 0) {
					    //alert('bbb');
						jQuery('div#edit-submitted-upload-cv-ajax-wrapper .form-managed-file').append(
							'<div class="cv-upload-error">Please upload file</div>'
						);
						return false;
					} else if (document.getElementById('edit-submitted-upload-cv-upload').files.length != 0) {
					    //alert('aaa');
						var allowed_extensions = new Array('pdf', 'doc', 'docx', 'odt');
						var file_extension = fileName.split('.').pop().toLowerCase(); // split function will split the filename by dot(.), and pop function will pop the last element from the array which will give you the extension as well. If there will be no extension then it will return the filename.
						for (var i = 0; i <= allowed_extensions.length; i++) {
							if (allowed_extensions[i] == file_extension) {
								return true; // valid file extension
							}
						}
						jQuery('div#edit-submitted-upload-cv-ajax-wrapper .form-managed-file').append(
							'<div class="cv-upload-error">Please upload a valid file</div>'
						);
						return false;
					}
					//alert('000');
				});
				
						jQuery('#webform-client-form-387 input#edit-webform-ajax-submit-387').click(function() {
				    //alert('444');
					$('.cv-upload-error').remove();
					if (document.getElementById('edit-submitted-upload-cv-upload').files.length == 0) {
					    //alert('bbb');
						jQuery('div#edit-submitted-upload-cv-ajax-wrapper .form-managed-file').append(
							'<div class="cv-upload-error">Загрузите файл</div>'
						);
						return false;
					} else if (document.getElementById('edit-submitted-upload-cv-upload').files.length != 0) {
					    //alert('aaa');
						var allowed_extensions = new Array('pdf', 'doc', 'docx', 'odt');
						var file_extension = fileName.split('.').pop().toLowerCase(); // split function will split the filename by dot(.), and pop function will pop the last element from the array which will give you the extension as well. If there will be no extension then it will return the filename.
						for (var i = 0; i <= allowed_extensions.length; i++) {
							if (allowed_extensions[i] == file_extension) {
								return true; // valid file extension
							}
						}
						jQuery('div#edit-submitted-upload-cv-ajax-wrapper .form-managed-file').append(
							'<div class="cv-upload-error">Пожалуйста, загрузите действительный файл</div>'
						);
						return false;
					}
					//alert('000');
				});

				//var test = $('.form-managed-file > input[type="file"]').text();
				//alert('change='+test);
				$('#edit-submitted-upload-cv-upload').on('change', function() {
					$('.cv-upload-error').remove();
					//.split('/')
					var test = $('.form-managed-file > input[type="file"]').val();
					//alert('change='+test);
					$('.form-managed-file > input[type="file"]').css('color', '');
					$('.form-managed-file > input[type="file"]').css('color', 'black');
					//.css({ backgroundImage: 'url("' + src + '")', width: '100%' });
					//$('.elementToChange').attr('style', 'background-color: blue !important');
					//$('.form-managed-file > input[type="file"]:after').css("content","");
					//$('.form-managed-file > input[type="file"]:after').css("content","file");
					$('.form-managed-file > input[type="file"]:after').css('color', '');
					$('.form-managed-file > input[type="file"]:after').css('color', 'transparent');
					if (document.getElementById('edit-submitted-upload-cv-upload').files.length != 0) {
						var allowed_extensions = new Array('pdf', 'doc', 'docx', 'odt');
						var file_extension = fileName.split('.').pop().toLowerCase(); // split function will split the filename by dot(.), and pop function will pop the last element from the array which will give you the extension as well. If there will be no extension then it will return the filename.
						for (var i = 0; i <= allowed_extensions.length; i++) {
							if (allowed_extensions[i] == file_extension) {
								return true; // valid file extension
							}
						}
						jQuery('div#edit-submitted-upload-cv-ajax-wrapper .form-managed-file').append(
							'<div class="cv-upload-error">Please upload a valid file</div>'
						);
						return false;
					}
				});

				/*Date for webforms when you go back to form from Thank-you*/
				/**var enableDates = [ {} ];
				jQuery('.datepicker').flatpickr({
					dateFormat: 'Y-m-d',
					disable: [
						{
							from: '2019-04-01',
							to: '2030-05-01'
						}
					],
					minDate: 'today',
					maxDate: new Date().fp_incr()
				});**/
				/*Date for webforms when you go back to form from Thank-you - ends*/
			});
		}
	};
})(jQuery);
// (function($) {
// 	//move vid control
// 	// vidControlHeight();

// 	$('.play').on('click', function(event) {
// 		event.preventDefault();
// 		var defaults = {
// 			enablejsapi: 1,
// 			autoplay: 1,
// 			autohide: 1,
// 			border: 0,
// 			wmode: 'opaque',
// 			modestbranding: 1,
// 			version: 3,
// 			hl: 'en_US',
// 			rel: 0,
// 			showinfo: 0,
// 			hd: 1,
// 			iv_load_policy: 3 // add origin
// 		};
// 		$('<iframe />', {
// 			class: 'player',
// 			src: 'https://www.youtube.com/embed/' + that.data('video') + '?' + $.param(defaults)
// 		})
// 			.attr({ width: that.width(), height: that.height(), seamless: 'seamless' })
// 			.css('border', 'none')
// 			.appendTo($('.video-player'));

// 		onYouTubeIframeAPIReady();
// 	});
// })(jQuery);

// // function vidControlHeight(){
// // var hBox        = $('#vid').height() / 2,
// //     hControl    = $('.video-control').height() / 2,
// //     boxPosition = hBox - hControl;
// //     wControl    = $('.video-control').width() / 2;

// // $('.video-control').css({'left':'-' + wControl + 'px', 'top': boxPosition + 'px'});
// // }
// var player;
// function onYouTubeIframeAPIReady() {
// 	player = new YT.Player('player', {
// 		events: {
// 			onReady: onPlayerReady,
// 			onStateChange: onPlayerStateChange
// 		}
// 	});
// }

// function onPlayerReady(event) {
// 	console.log('subin');
// 	event.target.playVideo();
// }

// function onPlayerStateChange(event) {
// 	if (event.data == YT.PlayerState.ENDED) {
// 		console.log('shilna');
// 		player.playVideo();
// 		// player.seekTo(0);
// 		// $('#video-front').show();
// 		// $('.video-container').hide();
// 	}
// }
