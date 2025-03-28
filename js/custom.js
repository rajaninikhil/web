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


// our brands
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






// about parimal
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

    // Show the clicked tab content instantly
    document.getElementById(button.getAttribute("data-tab")).classList.add("active");
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
	  text: "Parimal Mandir's incense fills my home with an authentic, soothing fragrance that brings peace and positivity. Truly the best!",
	  name: "RAJESH SHARMA"
	},
	{
	  text: "I've been using their incense for years, and nothing matches the purity and calming aroma. It has become a part of my daily prayers.",
	  name: "ANITA IYER"
	},
	{
	  text: "The quality and natural ingredients make a huge difference. Every stick burns evenly and lasts long, creating a serene atmosphere.",
	  name: "VIKRAM MEHTA"
	},
	{
	  text: "Their fragrances are divine! The sandalwood and lavender blends are my absolute favorites for meditation and relaxation.",
	  name: "POOJA DESAI"
	},
	{
	  text: "Parimal Mandir incense reminds me of my childhood home. The purity and craftsmanship are unmatched – truly a brand that carries tradition forward.",
	  name: "MANOJ VERMA"
	},
	{
	  text: "Parimal Mandir's incense has a magical essence that fills my home with warmth and tranquility. It's perfect for unwinding after a long day",
	  name: "PRIYA NAIR"
	},
	{
	  text: "The rich and authentic fragrances make every prayer session special. You can truly feel the purity in every stick.",
	  name: "AMIT KHANNA"
	},
	{
		text: "I love how each incense stick has a long-lasting, soothing aroma. The jasmine and rose variants are my absolute favorites!",
		name: "NEHA GUPTA"
	  },
	{
		text: "These incense sticks bring a sense of calm and spirituality to my space. The craftsmanship and natural ingredients are truly remarkable.",
		name: "SURESH PATEL"
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
  



  //featured products
  const container = document.querySelector('.product-container');
const leftButton = document.querySelector('.nav-button.left');
const rightButton = document.querySelector('.nav-button.right');

const scrollAmount = 300; // Adjust depending on your card width
const scrollThreshold = 5; // A small buffer to avoid rounding issues

leftButton.addEventListener('click', () => {
    if (container.scrollLeft <= scrollThreshold) {
        // Jump to the end
        container.scrollTo({
            left: container.scrollWidth,
            behavior: 'smooth'
        });
    } else {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    }
});

rightButton.addEventListener('click', () => {
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft >= maxScrollLeft - scrollThreshold) {
        // Jump to the start
        container.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    } else {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
});




// hover image switching
document.querySelectorAll(".product-image").forEach((product) => {
    const defaultImg = product.getAttribute("data-default");
    const hoverImg = product.getAttribute("data-hover");

    // Set initial background image
    product.style.backgroundImage = `url('${defaultImg}')`;
    product.style.position = "relative"; // Ensure proper stacking

    // Create a pseudo overlay to handle fading
    const fadeImg = document.createElement("div");
    fadeImg.style.position = "absolute";
    fadeImg.style.top = "0";
    fadeImg.style.left = "0";
    fadeImg.style.width = "100%";
    fadeImg.style.height = "100%";
    fadeImg.style.backgroundImage = `url('${hoverImg}')`;
    fadeImg.style.backgroundSize = "cover";
    fadeImg.style.backgroundPosition = "center";
    fadeImg.style.opacity = "0";
    fadeImg.style.transition = "opacity 0.3s ease-in-out";
    fadeImg.style.pointerEvents = "none"; // Prevent blocking interactions

    product.appendChild(fadeImg);

    product.addEventListener("mouseenter", function () {
        fadeImg.style.opacity = "1"; // Fade in hover image
    });

    product.addEventListener("mouseleave", function () {
        fadeImg.style.opacity = "0"; // Fade back to default
    });
});




//every prayer answered scroll effect
window.addEventListener("scroll", function () {
    const overlay = document.querySelector(".image-section .image-overlay");
    const section = document.querySelector(".image-section");
    
    if (!overlay || !section) return;

    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.clientHeight;
    
    // Normalize scroll position (0 when at top, 1 when fully past the section)
    let scrollFactor = Math.min(1, Math.max(0, 1 - sectionTop / sectionHeight));

    // Set blur dynamically (10px at start, 0px when scrolled to top)
    overlay.style.backdropFilter = `blur(${10 - scrollFactor * 10}px)`;
});
