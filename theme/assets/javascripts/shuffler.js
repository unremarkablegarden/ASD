import Shuffle from 'shufflejs'

const shuffler = () => {
	if( $('.shuffler').length ) {
		console.log('shuffler')

		let filterState = []
		const wrapper = '.shuffler'
		const item = '.shuffler-item'
		const element = document.querySelector(wrapper)
		const sizer = element.querySelector(item)

		const shuffleInstance = new Shuffle(element, {
			itemSelector: item,
			sizer: sizer,
			staggerAmount: 150,
			filterMode: Shuffle.FilterMode.ALL,
		})

		$('[data-filter]').on('click', function() {
			let target = $(this).data('filter')
      let filtertype  = $(this).data('filtertype')

      if (filtertype === 'multi') {
  			$(this).toggleClass('is-active')

  			if ($(this).hasClass('is-active')) {
  				filterState.push(target)
  			} else {
  				filterState = filterState.filter(item => item !== target)
  			}
      }

      if (filtertype === 'single') {
        // $(this).addClass('is-active')
				let t = $(this)
				let set
				if ( ! t.hasClass('is-active')) {
					t.addClass('is-active')
					set = true
				} else {
					t.removeClass('is-active')
					set = false
				}

				if (set) {
	        t.closest('.filter').find('.is-active').not($(this)).each(function(){
	          let filter = $(this).data('filter')
	          console.log('remove: ' + filter)
	          $(this).removeClass('is-active')
	          filterState = filterState.filter(item => item !== filter)
	        })
					filterState.push($(this).data('filter'))
				} else {
					filterState = []
				}

				// show/hide events footer logos
				if (target === 'veranstaltungen' || target === 'karriereveranstaltungen') {
					$('.karriere-logos').removeClass('is-hidden')
				} else {
					$('.karriere-logos').addClass('is-hidden')
				}
      }

      $('.filter-toggle.all, .filter-all').on('click', function(){
        console.log('all')
        $('.filter-item.is-active').removeClass('is-active')
        $(this).addClass('is-active');
        filterState = []
        shuffleInstance.filter(filterState)
      })

			console.log(filterState)
			shuffleInstance.filter(filterState)
		})

		const supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints
		if (supportsTouch) {
			$('.shuffler-item').on('click touch', function() {
				$(this).toggleClass('touch')
			})
		}


	}
}

export default shuffler
