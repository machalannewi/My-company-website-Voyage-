// $(document).ready(function () {
// 	"use strict";

// 	/*==================================
// * Author        : "ThemeSine"
// * Template Name : Listrace directory HTML Template
// * Version       : 1.0
// ==================================== */

// 	/*=========== TABLE OF CONTENTS ===========
// 1. Scroll To Top
// 2. slick carousel
// 3. welcome animation support
// 4. feather icon
// 5. counter
// ======================================*/

// 	// 1. Scroll To Top
// 	$(window).on("scroll", function () {
// 		if ($(this).scrollTop() > 600) {
// 			$(".return-to-top").fadeIn();
// 		} else {
// 			$(".return-to-top").fadeOut();
// 		}
// 	});
// 	$(".return-to-top").on("click", function () {
// 		$("html, body").animate(
// 			{
// 				scrollTop: 0,
// 			},
// 			1500
// 		);
// 		return false;
// 	});

// 	// 2. slick carousel

// 	$(".testimonial-carousel").slick({
// 		infinite: true,
// 		centerMode: true,
// 		autoplay: true,
// 		slidesToShow: 5,
// 		slidesToScroll: 3,
// 		autoplaySpeed: 1500,
// 		// the magic
// 		responsive: [
// 			{
// 				breakpoint: 1440,
// 				settings: {
// 					slidesToShow: 3,
// 				},
// 			},
// 			{
// 				breakpoint: 1024,
// 				settings: {
// 					slidesToShow: 2,
// 				},
// 			},
// 			{
// 				breakpoint: 991,
// 				settings: {
// 					slidesToShow: 2,
// 					centerMode: false,
// 				},
// 			},
// 			{
// 				breakpoint: 767,
// 				settings: {
// 					slidesToShow: 1,
// 				},
// 			},
// 		],
// 	});

// 	// 3. welcome animation support

// 	$(window).load(function () {
// 		$(".welcome-hero-txt h2,.welcome-hero-txt p")
// 			.removeClass("animated fadeInUp")
// 			.css({ opacity: "0" });
// 		$(".welcome-hero-serch-box")
// 			.removeClass("animated fadeInDown")
// 			.css({ opacity: "0" });
// 	});

// 	$(window).load(function () {
// 		$(".welcome-hero-txt h2,.welcome-hero-txt p")
// 			.addClass("animated fadeInUp")
// 			.css({ opacity: "0" });
// 		$(".welcome-hero-serch-box")
// 			.addClass("animated fadeInDown")
// 			.css({ opacity: "0" });
// 	});

// 	// 4. feather icon

// 	feather.replace();

// 	// 5. counter
// 	$(window).on("load", function () {
// 		$(".counter").counterUp({
// 			delay: 10,
// 			time: 3000,
// 		});
// 	});
// });

// const texts = [
// 	"Web Development",
// 	"Mobile App Development",
// 	"E-commerce Development",
// 	"Software Development",
// ];
// let index = 0;

// function typeText(text, delay) {
// 	return new Promise((resolve) => {
// 		let i = 0;
// 		const interval = setInterval(() => {
// 			document.getElementById("dynamic-text").textContent += text[i];
// 			i++;
// 			if (i === text.length) {
// 				clearInterval(interval);
// 				setTimeout(resolve, delay); // Wait after typing
// 			}
// 		}, 100); // Adjust speed of typing
// 	});
// }

// function clearText() {
// 	return new Promise((resolve) => {
// 		document.getElementById("dynamic-text").textContent = ""; // Clear text immediately
// 		setTimeout(resolve, 500); // Wait before starting to type next text
// 	});
// }

// async function runTextAnimation() {
// 	while (true) {
// 		await clearText(); // Clear text before typing new one
// 		await typeText(texts[index], 1000); // Wait after typing
// 		index = (index + 1) % texts.length; // Loop through texts
// 	}
// }

// runTextAnimation(); // Start the animation

// const texts = [
// 	"Web Development",
// 	"Mobile App Development",
// 	"E-commerce Development",
// 	"Software Development",
// ];
// let currentTextIndex = 0;
// const displayElement = document.getElementById("dynamic-text");
// const typingSpeed = 100; // milliseconds
// const erasingSpeed = 50; // milliseconds
// const pauseDuration = 1000; // milliseconds

// function typeText(text) {
// 	let index = 0;
// 	const typeInterval = setInterval(() => {
// 		if (index < text.length) {
// 			displayElement.textContent += text.charAt(index);
// 			index++;
// 		} else {
// 			clearInterval(typeInterval);
// 			setTimeout(() => eraseText(text), pauseDuration);
// 		}
// 	}, typingSpeed);
// }

// function eraseText(text) {
// 	let index = text.length;
// 	const eraseInterval = setInterval(() => {
// 		if (index > 0) {
// 			displayElement.textContent = text.slice(0, index - 1);
// 			index--;
// 		} else {
// 			clearInterval(eraseInterval);
// 			currentTextIndex = (currentTextIndex + 1) % texts.length;
// 			setTimeout(() => typeText(texts[currentTextIndex]), pauseDuration);
// 		}
// 	}, erasingSpeed);
// }

