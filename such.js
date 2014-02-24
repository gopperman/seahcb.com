jQuery('document').ready(function($) {
	$('.dogetoggle').delay(3000).animate({right:"-40px"}, 1000);
	$('.dogetoggle, .boringtoggle').click(function() {
		$('body').toggleClass('boring doge');
		if ($('body').hasClass('doge')) {
			$('.doge header').hover(
				function() {
					$('header .wow').each(function(index) {
						$(this).delay(600*index).fadeIn(200);
					});
				},
				function() {
					$('header .wow').each(function(index) {
						$(this).delay(100*index).fadeOut(100);
					});
				}
			);
		} else {
			$('.boring header').unbind('mouseenter mouseleave');
		}
	});
});
