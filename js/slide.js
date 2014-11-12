$( document ).ready(function() {
	direction = 0;
	$('#previous').click(function(){
		if(direction < 0){
			direction++
			slide(direction);
		}
	});

	$('#next').click(function(){
		if(direction > -2){
			direction--
			slide(direction);
		}
	});

	$('#restart').click(function(){
		direction = 0;
		$('#slider').css('left', 0);

		direction == 0 ? $('#previous').addClass('disabled') : $('#previous').removeClass('disabled')
		direction == -2 ? $('#next').addClass('disabled') : $('#next').removeClass('disabled')
	});

});

function slide(direction){
	changed = false;
	$('#slider').animate({
		left: direction*1170
	});

	direction == 0 ? $('#previous').addClass('disabled') : $('#previous').removeClass('disabled')
	direction == -2 ? $('#next').addClass('disabled') : $('#next').removeClass('disabled')
}