// // Start the typing effect
// typeText(texts[currentTextIndex]);

// function toggleFaq(id) {
// 	const faq = document.getElementById(`faq-${id}`);
// 	const icon = document.getElementById(`icon-${id}`);
// 	const button = document.getElementById(`button-${id}`);
// 	if (faq.classList.contains("hidden")) {
// 		faq.classList.remove("hidden");
// 		icon.innerHTML =
// 			'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />'; // Minus icon
// 		button.classList.add("text-pink-500");
// 	} else {
// 		faq.classList.add("hidden");
// 		icon.innerHTML =
// 			'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />'; // Plus icon
// 		button.classList.remove("text-pink-500");
// 	}
// }

const texts = [
	"Web Development",
	"Mobile App Development",
	"E-commerce Development",
	"Software Development",
];
let currentTextIndex = 0;
const displayElement = document.getElementById("dynamic-text");
const typingSpeed = 100; // milliseconds
const erasingSpeed = 50; // milliseconds
const pauseDuration = 1000; // milliseconds

function typeText(text) {
	let index = 0;
	const typeInterval = setInterval(() => {
		if (index < text.length) {
			displayElement.textContent += text.charAt(index);
			index++;
		} else {
			clearInterval(typeInterval);
			setTimeout(() => eraseText(text), pauseDuration);
		}
	}, typingSpeed);
}

function eraseText(text) {
	let index = text.length;
	const eraseInterval = setInterval(() => {
		if (index > 0) {
			displayElement.textContent = text.slice(0, index - 1);
			index--;
		} else {
			clearInterval(eraseInterval);
			currentTextIndex = (currentTextIndex + 1) % texts.length;
			setTimeout(() => typeText(texts[currentTextIndex]), pauseDuration);
		}
	}, erasingSpeed);
}

// Start the typing effect
typeText(texts[currentTextIndex]);

$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 10,
	nav: false,
	dots: true,
	autoplay: true,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 2,
		},
		1000: {
			items: 3,
		},
	},
});

document.addEventListener("DOMContentLoaded", function () {
	// General function to setup dropdown toggles
	function setupDropdownToggle(buttonSelector, dropdownSelector) {
		const button = document.querySelector(buttonSelector);
		const dropdown = document.querySelector(dropdownSelector);

		if (button && dropdown) {
			button.addEventListener("click", () => {
				const isExpanded = button.getAttribute("aria-expanded") === "true";

				// Close all dropdowns first
				document
					.querySelectorAll('[aria-expanded="true"]')
					.forEach((openButton) => {
						openButton.setAttribute("aria-expanded", "false");
					});
				document.querySelectorAll(".dropdown").forEach((openDropdown) => {
					openDropdown.classList.add("hidden");
				});

				// Toggle the clicked dropdown
				button.setAttribute("aria-expanded", !isExpanded);
				dropdown.classList.toggle("hidden", isExpanded); // Show or hide based on current state
			});
		}
	}

	// Initialize toggles
	setupDropdownToggle('[aria-controls="disclosure-1"]', "#disclosure-1"); // Products
	setupDropdownToggle('[aria-controls="disclosure-2"]', "#disclosure-2"); // Services

	const hamburger = document.getElementById("hamburger");
	const closeBtn = document.getElementById("close-btn");
	const navBar = document.getElementById("mobile-navbar");

	hamburger.addEventListener("click", () => {
		if (hamburger.classList.contains("block")) {
			hamburger.classList.remove("block");
			hamburger.classList.add("hidden");
			closeBtn.classList.remove("hidden");
			navBar.classList.remove("hidden");
		}
	});

	closeBtn.addEventListener("click", () => {
		closeBtn.classList.add("hidden");
		hamburger.classList.remove("hidden");
		hamburger.classList.add("block");
		navBar.classList.add("hidden");
	});
});

function toggleFaq(id) {
	// Close all other FAQs
	const faqs = document.querySelectorAll('[id^="faq-"]');
	const icons = document.querySelectorAll('[id^="icon-"]');
	const buttons = document.querySelectorAll('[id^="button-"]');

	faqs.forEach((faq, index) => {
		const currentId = index + 1;
		if (currentId !== id) {
			faq.classList.add("hidden");
			icons[index].innerHTML =
				'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />';
			buttons[index].classList.remove("text-pink-500");
		}
	});

	// Toggle the clicked FAQ
	const faq = document.getElementById(`faq-${id}`);
	const icon = document.getElementById(`icon-${id}`);
	const button = document.getElementById(`button-${id}`);
	if (faq.classList.contains("hidden")) {
		faq.classList.remove("hidden");
		icon.innerHTML =
			'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />'; // Minus icon
		button.classList.add("text-pink-500"); // Add pink text color
	} else {
		setTimeout(() => faq.classList.add("hidden"), 500); // Delay hiding to allow transition
		icon.innerHTML =
			'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />'; // Plus icon
		button.classList.remove("text-pink-500"); // Remove pink text color
	}

	// if (icon.classList.contains("block")) {
	// 	icon.classList.add("hidden");
	// 	icon.innerHTML =
	// 		'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />';
	// }
}
