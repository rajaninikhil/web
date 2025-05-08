const howcard1 = document.getElementById("howcard1");
const howcard2 = document.getElementById("howcard2");
const container = document.getElementById("howContainer");
const heading = document.getElementById("howHeading");

const spacing = 80;
const cardLockPoint = window.innerHeight * 0.25; // 25vh
const headingLockPoint = window.innerHeight * 0.125; // 12.5vh
const initialCardOffset = 75; // move card1 100px lower initially

window.addEventListener("scroll", () => {
	const containerRect = container.getBoundingClientRect();
	const containerTop = containerRect.top;
	const containerHeight = container.offsetHeight;
	const card1Height = howcard1.offsetHeight;

	const maxScrollDistance = containerHeight - cardLockPoint - card1Height - spacing;

	// Reset
	if (containerRect.bottom < 0 || containerRect.top > window.innerHeight) {
		howcard1.style.position = "absolute";
		howcard1.style.top = `${initialCardOffset}px`;
		howcard1.style.opacity = "1";

		howcard2.style.position = "absolute";
		howcard2.style.top = `${initialCardOffset + card1Height + spacing}px`;
		howcard2.style.transform = "translateY(0px)";

		heading.style.position = "absolute";
		heading.style.top = "0";
		heading.style.left = "50%";
		heading.style.transform = "translateX(-50%)";
		heading.style.opacity = "1";

		return;
	}

	// Heading lock at 12.5vh
	if (containerTop <= headingLockPoint) {
		heading.style.position = "fixed";
		heading.style.top = `${headingLockPoint}px`;
		heading.style.left = "50%";
		heading.style.transform = "translateX(-50%)";
	} else {
		heading.style.position = "absolute";
		heading.style.top = "0";
		heading.style.left = "50%";
		heading.style.transform = "translateX(-50%)";
	}

	// Card1 lock at 25vh, but only after offset passes
	if (containerTop <= cardLockPoint - initialCardOffset) {
		howcard1.style.position = "fixed";
		howcard1.style.top = `${cardLockPoint}px`;
	} else {
		howcard1.style.position = "absolute";
		howcard1.style.top = `${initialCardOffset}px`;
	}

	// Scroll offset adjusted
	let scrollAmount = Math.min(cardLockPoint - containerTop - initialCardOffset, maxScrollDistance);
	scrollAmount = Math.max(scrollAmount, 0);

	// Card2 position and scroll
	howcard2.style.position = "absolute";
	howcard2.style.top = `${initialCardOffset + card1Height + spacing}px`;
	howcard2.style.transform = `translateY(-${scrollAmount}px)`;

	// Fade out card1 when card2 reaches lock point
	const howcard2Rect = howcard2.getBoundingClientRect();
	if (howcard2Rect.top <= cardLockPoint) {
		howcard1.style.opacity = "0";
		howcard1.style.pointerEvents = "none";
	} else {
		howcard1.style.opacity = "1";
		howcard1.style.pointerEvents = "auto";
	}
});
