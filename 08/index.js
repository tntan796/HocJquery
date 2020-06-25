$(function() {
	$('.ndmotkhoi').slideUp();

	$('.motkhoi h3').click(function(event) {
		// Cho tất cả nội dung một khối
		// $('.ndmotkhoi').slideUp();
		$(this).next().slideToggle();
		$(this).toggleClass('xanh');
	})
})