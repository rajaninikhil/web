 const slides = document.querySelectorAll('.carousel-slide');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const dots = document.querySelectorAll('.carousel-dot');
    let index = 0;
    let timer;

    function showSlide(i) {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      slides[i].classList.add('active');
      dots[i].classList.add('active');
    }

    function nextSlide() {
      index = (index + 1) % slides.length;
      showSlide(index);
    }

    function prevSlide() {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    }

    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(nextSlide, 4000);
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

    timer = setInterval(nextSlide, 3000);