$('.signIn').animate({opacity: 0, marginTop: -50});
$('.login').animate({opacity: 1, marginTop: 50});

$(document).ready(function () {
   $('.login__link_register').click(() => {
   		$('.login').animate({opacity: 0, marginTop: -50});
		$('.signIn').animate({opacity: 1, marginTop: 50});
   })

   $('.signIn__link_login').click(() => {
   		$('.login').animate({opacity: 1, marginTop: 50});
		$('.signIn').animate({opacity: 0, marginTop: -50});
   })
});