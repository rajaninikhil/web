$(window).load(function(){

	"use strict";
	

	/* ========================================================== */
	/*   Popup-Gallery                                            */
	/* ========================================================== */
	$('.popup-gallery').find('a.popup1').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	}); 
	
	$('.popup-gallery').find('a.popup2').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	}); 
 
	$('.popup-gallery').find('a.popup3').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	}); 
 
	$('.popup-gallery').find('a.popup4').magnificPopup({
		type: 'iframe',
		gallery: {
		  enabled:false
		}
	}); 
 
 
	/* ========================================================== */
	/*   Navigation Background Color                              */
	/* ========================================================== */
	
	$(window).scroll(function() {
		if($(this).scrollTop() > 100) {
			$('.navbar-fixed-top').addClass('opaque');
		} else {
			$('.navbar-fixed-top').removeClass('opaque');
		}
	});

	/* ========================================================== */
	/*   SmoothScroll                                             */
	/* ========================================================== */
	
	$(".nav li a, a.scrool").click(function(e){
		
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;
		
		$('html,body').animate({scrollTop:target_top -69}, 1000);
			return false;
		
	});


	/* ========================================================== */
	/*   Contact                                                  */
	/* ========================================================== */
	$('#contact-form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'names':$('input[name="contact_names"]').val(),
					'email':$('input[name="contact_email"]').val(),
					'phone':$('input[name="contact_phone"]').val(),
					'message':$('textarea[name="contact_message"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p').show();
					});
				});
				e.preventDefault();
			}
		});
	})


	/* ========================================================== */
	/*   Register                                                 */
	/* ========================================================== */
	
	$('#register-form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'names':$('input[name="register_names"]').val(),
					'phone':$('input[name="register_phone"]').val(),
					'date':$('input[name="register_date"]').val(),
					'email':$('input[name="register_email"]').val(),
					'ticket':$('select[name="register_ticket"]').val(),
					'time':$('select[name="register_time"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p.register_success_box').show();
					});
				});
				e.preventDefault();
			}
		});
	})
	
	
	/* ========================================================== */
	/*   Revolution Slider - Home Page                            */
	/* ========================================================== */
	var tpj = jQuery;

	var revapi202;
	tpj(document).ready(function() {
		if (tpj("#rev_slider_202_1").revolution == undefined) {
			revslider_showDoubleJqueryError("#rev_slider_202_1");
		} else {
			revapi202 = tpj("#rev_slider_202_1").show().revolution({
				sliderType: "standard",
				jsFileLocation: "../../revolution/js/",
				sliderLayout: "fullscreen",
				dottedOverlay: "none",
				delay: 9000,
				navigation: {
					keyboardNavigation: "off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation: "off",
					onHoverStop: "off",
					touch: {
						touchenabled: "on",
						swipe_threshold: 75,
						swipe_min_touches: 50,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					},
					bullets: {
						enable: true,
						hide_onmobile: true,
						hide_under: 800,
						style: "zeus",
						hide_onleave: false,
						direction: "horizontal",
						h_align: "center",
						v_align: "bottom",
						h_offset: 0,
						v_offset: 30,
						space: 5,
						tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title">{{title}}</span>'
					}
				},
				responsiveLevels: [1240, 1024, 778, 480],
				visibilityLevels: [1240, 1024, 778, 480],
				gridwidth: [1240, 1024, 778, 480],
				gridheight: [868, 768, 960, 720],
				lazyType: "none",
				shadow: 0,
				spinner: "off",
				stopLoop: "on",
				stopAfterLoops: 0,
				stopAtSlide: 1,
				shuffle: "off",
				autoHeight: "off",
				minHeight:600,
				fullScreenAutoWidth: "off",
				fullScreenAlignForce: "off",
				fullScreenOffsetContainer: "",
				fullScreenOffset: "60px",
				disableProgressBar: "on",
				hideThumbsOnMobile: "off",
				hideSliderAtLimit: 0,
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLilmit: 0,
				debugMode: false,
				fallbacks: {
					simplifyAll: "off",
					nextSlideOnWindowFocus: "off",
					disableFocusListener: false,
				}
			});
		}
	}); /*ready*/
	
	
	/* ========================================================== */
	/*   Revolution Slider - About Page                           */
	/* ========================================================== */
	
	var tpj=jQuery;
	
	var revapi30;
	tpj(document).ready(function() {
		if(tpj("#rev_slider_30_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_30_1");
		}else{
			revapi30 = tpj("#rev_slider_30_1").show().revolution({
				sliderType:"carousel",
				jsFileLocation:"../../revolution/js/",
				sliderLayout:"fullwidth",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
					keyboardNavigation:"off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
					onHoverStop:"off",
					touch:{
						touchenabled:"on",
						swipe_threshold: 75,
						swipe_min_touches: 1,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					}
					,
					arrows: {
						style:"gyges",
						enable:true,
						hide_onmobile:false,
						hide_onleave:false,
						tmp:'',
						left: {
							h_align:"left",
							v_align:"center",
							h_offset:20,
							v_offset:0
						},
						right: {
							h_align:"right",
							v_align:"center",
							h_offset:20,
							v_offset:0
						}
					}
					,
					
				},
				carousel: {
					horizontal_align: "center",
					vertical_align: "center",
					fadeout: "on",
					vary_fade: "on",
					maxVisibleItems: 3,
					infinity: "on",
					space: 0,
					stretch: "off"
				},
				gridwidth:720,
				gridheight:405,
				lazyType:"none",
				shadow:0,
				spinner:"off",
				stopLoop:"on",
				stopAfterLoops:0,
				stopAtSlide:1,
				shuffle:"off",
				autoHeight:"off",
				disableProgressBar:"on",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
	});	/*ready*/
	
	
	/* ========================================================== */
	/*   Revolution Slider - Menu Page                            */
	/* ========================================================== */
	
	var tpj=jQuery;	
						
	var revapi108;
	tpj(document).ready(function() {
		if(tpj("#rev_slider_108_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_108_1");
		}else{
			revapi108 = tpj("#rev_slider_108_1").show().revolution({
				sliderType:"carousel",
				jsFileLocation:"../../revolution/js/",
				sliderLayout:"fullwidth",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
					keyboardNavigation:"off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
					onHoverStop:"off",
					arrows: {
						style:"metis",
						enable:true,
						hide_onmobile:true,
						hide_under:768,
						hide_onleave:false,
						tmp:'',
						left: {
							h_align:"left",
							v_align:"center",
							h_offset:0,
							v_offset:0
						},
						right: {
							h_align:"right",
							v_align:"center",
							h_offset:0,
							v_offset:0
						}
					}
					,
					thumbnails: {
						style:"erinyen",
						enable:true,
						width:150,
						height:100,
						min_width:150,
						wrapper_padding:20,
						wrapper_color:"#000000",
						wrapper_opacity:"0.05",
						tmp:'<span class="tp-thumb-over"></span><span class="tp-thumb-image"></span><span class="tp-thumb-title">{{title}}</span><span class="tp-thumb-more"></span>',
						visibleAmount:9,
						hide_onmobile:false,
						hide_onleave:false,
						direction:"horizontal",
						span:true,
						position:"outer-bottom",
						space:10,
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:0
					}
				},
				carousel: {
					maxRotation: 65,
					vary_rotation: "on",
					minScale: 55,
					vary_scale: "off",
					horizontal_align: "center",
					vertical_align: "center",
					fadeout: "on",
					vary_fade: "on",
					maxVisibleItems: 5,
					infinity: "on",
					space: -150,
					stretch: "off"
				},
				gridwidth:600,
				gridheight:600,
				lazyType:"none",
				shadow:0,
				spinner:"off",
				stopLoop:"on",
				stopAfterLoops:0,
				stopAtSlide:1,
				shuffle:"off",
				autoHeight:"off",
				disableProgressBar:"on",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
	});	/*ready*/
	
	
	/* ========================================================== */
	/*   Revolution Slider - Reservation Page (Video)             */
	/* ========================================================== */
	
	var tpj=jQuery;							
	var revapi110;
	tpj(document).ready(function() {
		if(tpj("#rev_slider_110_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_110_1");
		}else{
			revapi110 = tpj("#rev_slider_110_1").show().revolution({
				sliderType:"hero",
				jsFileLocation:"../../revolution/js/",
				sliderLayout:"fullscreen",
				dottedOverlay:"none",
				delay:20000,
				navigation: {
				},
				responsiveLevels:[1240,1024,778,778],
				gridwidth:[1240,1024,778,480],
				gridheight:[600,500,400,300],
				lazyType:"none",
				parallax: {
					type:"mouse",
					origo:"slidercenter",
					speed:2000,
					levels:[2,3,4,5,6,7,12,16,10,50],
				},
				shadow:0,
				spinner:"off",
				autoHeight:"off",
				fullScreenAlignForce:"off",
				fullScreenOffsetContainer: "",
				fullScreenOffset: "60px",
				disableProgressBar:"on",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					disableFocusListener:false,
				}
			});
		}
	});	/*ready*/
	
	
	/* ========================================================== */
	/*   Page Loader                                              */
	/* ========================================================== */
	  $('#loader').fadeOut(100);

		
});



let currentIndex = 0;
        const productWrapper = document.querySelector(".product-wrapper");
        const productCardWidth = document.querySelector(".product-card").offsetWidth + 20; // Card width + margin
        const totalProducts = document.querySelectorAll(".product-card").length;
        const maxIndex = totalProducts - 3; // Since we show 3 products at a time

        function moveCarousel(direction) {
            if ((direction === -1 && currentIndex > 0) || (direction === 1 && currentIndex < maxIndex)) {
                currentIndex += direction;
                productWrapper.style.transform = `translateX(${-currentIndex * productCardWidth}px)`;
            }
        }







  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Hide all tab contents
      tabContents.forEach(content => content.classList.remove("active"));

      // Show the clicked tab content
      const target = button.getAttribute("data-tab");
      document.getElementById(target).classList.add("active");
    });
  });








