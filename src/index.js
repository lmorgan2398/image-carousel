import "./styles.css";

let slideIndex = 0;
let autoSlideInterval;
let selectors = document.querySelectorAll(".selector");

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
  selectors.forEach((selector) => {
    if (selector.classList.contains("active")){
      selector.classList.remove("active");
    }
  });
  slideIndex = n;
  console.log(slideIndex);
  let currentSlide = slides[slideIndex];
  let currentSelector = selectors[slideIndex];
  currentSlide.classList.add("active");
  currentSelector.classList.add("active");
}

function setSlide(n) {
  slideIndex = n;
  console.log(slideIndex);
  showSlide(slideIndex);
  console.log(slideIndex);
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

selectors.forEach((selector) => {
  selector.addEventListener('click', () => {
    let index = Number(selector.dataset.index);
    setSlide(index);
  })
})