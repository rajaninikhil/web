// Open modal when a work item is clicked
  document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('click', () => {
      const modalId = item.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = 'flex';
    });
  });

  // Close modal when close button is clicked
  document.querySelectorAll('.brand-modal .close').forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent background click from triggering
      closeBtn.closest('.brand-modal').style.display = 'none';
    });
  });

  // Close modal when clicking on the background (outside modal-content)
  document.querySelectorAll('.brand-modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });