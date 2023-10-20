import "../sass/particles.scss";
import "../sass/particles-center.scss";
const circle = document.querySelector(".circle");
const card = document.querySelector(".card");
const bannerBorder = document.querySelector(".banner-border");
const hamburgerButton = document.querySelector(".mobile-hamburger");
const primaryHeader = document.querySelector(".primary-header");
const iconHamburger = document.querySelector(".icon-hamburger");
const iconClose = document.querySelector(".icon-close");
const particlesCount = getComputedStyle(document.body).getPropertyValue(
	"--particles-count"
);
const particlesCenterCount = getComputedStyle(document.body).getPropertyValue(
	"--particles-center-count"
);

card.onmouseenter = (e) => {
	circle.classList.add("in");
};

card.onmouseleave = (e) => {
	circle.classList.remove("in");
};

card.onmousemove = (e) => {
	const { top, left } = card.getBoundingClientRect();
	const { clientY, clientX } = e;

	circle.style.top = `${clientY - top}px`;
	circle.style.left = `${clientX - left}px`;
};

for (let i = 0; i < particlesCount; i++) {
	const particle = document.createElement("li");
	particle.classList.add("particle");

	document.querySelector(".particles").appendChild(particle);
}
for (let i = 0; i < particlesCenterCount; i++) {
	const particleCenter = document.createElement("li");
	particleCenter.classList.add("particle-center");

	document.querySelector(".particles-center").appendChild(particleCenter);
}

hamburgerButton.addEventListener("click", () => {
	primaryHeader.toggleAttribute("data-visible");
	hamburgerButton.setAttribute(
		"aria-expanded",
		primaryHeader.hasAttribute("data-visible")
	);
	if (primaryHeader.hasAttribute("data-visible")) {
		document.body.style.height = "100%";
		document.body.style.overflowY = "hidden";
		iconClose.style.display = "block";
		iconHamburger.style.display = "none";
	} else {
		document.body.style.overflowY = "auto";
		iconClose.style.display = "none";
		iconHamburger.style.display = "block";
	}
});

document
	.querySelectorAll(
		"#banner, #experiences, #projects, #skills, #learning, #contact, #links"
	)
	.forEach((element) => {
		element.addEventListener("click", () => {
			document.querySelector("." + element.id)?.scrollIntoView();
		});
	});
