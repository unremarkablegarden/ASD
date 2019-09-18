// import browserSyncIt from './javascripts/browserSyncIt'
import headerParallax from './javascripts/headerParallax'
import shuffler from './javascripts/shuffler'
import filterToggle from './javascripts/filterToggle'
import headerAndMenu from './javascripts/headerAndMenu'
import urlQuery from './javascripts/urlQuery'
import scroll2top from './javascripts/scroll2top'
import search from './javascripts/search'
import AOS from 'aos/dist/aos'
import browserUpdate from 'browser-update'
// import faceDetection from 'jquery.facedetection'
import glideInit from './javascripts/galleries'
// import imagesLoaded from './javascripts/imagesLoaded'
// import faceCrop from './javascripts/faceCrop'
import socialHax from './javascripts/socialHax'
import langSwitcher from './javascripts/langSwitcher'

import jump from 'jump.js'

/*
   ____                _   __  __
  / ___|_   _  ___ ___(_) |  \/  | __ _ _ __   ___
 | |  _| | | |/ __/ __| | | |\/| |/ _` | '_ \ / _ \
 | |_| | |_| | (_| (__| | | |  | | (_| | | | |  __/
  \____|\__,_|\___\___|_| |_|  |_|\__,_|_| |_|\___|
*/


// var supportsPassive = false;
// try {
//   var opts = Object.defineProperty({}, 'passive', {
//     get: function() {
//       supportsPassive = true;
//     }
//   });
//   window.addEventListener("testPassive", null, opts);
//   window.removeEventListener("testPassive", null, opts);
// } catch (e) {}
// document.addEventListener('touchstart', fn, supportsPassive ? { passive: true } : false); 

AOS.init({
  disable: 'mobile',
  once: true
})

const anwaltHax = () => {
  $('.single-anwalte .vita li').each(function(){
    const t = $(this).text()
    if (t.includes('joining')) {
      console.log(t)
      $(this).text(t.replace('joining', 'joined'))
    }
  })
}

const autoAnchorPoints = () => {
  if ($('.auto-anchor').hasClass('enabled')) {
    const headings = $('post content').find('h2, h3, h4')
    let n = 0
    headings.each(function(){
      $(this).attr('data-n', n).addClass('anchor')
      const text = $(this).text()
      const link = $('<div class="column is-4"><a href="#" data-n="'+n+'" class="kompetenz-link">'+text+'</a></div>')
      $(link).appendTo('.kompetenzen-list')
      n += 1
    })

    $('.auto-anchor a').on('click', function(e) {
      const n = $(this).data('n')
      const offset = ($('.top-bar').height() + 20) * -1
      console.log(offset) 
      
      jump('.anchor[data-n="'+n+'"]', { offset: offset })
      e.preventDefault()
      return false
    })
  }
}

let isNotScreens
if (!$('body').hasClass('single-screens')) {
  isNotScreens = true
} else {
  isNotScreens = false
}

if (isNotScreens) {
  browserUpdate({
    notify:{e:11,f:-4,o:-4,s:-2,c:-6},
    insecure:true,
    unsupported:true,
    api:5,
  })
}


$(() => {
  whenDOMready()
})


const whenDOMready = () => {
  // browserSyncIt()
  headerAndMenu()
  headerParallax()
  filterToggle()
  shuffler()
  urlQuery()
  scroll2top()
  search()
  socialHax()
  AOS.refresh()
  glideInit()
  // faceCrop()
  anwaltHax()
  autoAnchorPoints()
  if (isNotScreens) {
    langSwitcher()
  } else {
    // is screens
    $('html').css({
      'overflow': 'hidden',
      'overflow-y': 'hidden',
      'overflow-x': 'hidden'
    })
  }
}
