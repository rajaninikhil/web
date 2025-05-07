const progressLine = document.getElementById('timelineProgress');
const timeline = document.getElementById('timeline');

window.addEventListener('scroll', () => {
  const timelineTop = timeline.offsetTop;
  const timelineBottom = timelineTop + timeline.offsetHeight;
  const scrollMiddle = window.scrollY + window.innerHeight / 200;

  // Only update when scroll is within the timeline
  if (scrollMiddle >= timelineTop && scrollMiddle <= timelineBottom) {
    const progress = scrollMiddle - timelineTop;
    progressLine.style.height = `${progress}px`;
  } else if (scrollMiddle < timelineTop) {
    progressLine.style.height = `0px`;
  } else if (scrollMiddle > timelineBottom) {
    progressLine.style.height = `${timeline.offsetHeight}px`;
  }
});
