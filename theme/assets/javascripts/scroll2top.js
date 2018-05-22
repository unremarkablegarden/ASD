import jump from 'jump.js';

const scroll2top = () => {

	const visibleThreshold = $(window).height() / 2;

	if (!$('.scrollToTop').hasClass('hidden')) {
		$('.scrollToTop').addClass('hidden');
	}

	$(window).off().on('scroll', function() {

		let top = $(window).scrollTop();

		if (top < visibleThreshold && !$('.scrollToTop').hasClass('hidden')) {
			$('.scrollToTop').addClass('hidden');
		}
		else if (top > visibleThreshold && $('.scrollToTop').hasClass('hidden')) {
			$('.scrollToTop').removeClass('hidden');
		}
	});

	$('.scrollToTop').off().on('click', function() {
		jump('body')
	});
};

export default scroll2top;
