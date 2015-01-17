$(document).ready(function () {

	$('header li').click(function (e) {
		var targ = '.' + e.target.id;

		$('body').animate({
			scrollTop: $(targ).last().offset().top
		},1500);
	});

	$('#contact-button').click(function(e){
		e.preventDefault();
		$('body').animate({
			scrollTop: $('.contact').offset().top
		},1500)
	})

	setTimeout(function () {
		console.log($('h1'));
		$('h1').addClass('text-animation');
		$('.background').addClass('background-animation');
		$('.background').removeClass('initial-background');
	},1000)

})

