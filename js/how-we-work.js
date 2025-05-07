const howcard1 = document.getElementById('howcard1');
const howcard2 = document.getElementById('howcard2');
const container = document.getElementById('howContainer');

window.addEventListener('scroll', () => {
  const rect = container.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const lockPoint = windowHeight * 0.25;  // Lock point for Card 1
  const releasePoint = windowHeight * 0.25;  // Release point for both cards (when Card 2 reaches 25vh)

  const card1Height = howcard1.offsetHeight;
  const card2Offset = howcard2.offsetTop;

  const distanceScrolled = lockPoint - rect.top;  // How far we've scrolled

  // Reset everything if the section is not in view
  if (rect.bottom < 0 || rect.top > windowHeight) {
    howcard1.style.position = 'absolute';
    howcard1.style.top = '0';
    howcard2.style.transform = `translateY(0px)`;
    return;
  }

  if (distanceScrolled <= 0) {
    // Before the lock point
    howcard1.style.position = 'absolute';
    howcard1.style.top = '0';
    howcard2.style.transform = `translateY(0px)`;
  } else if (rect.top < releasePoint) {
    // Release both cards together when Card 2 reaches 25vh
    howcard1.style.position = 'fixed';
    howcard1.style.top = '25vh';
    howcard2.style.position = 'absolute'; // Fix Card 2 after merging
    howcard2.style.top = `${card1Height}px`;  // Align it right after Card 1
    howcard2.style.transform = `translateY(0px)`; // Remove translation
  } 
  else if (rect.top = releasePoint) {
    // Release both cards together when Card 2 reaches 25vh
    howcard1.style.position = 'hidden';
    howcard2.style.position = 'absolute'; // Fix Card 2 after merging
    howcard2.style.top = `${card1Height}px`;  // Align it right after Card 1
    howcard2.style.transform = `translateY(0px)`; // Remove translation
  }
  else {
    // Card 1 stays fixed, and Card 2 moves up
    howcard1.style.position = 'fixed';
    howcard1.style.top = '25vh';
    howcard2.style.transform = `translateY(-${distanceScrolled}px)`;
  }
});
