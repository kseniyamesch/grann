const carousel = document.querySelector("[data-target='carousel']");
const card = document.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");
const pgnNav = document.querySelector("[data-target='pagination']");
const dotSlider = document.querySelector("[data-target='dot']");

const cardWidth = card.clientWidth;
const dotWidth = dotSlider.clientWidth;
const cardCount = carousel.querySelectorAll("[data-target='card']").length;

leftButton.addEventListener('click', clickToLeft);
rightButton.addEventListener('click', clickToRight);

function clickToLeft() {
  carousel.scrollLeft -= cardWidth;
  pgnNav.scrollLeft -= dotWidth;
}

function clickToRight() {
  carousel.scrollLeft += cardWidth;
  pgnNav.scrollLeft += dotWidth;
}
