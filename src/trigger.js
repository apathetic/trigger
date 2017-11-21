const isTouchDevice = ('ontouchstart' in window) || false;
const defaults = {
  class: 'animated', // default classname to add when animating-in
  stagger: 0,        // delay between animations if "staggered"
  offset: 0,         // offset after the element comes in to view before we apply animation, in px
  disableTouch: true
};

/**
 * Watch for the position of an element to come on screen. When it does,
 * we animate it / fade in / etc. by adding a CSS class.
 * @param  {String} selector The querySelector of the element(s) to animate-in.
 * @param  {integer} opts    Animations options.
 * @return {void}
 */
export default function Trigger(selector, opts = {}) {
  const options = Object.assign({}, defaults, opts);
  const animatables = document.querySelectorAll(selector);
  let position;
  let delay = 0;

   if (!animatables.length || (isTouchDevice && opts.disableTouch)) {
     return false;
   }

  Array.prototype.forEach.call(animatables, (element, i) => {
    /**
     * Monitors the position of the element relative to the viewport
     * @return {void}
     */
    function check() {
      position = element.getBoundingClientRect().top;
      position += options.offset;

      if (position < window.innerHeight) {
        delay += options.stagger;

        window.setTimeout(() => {
          element.classList.add(options.class);
        }, delay);

        // reset delay. This way, we can capture "groups" of elements to animate
        window.setTimeout(() => {
          delay = 0;
        }, 100);

        window.removeEventListener('scroll', check);
        window.removeEventListener('resize', check);
      }
    }

    window.addEventListener('scroll', check);
    window.addEventListener('resize', check);

    check(element);
  });
}
