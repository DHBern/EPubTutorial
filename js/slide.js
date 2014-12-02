var number_of_slides = $('.slide article').length;

$( document ).ready(function() {
	var current_slide = 1;
	slide(current_slide);
	$('#previous').click(function(){
		if(current_slide > 1){
			current_slide--;
			slide(current_slide);
		}
	});

	$('#next').click(function(){
		if(current_slide < number_of_slides){
			current_slide++;
			slide(current_slide);
		}
	});

	$('#restart').click(function(){
		current_slide = 1;
		slide(current_slide);
	});
});

function slide(current_slide){
	var oldslide = $('.slide article:not(.hidden)')	
	var newslide = $('.slide article:nth-child(' + current_slide + ')');
	oldslide.hide()
	newslide.fadeIn()
	
	// Correct our buttons
    current_slide == 1 ? $('#previous').addClass('hidden') : $('#previous').removeClass('hidden')
    current_slide == 1 ? $('#restart').addClass('hidden') : $('#restart').removeClass('hidden')
    current_slide == number_of_slides ? $('#next').addClass('hidden') : $('#next').removeClass('hidden')
}