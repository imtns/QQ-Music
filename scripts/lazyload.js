function Lazyload(images) {
    let images = images ? Array.from(images) : document.querySelectorAll('.lazyload');

    window.addEventListener('scroll', onscroll)
    window.dispatchEvent(new Event('scroll'))
    let onscroll = throttle(function() {
        if (imgs.length === 0) {
            return window.removeEventListener('scroll', onscroll)
          }
          imgs = imgs.filter(img => img.classList.contains('lazyload'))
          imgs.forEach(img => inViewport(img) && loadImage(img))
    },300)

    function viewImage(image) {
        let { top, right, bottom, left } = image.getBoundingClientRect();
        let viewWidth = document.documentElement.clientWidth;
        let viewHeight = document.documentElement.clientHeight;
        return (
            (top > 0 && top < viewHeight || bottom < 0 && bttom > viewHeight) &&
            (left > 0 && left < viewWidth || right > 0 && right < viewWidth)
        )
    }
    function throttle(func, wait) {
        let prev, timer
        return function fn() {
            let curr = Date.now()
            let diff = curr - prev
            if (!prev || diff >= wait) {
                func()
                prev = curr
            } else if (diff < wait) {
                clearTimeout(timer)
                timer = setTimeout(fn, wait - diff);
            }

        }
    }
    function loadImage(img, callback) {
        let image = new Image()
        image.src = img.dataset.src
        image.onload = function() {
          img.src = image.src
          img.classList.remove('lazyload')
          if (typeof callback === 'function') callback()
        }
      }

}