// Function to start counting
function startCounter(counter, speed) {
	const target = +counter.getAttribute('data-target');
	const increment = target / speed;
	let count = 0;
  
	const updateCounter = () => {
	  count += increment;
	  if (count < target) {
		counter.innerText = Math.ceil(count);
		requestAnimationFrame(updateCounter);
	  } else {
		counter.innerText = target;
	  }
	};
  
	updateCounter();
  }
  
  // Intersection Observer to trigger when visible
  const counters = document.querySelectorAll('.counter');
  const observerOptions = {
	threshold: 0.5 // Trigger when 50% of the section is in view
  };
  
  const counterSection = document.querySelector('.counter-section');
  
  const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		counters.forEach((counter, index) => {
		  let speed = 100; // default speed
		  if (index === 0) {
			speed = 100; // slower for the first one
		  }
		  startCounter(counter, speed);
		});
		observer.unobserve(counterSection); // Run only once
	  }
	});
  }, observerOptions);
  
  observer.observe(counterSection);
  






  const testimonialData = [
	{
	  text: "Parimal Incense Sticks fill my home with a calming and refreshing fragrance every day. I love how the scent instantly creates a peaceful and welcoming atmosphere.",
	  name: "SHIPA",
	  role: "COO, AMERIMAR ENTERPRISES, INC."
	},
	{
	  text: "I have been using Parimal Incense Sticks for months now, and I can honestly say they are the best I have tried. The aroma is pure, soothing, and lasts a long time.Alice shares her incredible experience with this service, highly recommending it to others in her industry.",
	  name: "ALICE",
	  role: "CEO, TECHWORLD LTD."
	},
	{
	  text: "Every time I light a Parimal Incense Stick, it transforms the space into a serene sanctuary. The fragrances are gentle yet effective and perfect for meditation.",
	  name: "JOHN DOE",
	  role: "MARKETING HEAD, CREATIVE AGENCY"
	},
	{
	  text: "Parimal Incense Sticks are my go-to choice for creating a relaxing environment at home. The fragrances are natural, pleasant, and linger for hours without being overpowering.",
	  name: "EMMA",
	  role: "CTO, INNOVATECH"
	},
	{
	  text: "Whether it's morning prayer or evening relaxation, Parimal Incense Sticks have become a daily ritual. Their calming effect helps me focus and feel at peace.",
	  name: "MICHAEL",
	  role: "PROJECT MANAGER, BUILDPRO"
	},
	{
	  text: "I highly recommend Parimal Incense Sticks to anyone looking for a genuine and lasting fragrance. They have made my home smell divine and uplift my mood instantly.",
	  name: "SOPHIA",
	  role: "FREELANCE DESIGNER"
	},
	{
	  text: "Lighting Parimal Incense Sticks has become an essential part of my daily routine. The rich and natural aroma creates an atmosphere of tranquility and helps me unwind after a long day.",
	  name: "DAVID",
	  role: "FOUNDER, STARTUP X"
	},
	{
		text: "I’ve tried many incense brands, but Parimal stands out for its quality and lasting fragrance. It fills my meditation space with a pure, soothing scent that helps me stay focused and calm.",
		name: "GOLIATH",
		role: "FOUNDER, STARTUP A"
	  },
	{
		text: "Parimal Incense Sticks offer a perfect balance of tradition and purity. Every stick burns evenly, releasing a gentle fragrance that instantly uplifts the mood in my home.",
		name: "SOMEONE",
		role: "FOUNDER, STARTUP B"
	  }
  ];
  
  const thumbnails = document.querySelectorAll('.thumb');
  const textElement = document.getElementById('testimonial-text');
  const nameElement = document.getElementById('author-name');
  const roleElement = document.getElementById('author-role');
  
  thumbnails.forEach((thumbnail, index) => {
	thumbnail.addEventListener('click', () => {
	  // Remove active from all thumbnails
	  thumbnails.forEach(thumb => thumb.classList.remove('active'));
	  // Add active to current thumbnail
	  thumbnail.classList.add('active');
  
	  // Update testimonial content
	  const testimonial = testimonialData[index];
	  textElement.textContent = testimonial.text;
	  nameElement.textContent = testimonial.name;
	  roleElement.textContent = testimonial.role;
	});
  });
  