$(document).ready(function () {
	// This enables tooltips on our page, says the Bootstrap documentation
	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});
	
	// This is going to make our slideshow work.
	var numberOfSlides = $(".slide article").length; // .size()
	var currentSlide = 1;
	$("#next-button").click( function () {
		var newSlide = currentSlide + 1;
		$(".slide article:nth-child(" + currentSlide + ")").addClass("hidden");
		$(".slide article:nth-child(" + newSlide + ")").removeClass("hidden");
		$("#previous-button").removeClass("hidden");
		$("#restart-button").removeClass("hidden");
		if (newSlide == numberOfSlides ) {
		 	$("#next-button").addClass("hidden");
			$("#restart-button").removeClass("btn-default").addClass("btn-primary");
		}
		currentSlide = newSlide;
	});
	$("#previous-button").click( function () {
		var newSlide = currentSlide - 1;
		$(".slide article:nth-child(" + currentSlide + ")").addClass("hidden");
		$(".slide article:nth-child(" + newSlide + ")").removeClass("hidden");
		if (newSlide == 1) {
			$("#previous-button").addClass("hidden");
			$("#restart-button").addClass("hidden");
		}
		$("#next-button").removeClass("hidden");
		$("#restart-button").removeClass("btn-primary").addClass("btn-default");
		currentSlide = newSlide;
	});
	$("#restart-button").click( function () {
		var newSlide = 1;
		$(".slide article:nth-child(" + currentSlide + ")").addClass("hidden");
		$(".slide article:nth-child(" + newSlide + ")").removeClass("hidden");
		$("#previous-button").addClass("hidden");
		$("#restart-button").addClass("hidden");
		$("#next-button").removeClass("hidden");
		$("#restart-button").removeClass("btn-primary").addClass("btn-default");
		currentSlide = newSlide;
	});
	
});