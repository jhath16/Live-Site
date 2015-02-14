$(document).ready(function () {
	
	$('.offset').css('height', $('header').outerHeight() );

	if( $(window).width() <= 575) {
		$('.offset').css('height',0);
	}

	$(window).resize(function () {
		$('.offset').css('height',$('header').outerHeight());

		if ($(window).width() >= 1000) {
			$('header').hide().show(0);
		}
	})

	$('header li').click(function (e) {
		var targ = '.' + e.target.id;

		var headerHeight = $('header').outerHeight();

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

