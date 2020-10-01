function showElement(element) {
  anime({
    targets: element,
    opacity: 1,
    translateY: '0px',
    easing: 'easeInOutQuad'
  });
}

function hideElement(element) {
  anime({
    targets: element,
    opacity: 0,
    translateY: '200px',
    easing: 'easeInOutQuad'
  });
}

function isOnScreen(element) {
  const windowHeight = window.innerHeight;
  const windowPosition = window.pageYOffset;
  const elementPosition = element.offsetTop;

  return (windowHeight * 0.6) + windowPosition >= elementPosition;
}

function appearOnScroll(element, onAppear = () => { }) {
  return throttle(() => {
    if (isOnScreen(element)) {
      showElement(element);
      onAppear();
    }
  }, 200);
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.isMobileDeviceOrBrowser) return;
  
  const fadeOutElements = Array.from(document.querySelectorAll('.content>*'));
  
  const scrollAppearListeners = fadeOutElements.map((element, index) => {
    return appearOnScroll(element, () => {
      window.removeEventListener('scroll', scrollAppearListeners[index]);
    });
  });

  fadeOutElements.forEach((element, index) => {
    if (isOnScreen(element)) return;
    hideElement(element);
    window.addEventListener('scroll', scrollAppearListeners[index]);
  });
});