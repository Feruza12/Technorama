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

	// var switchStatus = false;
	// $(".wrap").on('change', function () {
	// 	if ($(this).is(':checked')) {
	// 		switchStatus = $(this).is(':checked');
	// 		// alert(switchStatus);// To verify
	// 	}
	// 	else {
	// 		switchStatus = $(this).is(':checked');
	// 		// alert(switchStatus);// To verify
	// 	}
	// });

	// if(switchStatus){
	// 	document.documentElement.classList.add('theme--dark')
	// }
	// else{
	// 	document.documentElement.classList.add('theme--default')
	// }
	
});
