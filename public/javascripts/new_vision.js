/*scroll button js*/
 	     	$("[href=#top]").click(function(){$('html, body').animate({ scrollTop:0}, 'slow');return false;});
  	     	$(window).scroll(function(){
				if($(this).scrollTop()>200)
				{
				 $('.back-to-top').fadeIn();
				}
				else
				{
				$('.back-to-top').fadeOut();
				}
			});

/*tab js*/
$("#tab_block").tabs();

/*ticker js*/
 $(function() { 
  	$('#js-news1').ticker({
        titleText: '<span>Breaking News : </span>',
        speed: 1,            
        displayType: 'reveal',
        htmlFeed: true,
        controls: true,
    	direction: 'ltr',    
        pauseOnItems: 3000,
        fadeInSpeed: 600,
        fadeOutSpeed: 300
	});	});
	$(function() {
	$('#js-news').ticker({
        titleText: '<span>Latest News : </span>',
        speed: 0.1,            
        displayType: 'reveal',
        htmlFeed: true,
        controls: true,
    	direction: 'ltr',    
        pauseOnItems: 3000,
        fadeInSpeed: 600,
        fadeOutSpeed: 300
	});});
	
/*menu js*/	
		$(".menu-log,.cont-menu-list").click(function(){
		if($("#wrapper").hasClass('width-increase') != true){
			$("#wrapper").addClass('width-increase');
			$(".cont-submenu").show();
		}else{
			$("#wrapper").removeClass('width-increase');
			$(".cont-submenu,.cont-news-sub").hide();
		}
	});

	$(".list-cont>li").hover(function(){
		var content_value = $(this).children("a").next();
		if( content_value[0] != undefined ){
	    	$(".cont-news-sub").hide();
			$(this).children("a").next().show();
		}else{
			$(".cont-news-sub").hide();
			
		}
	});

 $(window).on("resize orientation load", function() {
   var windowwidth=$(window).width();
    if(windowwidth >= 490){
     $("#wrapper").removeClass('width-increase'); 
     $(".cont-submenu").hide();
    }
 });
 
/*menu fixed js*/
$(function(){
  var $fixBar = $('#menu_hold'), $header = $("#menu_holder");
  $(window).on('scroll', _on_page_scroll);
        function _on_page_scroll() {
   var _margin_top=0,_current_pos="";
            var page_scroll = parseInt($(document).scrollTop()),
                fixed_range_top = $header.offset().top - _margin_top;
            if ((page_scroll < fixed_range_top && _current_pos != "relative")) {                
                $fixBar.removeClass('detached');
                _current_pos = "relative";
            } else {
                if (page_scroll > fixed_range_top && _current_pos != "fixed") {
                    $fixBar.addClass('detached');
                    _current_pos = "fixed";
       }
            }
        }
});

/*menu hover intend js*/
$(function(){
    $(".menu_container ul").hoverIntent(makeTall_mainmenu,makeShort_mainmenu,'li');

});
	var makeTall_mainmenu = function(){
		$(this).find('div.submenu').animate({"height":"auto"},200);
		$(this).find('div.submenu').css('display','block');
	};
	var makeShort_mainmenu = function(){
	  	$(this).find('div.submenu').animate({"height":"auto"},200);
		$(this).find('div.submenu').css('display','none');
	};
	
/*equal height block js*/
equalheight = function(container){
var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto');
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
};

$(window).load(function(){
 equalheight('.col-3 .list_content,.tab_common_class .list_content');
});
$(window).on("resize",function(){
	 equalheight('.col-3 .list_content,.tab_common_class .list_content');
});

/*grid and list view js*/
$(function(){
	$(".latest_view a").click(function(e){
		e.preventDefault();
$(this).siblings().removeClass("active");
$(this).toggleClass("active");
if($(this).hasClass("grid active")){
	$(".ln-cont").removeClass("grid-cont");
	$(".ln-cont").addClass("list-cont");
}
	else if($(this).hasClass("list active"))
	{
			$(".ln-cont").removeClass("list-cont");
	$(".ln-cont").addClass("grid-cont");
	}
	else{
		$(".ln-cont").removeClass("list-cont grid-cont");
		
}

});
});

/*hide js*/
$(function(){
	$(".breaking_close").click(function(e){
		e.preventDefault();
		$(".col-latest1").hide();
});});


$(".list-cont li ul li").hover(function(){
		var content_value = $(this).children("a").next();
		if( content_value[0] != undefined ){
	    	$(".cont-news-one").hide();
			$(this).children("a").next().show();
		}else{
			$(".cont-news-one").hide();
			
		}
	});