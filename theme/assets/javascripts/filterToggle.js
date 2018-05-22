const filterToggle = () => {
	$('[data-filtertoggle]').on('click', function() {
		let targetName = $(this).data('filtertoggle')

    if (targetName === 'all' || targetName === 'alle') {
			$('[data-filtertoggletarget]').addClass('is-filtered')
			$('.rotate90').removeClass('rotate90')
      $('[data-filtertoggle]').removeClass('is-active')
      $('.all[data-filtertoggle]').addClass('is-active')
		}
    else {
      $('.all').removeClass('is-active')
			let target = $('[data-filtertoggletarget="'+targetName+'"]')
			target.toggleClass('is-filtered');
			$(this).find('.icon').toggleClass('rotate90');
			$(this).toggleClass('is-active')
		}
	})
}

export default filterToggle
