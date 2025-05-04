const progressLine = document.getElementById('timelineProgress');
    const timeline = document.getElementById('timeline');

    window.addEventListener('scroll', () => {
      const timelineTop = timeline.offsetTop;
      const timelineHeight = timeline.offsetHeight;
      const scrollY = window.scrollY + window.innerHeight;

      const maxHeight = (scrollY/1.75) - timelineTop;
      const clampedHeight = Math.min(timelineHeight, Math.max(0, maxHeight));

      progressLine.style.height = `${clampedHeight}px`;
    });