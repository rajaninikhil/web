const smallCards = document.querySelectorAll('.cards-side .small-card');
const popupModal = document.getElementById('popupModal');
const popupImage = document.getElementById('popupImage');
const popupName = document.getElementById('popupName');
const popupDescription = document.getElementById('popupDescription');
const closeBtn = document.querySelector('.close-btn');

const cardData = [
  {
    img: 'https://via.placeholder.com/400x400?text=Main',
    name: 'Emily Johnson',
    description: 'Expert writing coach with 10+ years of experience.'
  },
  {
    img: 'https://via.placeholder.com/400x400?text=1',
    name: 'James Smith',
    description: 'Specialist in journalism and creative writing.'
  },
  {
    img: 'https://via.placeholder.com/400x400?text=2',
    name: 'Laura Williams',
    description: 'Business mentor for entrepreneurs.'
  },
  {
    img: 'https://via.placeholder.com/400x400?text=3',
    name: 'Oliver Brown',
    description: 'Head of Design Team.'
  },
  {
    img: 'https://via.placeholder.com/400x400?text=4',
    name: 'Sophia Davis',
    description: 'Marketing strategist and creative head.'
  },
  {
    img: 'https://via.placeholder.com/400x400?text=5',
    name: 'Michael Wilson',
    description: 'Financial expert and coach.'
  },
  {
    img: 'https://via.placeholder.com/400x400?text=6',
    name: 'Olivia Martinez',
    description: 'Sales team leader with global outreach.'
  }
];

smallCards.forEach(card => {
  card.addEventListener('click', () => {
    const index = parseInt(card.getAttribute('data-index'));
    const data = cardData[index];
    if (data) {
      popupImage.src = data.img;
      popupName.textContent = data.name;
      popupDescription.textContent = data.description;
      popupModal.style.display = 'flex';
    }
  });
});

closeBtn.addEventListener('click', () => {
  popupModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === popupModal) {
    popupModal.style.display = 'none';
  }
});
