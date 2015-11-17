var currentSlide = 1;
var numberOfSlides = 0;

// A function to retrieve and load the slideshow with a given ID
function loadSlideshow (id) {
	$.get("/slideshow/" + id, function(data) {
		// The data has the slideshow name, font, and content. First put the 
		// content in place.
		$(".slide").empty().append(data.contents);
		// Now set the font.
		$(".slide").css("font-family", data.font);
		numberOfSlides = $(".slide article").length;
		loadSlide(1);
	})
}

function loadSlide (newSlide) {
	$(".slide article").addClass("hidden");
	$(".slide article:nth-child(" + newSlide + ")").removeClass("hidden");
	// Hide the previous and restart buttons if necessary.
	if (newSlide == 1) {
		$("#previous-button").addClass("hidden");
		$("#restart-button").addClass("hidden");
	} else {
		$("#previous-button").removeClass("hidden");
		$("#restart-button").removeClass("hidden");		
	}
	// Hide the next button, and change the look of the restart button,
	// if necessary.
	if (newSlide == numberOfSlides ) {
	 	$("#next-button").addClass("hidden");
		$("#restart-button").removeClass("btn-default").addClass("btn-primary");
	} else {
	 	$("#next-button").removeClass("hidden");
		$("#restart-button").removeClass("btn-primary").addClass("btn-default");		
	}
	currentSlide = newSlide;	
}

$(document).ready(function () {
	// This enables tooltips on our page, says the Bootstrap documentation
	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});
	
	// This is going to make our slideshow work.
	$("#next-button").click( function () {
		var newSlide = currentSlide + 1;
		loadSlide(newSlide);
	});
	$("#previous-button").click( function () {
		var newSlide = currentSlide - 1;
		loadSlide(newSlide);
	});
	$("#restart-button").click( function () {
		loadSlide(1);
	});
	
	// Get the list of slideshows, and populate the dropdown menu with them.
	$.get("/listslideshows", function(data) {
		$("#slidelist").empty();
		$.each(data, function(index, thing) {
			var menuItem = $("<li><a href=\"#\">" + thing.name + "</a></li>");
			menuItem.click( function() {
				loadSlideshow(thing.id);
			});
			$("#slidelist").append(menuItem);
		});
	});
	
});