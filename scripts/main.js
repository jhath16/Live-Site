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