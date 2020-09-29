const sliderOpts = {
  type: 'fade',
  autoplay: true,
  drag: false,
  arrows: false,
  speed: 2000,
  rewind: true,
  pagination: false
};

document.addEventListener('DOMContentLoaded', () => {
  const slider = new Splide('.splide', sliderOpts).mount();
});