const faceCrop = () => {
  const img = $('.single-anwalte img.facecrop')
  if (img.length) {
    img.imagesLoaded(function(){
      img.faceDetection({
        complete: function (faces) {
          // console.log(faces)
          if (faces.length) {
            console.log(faces)
            let face
            // get face with highest confidence rating
            if (faces.length > 1) {
              face = faces.reduce(function(prev, current) {
                return (prev.confidence > current.confidence) ? prev : current
              })
            } else {
              face = faces[0]
            }
            console.log(face)

            const imgW = img.attr('width')
            const imgH = img.attr('height')
            const t = parseInt(face.y)
            const h = parseInt(face.height)

            if (face.height > 100) { // && face.confidence > 0
              console.log('found face')
              const winW = $(window).width()
              const heroH = $('.hero .inner').height()
              const maxOffset = (imgH - heroH) / 2

              let ratio = winW / imgW
              // if (ratio > 1) ratio = 1
              // // const offset = ((ratio * t * -1) + h)
              let offset = (t * ratio)
              // if (offset > maxOffset) { offset = maxOffset }

              offset = (offset - (h*ratio/1.5))

              const imgRealH = winW * (imgH/imgW)
              const spareMargin = imgRealH - heroH - offset

              offset = offset * -1

              console.log( 'offset: '+offset+'\n heroH: '+heroH)

              if(offset < 0 && spareMargin > 0) {
                $('.hero .inner').css({ 'background-position-y': offset })
              }
            }
            // } else {
            //   console.log('no face confidence or face too small')
            // }
          }
        }
      })
    })
  }
}

export default faceCrop
