$('li').click(function(){
	href = $(this).attr('href');
	
	if(typeof href !== typeof undefined && href !== false) window.location = href;
});

$('.image').each(function() {
	var attr = $(this).attr('data-image-src');
	if(typeof attr !== typeof undefined && attr !== false) $(this).css('background', 'url('+attr+') no-repeat');
});

$('form#colorForm').submit(function(e){
	e.preventDefault();
});

$('form#colorForm').on('change', function(e){
	switch($(this).serializeArray()[0].value){
		case '1':
			color = 'белый';
			break;
		case '2':
			color = 'красный';
			break;
		case '3':
			color = 'ораньжевый';
			break;
		default:
			color = 'никакой';
			break;
	}
	
	$('#color__text > p').html('Вам должен подойти ' + color + ' цвет лака');
});