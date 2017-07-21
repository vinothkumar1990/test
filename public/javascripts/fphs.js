
$(function(){
$(".search-block a").on('click',function(){
if ( $('.search-content').hasClass("search-active") != true){
	$(".search-content").addClass("search-active");
	$(".search-block").addClass("search-img");
	$(".top-advert-block").hide();
	$(".wrapper").removeClass('width-increase');
	$(".cont-submenu").hide();	
	}
	else{
	$('.search-content').removeClass("search-active");
	$(".search-block").removeClass("search-img");
	$(".top-advert-block").show();
	}
	
	});
});


$(document).ready(function(){
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

/*label js*/
$( ".search-input" ).keyup(function() {
if($(".search-input").val() != ""){
$(".text-position").css("opacity","0");		
}
else{
$(".text-position").css("opacity","0.5");	
}
});

/*menu js*/	
        $(function(){
		$(".hamberg-menu,.cont-menu-list").on('click',function(){
			$(".search-content").removeClass("search-active");
			$(".search-block").removeClass("search-img");
		if($(".wrapper").hasClass('width-increase') != true){
			$(".wrapper").addClass('width-increase');
			$(".cont-submenu").show();
		}else{
			$(".wrapper").removeClass('width-increase');
			$(".cont-submenu,.cont-news-sub").hide();
			$(".top-advert-block").show();
		}
	});
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
     $(".wrapper").removeClass('width-increase'); 
     $(".cont-submenu").hide();
    }
 });
 
 

/*auto focus*/
$(function(){
	$(".search-block a").click(function(){
    $('#search-in').focus();
   });
});

/*tabs*/
 /* $(function() {
    $( ".tab_block" ).tabs();
  });*/
  
  /*datepicker*/
 
 $(function() {
    $('#datetimepicker1').datetimepicker();
  });

$(function() {
  $('#datetimepicker2').datetimepicker();
  });


