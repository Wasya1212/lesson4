function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);
    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

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

  window.addEventListener('scroll', throttle(e => {
    if (window.pageYOffset > windowHeight * 0.5) {
      element.classList.add('fixedToTop');
      document.body.style.marginTop = `${elementHeight}px`;
    } else {
      element.classList.remove('fixedToTop');
      document.body.removeAttribute('style');
    }
  }, 100));
}

document.addEventListener('DOMContentLoaded', () => {
  const headerElement = document.querySelector('.top-header');

  // make header fixed to top
  // if it is out the window
  checkElementOffset(headerElement);

  const slider = new Splide('.splide', sliderOpts).mount();
});