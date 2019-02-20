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
    // const trimLength = 160

    // // copy the link
    // const link = $(this).find('div:first p:first a')
		// const href = link.attr('href')
		// const img = $(this).find('img')

    // let newLink
    // if(href) {
    //   // check en or de for link text
    //   let word
    //   if (whichLang() == 'en') { word = 'More' }
    //   else { word = 'Mehr' }
    //   newLink = '<div class="link"><a target=_blank href="'+ href +'">'+ word +'</a></div>'
    // } else {
    //   newLink = ''
    // }

    // link.remove()
    // let text = $(this).find('div:first p:first').text()
    // if(text.length > trimLength) {
    //   text = text.substring(0, trimLength) + '&hellip;'
		// }
		// if(img) {
		// 	const imgHTML = '<div class="image">'+img+'</div>'
		// } else {
		// 	const imgHTML = ''
		// }
		
    // const html = '<div>'+imgHTML+'<p>' + text + '</p>' + newLink + '</div>'
		// $(this).html(html)
		

		$('a').each(function() {
			let text = $(this).text()
			let search = 'lnkd.in'
			if(text.includes(search)) {
				let word
				if (whichLang() == 'en') { word = 'More' }
				else { word = 'Mehr' }
				$(this).text(word)
			}
		})

		
		$('.linkedin-update-image').each(function(){
			let src = $(this).attr('src')
			let newHTML = '<div class="img-box" style="background-image: url('+src+'); height: 100%; margin-bottom: 6px;     background-size: cover; background-position: center center;">&nbsp;</div>'
			$(this).replaceWith(newHTML)
		})
  })
}

export default socialHax
