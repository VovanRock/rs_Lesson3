const container = document.querySelector(".container");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upButton.addEventListener("click", () => {
  chageSlide("up");
});

downButton.addEventListener("click", () => {
  chageSlide("down");
});

function chageSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const height = container.clientHeight

  mainSlide.style.transform = `translateY(-${height * activeSlideIndex}px)`
  sidebar.style.transform = `translateY(${height * activeSlideIndex}px)`
}
