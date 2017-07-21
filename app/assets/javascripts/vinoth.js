$(document).ready(function(){
$('.photo').hover(function(){
$(this)
.find('.caption')
.stop()
.animate({ top:'0px'},{ duration: 1600, easing: 'easeOutBounce'});

}, function(){

$(this)
.find('.caption')
.stop()
.animate({ top:'-270px'},{ duration: 1600, easing: 'easeOutBack'});
});

});
