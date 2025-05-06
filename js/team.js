const smallCards = document.querySelectorAll('.cards-side .small-card');
const popupModal = document.getElementById('popupModal');
const popupImage = document.getElementById('popupImage');
const popupName = document.getElementById('popupName');
const popupDescription = document.getElementById('popupDescription');
const closeBtn = document.querySelector('.close-btn');

const cardData = [
  {
    img: '../images/1.jpeg',
    name: 'Dummy',
    description: 'Do not add anything'
  },
  {
    img: '../images/about/team/crop/1.png',
    name: 'S. Jaganath',
    description: 'S. Jaganath leads Parimal Mandir’s customer operations, including marketing and partnerships. With a deep commitment to building India’s most loved incense brand, he combines strong leadership with a humble, spiritually grounded approach to life. A true marketing expert and a firm believer in the power of people, he is dedicated to keeping his team inspired and motivated. Known for his philanthropic spirit and generosity, S. Jaganath sets a powerful example for aspiring entrepreneurs everywhere.'
  },
  {
    img: '../images/about/team/crop/2.png',
    name: 'S.G. Radhakrishna',
    description: "As Parimal’s Master Perfumer, S.G. Radhakrishna is known for his visionary leadership and innovative approach. Joining the family business after completing his education, he quickly made his mark with his business insight. He oversees all revenue and manufacturing operations, including Parimal's infrastructure development. Thanks to his dedication, Parimal now boasts over 1,00,000 sq. feet of manufacturing space. His entrepreneurial vision has been key in driving the company’s growth, ensuring continuous improvements and keeping Parimal ahead in the competitive global market."
  },
  {
    img: '../images/about/team/crop/3.png',
    name: 'S.G. Raghuram',
    description: "S.G. Raghuram manages all dispatches and inventory across Parimal's locations, as well as overseeing daily operations. His entrepreneurial skills and business acumen have driven Parimal to new heights. Under his leadership, he has fostered a work environment that focuses on performance, customer satisfaction, and innovation."
  },
  {
    img: '../images/about/team/crop/4.png',
    name: 'S.G. Vijay',
    description: 'S.G. Vijay leads Parimal’s international operations, focusing on expanding strategic partnerships in Europe, the Middle East, and Africa. A strong negotiator, he has used his deep understanding of emerging trends and exceptional business skills to drive growth and success in these markets.'
  },
  {
    img: '../images/about/team/crop/5.png',
    name: 'S.G. Ajay',
    description: 'S.G. Ajay heads the printing and packaging division at Parimal, bringing creativity and innovation to every project. With over 10 national awards for excellence in printing, he excels in investing in people and expanding business capabilities. Despite his achievements, he remains humble, grounded in traditional values while embracing modern thinking.'
  },
  {
    img: '../images/about/team/crop/6.png',
    name: 'Swaraj R. Sunku',
    description: "A third-generation entrepreneur, Swaraj leads Parimal's product team, driving innovation and business growth both nationally and internationally. As a professional perfumer, he is behind Parimal’s new product development and the launch of the company’s master brand strategy. His focus on R&D and continuous improvement has made him a key driver of the company’s success and expansion into new ventures."
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
