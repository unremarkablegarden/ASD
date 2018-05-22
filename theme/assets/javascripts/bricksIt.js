import Bricks from 'bricks.js'

const bricksIt = () => {
	if ( $('.bricks').length ) {
		console.log('bricks.js');
		const gutter = 24
		const bricks = Bricks({
		  container: '.bricks',
			packed: 'data-packed',
			sizes: [
				{ columns: 1, gutter: gutter }, // 24px = 1.5rem
				// the minimum viewport width
				{ mq: '767px', columns: 2, gutter: gutter },
				{ mq: '1023px', columns: 3, gutter: gutter }
			],
			// position: true // top left or transform (=false)
		})

		bricks
		  .on('pack',   () => console.log('ALL grid items packed.'))
		  .on('update', () => console.log('NEW grid items packed.'))
		  .on('resize', size => console.log('The grid has be re-packed to accommodate a new BREAKPOINT.'))

		document.addEventListener('DOMContentLoaded', event => {
		  bricks
		    .resize(true)     // bind resize handler
		    .pack()           // pack initial items
		})
	}
}

export default bricksIt
