jQuery('document').ready(function($) {
	$('h1').hover(
		function() {
			console.log('in');
		},
		function() {
			console.log('out');
		}
	);
	$('.dogetoggle').delay(3000).animate({right:"-40px"}, 1000);
	$('.dogetoggle').click(function() {
		$('body').removeClass('boring');
		$('body').addClass('doge');
	});
	$('.boringtoggle').click(function() {
		$('body').removeClass('doge');
		$('body').addClass('boring');
	});
});
