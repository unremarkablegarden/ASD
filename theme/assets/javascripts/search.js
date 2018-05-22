/*
  ____                      _
 / ___|  ___  __ _ _ __ ___| |__
 \___ \ / _ \/ _` | '__/ __| '_ \
  ___) |  __/ (_| | | | (__| | | |
 |____/ \___|\__,_|_|  \___|_| |_|

 */

const search = () => {
	const s = $('#search')
	const m = $('#main-menu')
	const mt = $('.menu-toggle')

	$('a.search-button').on('click', function(e){
		s.toggleClass('is-active')

		if (m.hasClass('is-active')) {
			m.removeClass('is-active')
			mt.removeClass('is-active')
		}

		e.preventDefault()
	})

	// $('#searchform #s').attr('autocomplete', 'off')

}

export default search
