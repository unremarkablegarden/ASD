import cloudinary from 'cloudinary-core'

const videoHeader = () => {

  var cl = cloudinary.Cloudinary.new()

  cl.config({
    cloud_name: 'heldisch-2019',
    api_key: '586633835477741',
    api_secret: 'jmGhFMbEiwo8SA2Ck5hnZZq6qDs'
  })

  var winW = $(window).width()
  var w = 1280
  if (winW < 500) { w = 600 }

  // let video1 = "Pexels_Videos_1918465_Wasser_loop720p_k1yueu"
  // let video1 = "Pexels_Videos_1918465_Wasser_loop_v7oxf3"
  let video1 = "ASD_Weihnachtskarte_03_yzq6oh"

  let config = {
    audio_codec: "none",
    width: w, crop: "scale",
    // fetch_format: "auto",
    // video_codec: "h264",
    // width: 1280,
    controls: false, loop: true, autoplay: true,
    playsinline: true, muted: true
  }

  let video = cl.video(video1, config)
  $('#video-header').html(video).css('overflow', 'hidden')

  function vcentervid() {
    let v = $('#video-header video').css('transition', 'all 1000ms')
    let vH = parseInt(v.height())
    let headerH = parseInt($('#video-header-img').height())
    let offset = parseInt(((vH - headerH) / 2) * -1)
    console.log(vH + ' / ' + headerH + '/ ' + offset)
    v.css('transform', 'translateY('+offset+'px)')
  }

  $(window).on('load', function() {
    vcentervid()
  })

  $(window).on('resize', function(){
    vcentervid()
  })



  // let image = '<img src="/app/uploads/2019/11/ASD_Titelbilder_MARITIME.svg"/>'
  // $('#video-header-img .inner').html(image)

}

export default videoHeader
