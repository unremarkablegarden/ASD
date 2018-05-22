const headerParallax = () => {
  const hero = $('.hero')
  if(hero.length) {
    const heroH = hero.height()
    const heroHbuf = heroH*1.2

    var scroll = function () {
      if(lastScrollTop < heroHbuf) {
        $('.hero:hidden').show()
        let move = lastScrollTop / 2
        // hero.css('transform', 'translate3d(0, -'+move+'px, 0)')
      } else if(lastScrollTop > heroHbuf) {
        $('.hero:visible').hide()
      }
    }

    const raf = window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              window.oRequestAnimationFrame
    const $window = $(window)
    let lastScrollTop = $window.scrollTop()

    const loop = () => {
      var scrollTop = $window.scrollTop()
      if (lastScrollTop === scrollTop) {
        raf(loop)
        return
      } else {
        lastScrollTop = scrollTop
        scroll()
        raf(loop)
      }
    }

    if (raf) { loop() }
  }
}

export default headerParallax
