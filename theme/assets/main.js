import browserSyncIt from './javascripts/browserSyncIt'
import headerParallax from './javascripts/headerParallax'
import shuffler from './javascripts/shuffler'
import filterToggle from './javascripts/filterToggle'
import headerAndMenu from './javascripts/headerAndMenu'
import urlQuery from './javascripts/urlQuery'
import scroll2top from './javascripts/scroll2top'
import search from './javascripts/search'
import AOS from 'aos/dist/aos'
import browserUpdate from 'browser-update'
import faceDetection from 'jquery.facedetection'
import glideInit from './javascripts/galleries'
import imagesLoaded from './javascripts/imagesLoaded'
import faceCrop from './javascripts/faceCrop'
import socialHax from './javascripts/socialHax'
import langSwitcher from './javascripts/langSwitcher'

/*
   ____                _   __  __
  / ___|_   _  ___ ___(_) |  \/  | __ _ _ __   ___
 | |  _| | | |/ __/ __| | | |\/| |/ _` | '_ \ / _ \
 | |_| | |_| | (_| (__| | | |  | | (_| | | | |  __/
  \____|\__,_|\___\___|_| |_|  |_|\__,_|_| |_|\___|
*/


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


browserUpdate({
  notify:{e:11,f:-4,o:-4,s:-2,c:-6},
  insecure:true,
  unsupported:true,
  api:5,
  // text_xx: 'Hi',
  // test: true
})


$(() => {
  whenDOMready()
})


const whenDOMready = () => {
  browserSyncIt()
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
  faceCrop()
  anwaltHax()
  langSwitcher()
}
