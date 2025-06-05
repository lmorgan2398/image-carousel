import "./styles.css";

let slideIndex = 0;
let autoSlideInterval;

showSlide(slideIndex);
startAutoSlide();

// Next/prev control
function plusSlide(n) {
  showSlide((slideIndex += n));
}

function showSlide(n) {
  let slides = document.querySelectorAll(".slide");
  if (n > slides.length - 1) {
    n = 0;
  } else if (n < 0) {
    n = slides.length - 1;
  }
  slides.forEach((slide) => {
    if (slide.classList.contains("active")) {
      slide.classList.remove("active");
    }
  });
  slideIndex = n;
  let currentSlide = slides[slideIndex];
  currentSlide.classList.add("active");
}

let prev = document.querySelector(".prev");
prev.addEventListener("click", () => {
  plusSlide(-1);
});

let next = document.querySelector(".next");
next.addEventListener("click", () => {
  plusSlide(1);
});

function startAutoSlide() {
  console.log("start");
  autoSlideInterval = setInterval(() => {
    plusSlide(1);
  }, 5000);
}

function stopAutoSlide() {
  console.log("stop");
  clearInterval(autoSlideInterval);
}

let slideshow = document.querySelector(".slideshow");
slideshow.addEventListener("mouseenter", stopAutoSlide);
slideshow.addEventListener("mouseleave", startAutoSlide);
