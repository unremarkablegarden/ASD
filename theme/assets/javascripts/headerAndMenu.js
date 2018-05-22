const headerAndMenu = () => {

  const mt = $('a.menu-toggle')
  const menu = $('#main-menu')
  const s = $('#search')
  const sh = $('#site-header')

  mt.on('click', (e) => {
    mt.toggleClass('is-active')
    menu.toggleClass('is-active')
    if (s.hasClass('is-active')) s.removeClass('is-active')

    let breaking
    if (sh.hasClass('has-breaking')) { breaking = true }
    else { breaking = false }
    if (breaking) sh.toggleClass('has-breaking')

    e.preventDefault()
  })

  $('#site-header .back-button').on('click', function (e) {
    if (document.referrer || history.length || history.previous) {
      window.history.back()
    } else {
      window.location.href = '/'
    }
    e.preventDefault()
  })


  // BREAKING
  const breakingClosed = sessionStorage.getItem('breakingClosed')
  let breakingLatent = false
  if (sh.hasClass('has-breaking-latent')) { breakingLatent = true }

  console.log(breakingClosed)
  if (breakingClosed !== 'true' && breakingLatent) {
    // $('#site-header').removeClass('has-breaking')
    $('#site-header').removeClass('has-breaking-latent').addClass('has-breaking')
  }

  $('.breaking .close').on('click', function (e) {
    $('#site-header').removeClass('has-breaking')
    sessionStorage.setItem('breakingClosed', true)
    e.preventDefault()
  })


  $('.awards .toggle').on('click', function(e){
    $('.award.hide').removeClass('hide')
    $(this).addClass('is-hidden')
    e.preventDefault()
  })

}

export default headerAndMenu
