$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
	});
	$('.block__title').click(function(event) {
	$(this).toggleClass('active').next().slideToggle(800);
	});
});




