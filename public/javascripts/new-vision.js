$(function(){
	$(".cont-main-header-log,.cont-menu-list").click(function(){
		if($("#wrapper").hasClass('width-increase') != true){
			$("#wrapper").addClass('width-increase');
			$(".cont-submenu").css("display","block");
		}else{
		    $("#wrapper").removeClass('width-increase');
			$(".cont-submenu").hide().css("display","none");
			$("#wrapper").removeClass('width-increase1');
			$(".cont-news-sub").hide().css("display","none");
		}
	});
});

$(function(){
	$(".list-cont>li").hover(function(){
		var content_value = $(this).children("a").next();
		if( content_value[0] != undefined ){
			$("#wrapper").addClass('width-increase1');
			$(".cont-news-sub").hide().css("display","none");
			$(this).children("a").next().css("display","block");
		}else{
			$("#wrapper").removeClass('width-increase1');
			$(".cont-news-sub").hide().css("display","none");
		}
	});
});

$(function(){
 $(window).on("resize orientation load", function() {
   var windowwidth=$(window).width();
    if(windowwidth >= 490){
     $("#wrapper").removeClass('width-increase'); 
     $(".cont-submenu").hide().css("display","none");
    }
 });
});

$(document).ready(function(){
    $("#menu_holder ul").hoverIntent(makeTall_mainmenu,makeShort_mainmenu,'li');

});
	var makeTall_mainmenu = function(){
		$(this).find('div.submenu').animate({"height":"auto"},200);
		$(this).find('div.submenu').css('display','block');
	};
	var makeShort_mainmenu = function(){
	  	$(this).find('div.submenu').animate({"height":"auto"},200);
		$(this).find('div.submenu').css('display','none');
	};

$(function(){
	$('#datetimepicker').datetimepicker({
	inline:true,
	format:'d.m.Y',
    timepicker: false
    });
});

/*video list hover*/
$(function(){
$(".hover_image").mouseover(function(){
var div_id=$(this).attr("id");
$(".current_video").hide();
$("#"+div_id+"1").show();
});
});
//js for article image resize
$(window).resize(function(){
  var a=$(".article-image").width();
  $(".tinyimg_caption").width(a);
});