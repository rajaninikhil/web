function isMobile() {
  return window.innerWidth <= 768;
}

function getActiveSlides() {
  return document.querySelectorAll(isMobile() ? '.carousel-slide.mobile' : '.carousel-slide.desktop');
}

const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');
const dots = document.querySelectorAll('.carousel-dot');
let index = 0;
let timer;

function showSlide(i) {
  const slides = getActiveSlides();
  
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  if (slides[i]) {
    slides[i].classList.add('active');
  }
  if (dots[i]) {
    dots[i].classList.add('active');
  }
}

function nextSlide() {
  const slides = getActiveSlides();
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  const slides = getActiveSlides();
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(nextSlide, 4000);
}

// Handle window resize to switch between mobile/desktop
function handleResize() {
  showSlide(index);
}

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetTimer();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetTimer();
});

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    index = parseInt(dot.getAttribute('data-index'));
    showSlide(index);
    resetTimer();
  });
});

window.addEventListener('resize', handleResize);
timer = setInterval(nextSlide, 3000);