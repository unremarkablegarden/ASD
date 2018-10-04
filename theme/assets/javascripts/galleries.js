import Glide from '@glidejs/glide'

const glideInit = () => {
  const glideN = $('.glide').length

  if (glideN) {
    let glideConfig

    $('.glide').each(function(){

      let id = $(this).attr('id')

      if (id == 'anwalte-glide') {
        glideConfig = {
          type: 'carousel',
          perView: 1,
          // gap: 0

        }
      } else if (id == 'news-glide') {
        glideConfig = {
          type: 'carousel',
          perView: 1
        }
      } else if (id == 'socialgrid-glide') {
        glideConfig = {
          type: 'carousel',
          perView: 1.23
        }
        $('.socialgrid.is-hidden-tablet ul#linkedin-con .glide__slide').unwrap()
      } else if (id == 'acf-glide') {
        // for the partial, used in standorte
        glideConfig = {
          type: 'carousel',
          perView: 1
        }
      } else {
        glideConfig = {
          type: 'carousel',
          perView: 1
        }
      }

      if ($('#' + id).length) {
        new Glide('#' + id, glideConfig).mount()
      } else {
        new Glide('.glide', glideConfig).mount()
      }

    })

  }
}

export default glideInit
