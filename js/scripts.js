var totalCount = 5; // кол-во фонов

function ChangeIt() {
var num =  Math.ceil( Math.random() * totalCount );
document.body.background = 'images/bg/'+num+'.jpg';
document.body.style.backgroundRepeat = "no-repeat";
}
$(window).touchwipe({
        wipeLeft: function() {
          // Close
          $.sidr('close', 'sidr-left');
        },
        wipeRight: function() {
          // Open
          $.sidr('open', 'sidr-left');
        },
        preventDefaultEvents: false
      });
$(document).ready(function() {
    /*$('a[rel="left-menu"]').sidr({
      name: 'sidr-left',
      side: 'left' // By default
	  
    });*/
	
	//scroll to id //
	$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
	/////////
	/*$('.filter-head ul li').click(function(){
        $(this).find('.sub').slideToggle(200);
    }); */
   $('.filter-head ul li').click(function(ev) {
    $(this).find('>div > ul').slideToggle();
    ev.stopPropagation();
});
	/*
    // Create the dropdown base
    $("<select class='visible-xs' />").appendTo("#select-r");

    // Create default option "Go to..."
    $("<option />", {
        "selected": "selected",
        "value"   : "",
        "text"    : "Меню..."
    }).appendTo("#select-r select");

    // Populate dropdown with menu items
    $(".filter-head ul li a").each(function() {
    var el = $(this);
    $("<option />", {
        "value"   : el.attr("href"),
        "text"    : el.text()
    }).appendTo("#select-r select");
    });

        // To make dropdown actually work
        // To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
    $("#select-r select").change(function() {
        window.location = $(this).find("option:selected").val();
    });
	///////
	*/
	$('#navi-r a').click(function() {
    var el = $(this).text();
         $("[data-toggle='" + el +"']").fadeIn( "slow", function() {
    // Animation complete$("ul[data-slide='" + current +"']");
  });   
        
});
//$('.pop-over').popover({
	//html : true
//});
$('.pop-over').popover({
                    html: true,
                    trigger: 'manual'
                }).click(function(e) {
                    $(this).popover('show');
                    $('.popover-title').append('<button type="button" class="close" id="topr">&times;</button>');
                    $('.close').click(function(e){
                        $('.pop-over').popover('hide');
                    });
                    e.preventDefault();
                });
$("[data-toggle=tooltip]").tooltip( {'show': true,'placement': 'right',});
 /**********************************************
    *Scroll to top
    **********************************************/
	
    $('.scroll_top_a').click(function() {
            $('body,html').animate({
                scrollTop:0
            },1200);
    });
	///////
});
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        // > 100px from top - show div
		$('#scroll_top, #scroll_top_c').show();
    }
    else {
	$('#scroll_top, #scroll_top_c').hide();
        // <= 100px from top - hide div
    }
});