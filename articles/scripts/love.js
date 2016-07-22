/*global $ */ 
var lines = $('.line');

$(document).ready(function() {
    
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        
        //var lines = $('.line');
        /* Check the location of each desired element */
        lines.each( function(i){
            
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() + 280;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            
            /* If the object is completely visible in the window, show it and ad black class */
            if( bottom_of_window > bottom_of_object ){
                
                
                $(this).animate({'opacity':'1'},500).addClass('black');
                $(this).siblings().removeClass('black');
                
            }
        }); 
    
    });
    // FOOTER JS
    $(".back-to-article").hide();
        
        $(".ps").mouseenter(function() {
            $(".back-to-article").slideDown(400);
            $(".ps").hide();
        });
        
        
        $(".back-to-article").mouseleave(function() {
            $(".back-to-article").hide();
            $(".ps").slideDown();
        });
    
});

//$('.line[class="black"]').append(<span>wow</span>);


(function blink() { 
  $('.blink').fadeOut(500).fadeIn(500, blink); 
})();
/*
lines.append('<span>blink</span>');
lines.siblings().remove('<span>wow</span>');

*/
