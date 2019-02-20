const socialHax = () => {

  const whichLang = () => {
    const url = new URL(window.location.href)
    let lang = url.searchParams.get('lang')
    if (! lang ) { return 'de' }
    else { return lang }
  }

  $('ul#linkedin-con h2').remove()
  const logo1 = $('section.socialgrid.is-hidden-mobile .logo1')
  const logo2 = $('section.socialgrid.is-hidden-mobile .logo2')
  logo1.prependTo('.is-hidden-mobile #linkedin-con')
  logo2.appendTo('.is-hidden-mobile #linkedin-con')

  $('.is-hidden-mobile .linkedin-item').not('.logo').each(function(){
    const trimLength = 160

    // copy the link
    const link = $(this).find('div:first p:first a')
    const href = link.attr('href')

    let newLink
    if(href) {
      // check en or de for link text
      let word
      if (whichLang() == 'en') { word = 'More' }
      else { word = 'Mehr' }
      newLink = '<div class="link"><a target=_blank href="'+ href +'">'+ word +'</a></div>'
    } else {
      newLink = ''
    }

    link.remove()
    let text = $(this).find('div:first p:first').text()
    if(text.length > trimLength) {
      text = text.substring(0, trimLength) + '&hellip;'
    }
    const html = '<div><p>' + text + '</p>' + newLink + '</div>'
    $(this).html(html)
  })
}

export default socialHax
