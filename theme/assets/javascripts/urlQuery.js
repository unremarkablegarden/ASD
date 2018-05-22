const urlQuery = () => {
  var params = new URLSearchParams(window.location.search);
  if (params.toString()) {

    // ANWALTE
    if ($('body').hasClass('post-type-archive-anwalte')) {

      if (params.has('standort')) {
        $('button[data-filtertoggle="standorte"]').trigger('click')
        const standort = params.get('standort')
        $('[data-filter="'+standort+'"]').trigger('click')
      }


      if (params.has('k')) {
        $('button[data-filtertoggle="kompetenzen"]').trigger('click')

        const k = params.get('k')
        let kompetenzen = []

        if (k.includes(',')) {
          kompetenzen = k.split(',')
        }
        else {
          kompetenzen.push(k)
        }
        kompetenzen.forEach((e) => {
          $('[data-filter="'+e+'"]').trigger('click')
        })
      }
    } // end anwalte


    // NEWS
    if ($('body').hasClass('post-type-archive-news')) {
      if (params.has('veranstaltungen')) {
        $('[data-filter="veranstaltungen"]').trigger('click')
        // const standort = params.get('standort')
        // $('[data-filter="'+standort+'"]').trigger('click')
      }
    } // end news

  }
}

export default urlQuery
