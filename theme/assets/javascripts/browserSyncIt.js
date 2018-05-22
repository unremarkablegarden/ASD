const browserSyncIt = () => {
	const bsWrite = () => {
		bs.addClass('is-success')
		let bsScript = 'http://138.197.181.254:3000/browser-sync/browser-sync-client.js?v=2.23.6/'
		$.getScript(bsScript)
	}
	const bs = $('.browsersync')
	bs.show()
	let bsActive = localStorage.getItem('bsActive')
	if (bsActive == 'true') { bsWrite() }
	else { bsActive = false }
	bs.on('click', (e) => {
		if (!bsActive) {
			localStorage.setItem('bsActive', true)
			bsActive = true
			bsWrite()
		} else {
			bs.removeClass('is-success')
			localStorage.setItem('bsActive', false)
			bsActive = false
		}
		e.preventDefault()
	})
}

export default browserSyncIt
