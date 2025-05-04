
const tabLabels = [
	"Analyze", "Define", "Plan", "Onboard", "Connect", "Manage", "Refine"
  ];
  const tabDescriptions = [
	"Analyze Your Customer Footprint",
	"Define Your Business Goals",
	"Plan Your Strategy Effectively",
	"Onboard With Ease",
	"Connect With Your Audience",
	"Manage Everything Seamlessly",
	"Refine Your Process Continuously"
  ];

  const tabs = document.querySelectorAll(".tabs span");
  const heading = document.getElementById("content-heading");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const image = document.getElementById("factoryImage");

  let currentIndex = 0;

  function setActiveTab(index) {
	tabs.forEach(tab => tab.classList.remove("active"));
	tabs[index].classList.add("active");
	heading.textContent = tabDescriptions[index];
	image.style.left = `-${index * 10}%`; // scrolls image slowly to the right
	currentIndex = index;
  }

  tabs.forEach((tab, index) => {
	tab.addEventListener("click", () => setActiveTab(index));
  });

  prevBtn.addEventListener("click", () => {
	const newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
	setActiveTab(newIndex);
  });

  nextBtn.addEventListener("click", () => {
	const newIndex = (currentIndex + 1) % tabs.length;
	setActiveTab(newIndex);
  });

  