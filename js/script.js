$(document).ready(function () {
	hyperform(window);

});


$(document).ready(function () {

	var headerHeight = $("header").innerHeight();
	$(".main-section").css({ "padding-top": headerHeight });

	
	$(".round-trip-hide").hide();
	$("#radio-b-option").click(function(){
		$(".round-trip-hide").show(500);
	});
	$("#radio-a-option").click(function(){
		$(".round-trip-hide").hide(500);
	});
	
	$('.testimonial-slider').slick({
		autoplay: false,
		autoplaySpeed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
	});

	const burgerMenu = document.getElementById("burger");
	const navbarMenu = document.getElementById("menu");


	// Show and Hide Navbar Menu
	burgerMenu.addEventListener("click", () => {
		burgerMenu.classList.toggle("is-active");
		navbarMenu.classList.toggle("is-active");

		if (navbarMenu.classList.contains("is-active")) {
			navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
		} else {
			navbarMenu.removeAttribute("style");
		}
	});
});
