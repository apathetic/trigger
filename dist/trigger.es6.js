var isTouchDevice = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch || false;

/**
 * Animate In: watch for the position of an element to come on screen. When it does,
 * we animate it by adding class "animated"
 *
 * @param  {mixed} animatables
 * @param  {integer} delay
 * @return {void}
 */
function trigger(animatables, delay) {
  if ( delay === void 0 ) delay=0;

  if (!animatables.length|| isTouchDevice) {
    return false;
  }

  [].prototype.forEach.call(animatables, function (element) {
    var position;

    function check() {
      position = element.getBoundingClientRect().top;
      position += delay;

      if (position < window.innerHeight) {
        $(element).addClass('animated');

        window.removeEventListener('scroll', check);
        window.removeEventListener('resize', check);
      }
    }

    window.addEventListener('scroll', check);
    window.addEventListener('resize', check);

    check();
  });

}

export default trigger;