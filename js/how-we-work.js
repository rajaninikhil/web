
const howcard2 = document.getElementById('howcard2');
const container = document.getElementById('howContainer');

window.addEventListener('scroll', () => {
  const rect = container.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Progress increases as container goes UP the screen
  const progress = Math.min(Math.max(1 - rect.bottom / windowHeight, 0), 1);

  // Move card2 from 220px (normal) to 0px (stacked)
  const translateY = 220 * progress;

  howcard2.style.transform = `translateY(-${translateY}px)`;
});