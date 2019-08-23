$(function () {

	$(document).ready(function () {
		$('#dismiss, .overlay').on('click', function () {
			$('#sidebar').removeClass('active');
			$('.overlay').removeClass('active');
		});

		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').addClass('active');
			$('.overlay').addClass('active');
			$('.collapse.in').toggleClass('in');
			$('a[aria-expanded=true]').attr('aria-expanded', 'false');
		});
	});

	$('.switch').click(function(e){
		console.log("clicked");
		console.log("dgd");

		$('body').toggleClass('night');
		e.preventDefault();
		$(".img_logo").attr('src',"img/LogoWhite.svg");
		// return false;
	})

	
});
