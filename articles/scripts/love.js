/*global $ */ 


$(document).ready(function() {
    
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        
        var lines = $('.line');
    
        /* Check the location of each desired element */
        lines.each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() + 250;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            
            /* If the object is completely visible in the window, show it and ad black class */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500).addClass('black');
                $(this).siblings().removeClass('black');
                
            }
            
            
        
        }); 
    
    });
    
});

//$('.line[class="black"]').append(<span>wow</span>);



(function blink() { 
  $('.blink').fadeOut(500).fadeIn(500, blink); 
})();



