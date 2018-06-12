const langSwitcher = () => {
  // localStorage.removeItem('lang')

  const langButton = $('.top-bar a.lang')
  const currentLang = langButton.data('current-lang')
  const toLang = langButton.data('to-lang')
  const href = langButton.data('href')
  const storedLang = localStorage.getItem('lang')

  let urlLang
  if (window.location.href.includes('/en/')) { urlLang = 'en' }
  else { urlLang = 'de' }
  console.log('urlLang: ' + urlLang)

  langButton.on('click', function(e){
    localStorage.setItem('lang', toLang)
    console.log(href)
    window.location.replace(href)
    e.preventDefault()
  })

  if (storedLang) { console.log('storedLang: '+storedLang)
  } else { console.log('storedLang not set') }

  const browserLang = navigator.language
  let isntGerman
  if (browserLang.includes('de')) { isntGerman = false }
  else { isntGerman = true }

  if (isntGerman && !storedLang && urlLang == 'de') {
    // is not german
    // has no language stored in localStorage
    console.log('ask if they want to switch')
    $('#language_prompt').addClass('is-active')
  }

  // auto-redirect if lang set but on the wrong page
  if (storedLang && storedLang !== urlLang) {
    console.log('redirecting cus wrong lang: '+href)
    const href = langButton.data('href')
    // window.location.replace(href)
  }

  $('#language_prompt .close, #language_prompt button[data-action="close"]').on('click', function(){
    console.log('leave it in de')
    localStorage.setItem('lang', 'de')
    $('#language_prompt').removeClass('is-active')
  })

  $('#language_prompt button[data-action="english"]').on('click', function(){
    console.log('change it to en')
    localStorage.setItem('lang', 'en')
    // const href = window.location.href + langButton.data('href')
    const href = langButton.data('href')
    console.log(href)
    window.location.replace(href)
  })

}

export default langSwitcher
