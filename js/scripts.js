$(document).ready(function() {
    $('a[rel="left-menu"]').sidr({
      name: 'sidr-left',
      side: 'left' // By default
	  
    });
	$('.filter-head ul li').mouseenter(function(){
        $(this).find('.sub').show(200);
    }); $('.filter-head ul li').mouseleave(function() {
        $(this).find('.sub').hide(500);
    });
	/*
    // Create the dropdown base
    $("<select class='visible-xs' />").appendTo("#select-r");

    // Create default option "Go to..."
    $("<option />", {
        "selected": "selected",
        "value"   : "",
        "text"    : "Μενώ..."
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
         $("." + el).fadeIn( "slow", function() {
    // Animation complete
  });   
        
});

	///////
});