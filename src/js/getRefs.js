export default function getRefs() {
  return {
    carousel: document.querySelector("[data-target='carousel']"),
    card: document.querySelector("[data-target='card']"),
    leftButton: document.querySelector("[data-action='slideLeft']"),
    rightButton: document.querySelector("[data-action='slideRight']"),
  };
}

// const carousel = document.querySelector("[data-target='carousel']");
// const card = carousel.querySelector("[data-target='card']");
// const leftButton = document.querySelector("[data-action='slideLeft']");
// const rightButton = document.querySelector("[data-action='slideRight']");
