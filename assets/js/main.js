const sliderOpts = {
  type: 'fade',
  autoplay: true,
  drag: false,
  arrows: false,
  speed: 2000,
  rewind: true,
  pagination: false,
  pauseOnHover: false
};

function checkElementOffset(element) {
  const windowHeight = window.innerHeight;
  const elementHeight = element.offsetHeight;

  window.addEventListener('scroll', e => {
    if (window.pageYOffset > windowHeight * 0.5) {
      element.classList.add('fixedToTop');
      document.body.style.marginTop = `${elementHeight}px`;
    } else {
      element.classList.remove('fixedToTop');
      document.body.removeAttribute('style');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const headerElement = document.querySelector('.top-header');

  // make header fixed to top
  // if it is out the window
  checkElementOffset(headerElement);

  const slider = new Splide('.splide', sliderOpts).mount();
});