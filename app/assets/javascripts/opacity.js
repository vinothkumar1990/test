$(document).ready(function(){


	$('a #opa').animate({
        opacity:.5
	});
	$('a #opa').hover(function(){

$(this).stop().animate({opacity:1});

	},function(){

$(this).stop().animate({opacity:.5});		
	});
});