$(document).ready(function () {

	var headerHeight = $('header').outerHeight();
	
	$('.offset').css('height',headerHeight);

	$('header li').click(function (e) {
		var targ = '.' + e.target.id;

		$('body').animate({
			scrollTop: $(targ).last().offset().top - headerHeight
		},1500);
	});

	$('#contact-button').click(function(e){
		e.preventDefault();
		$('body').animate({
			scrollTop: $('.contact').offset().top - headerHeight
		},1500)
	})

	setTimeout(function () {
		$('h1').addClass('text-animation');
		$('.background').addClass('background-animation');
		$('.background').removeClass('initial-background');
	},1000)

})

