/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */

let slideposition = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalslides = slides.length;

function updateslideposition() {
  for (const slide of slides) {
    slide.classList.remove('carousel-item-visible');
    slide.classList.add('carousel-item-hidden');
  }
  slides[slideposition].classList.add('carousel-item-visible');
}

function movetonextslide() {
  if (slideposition === totalslides - 1) {
    slideposition = 0;
  } else {
    slideposition++;
  }
  updateslideposition();
}
function movetoprevslide() {
  if (slideposition === 0) {
    slideposition = totalslides - 1;
  } else {
    slideposition--;
  }
  updateslideposition();
}
document.querySelector('#next_button').addEventListener('click', () => { movetonextslide(); });
document.querySelector('#previous_button').addEventListener('click', () => {
  movetoprevslide();
});
