/*global $ */



$(document).ready(function() {
    
  
  $('.hamburger').click( function(event){
        event.stopPropagation();
        $('.drop-menu').toggle();
    });

    $(document).click( function(){
        $('.drop-menu').hide();
    });
    
    showLinks();
    
});

function showLinks() {
    
      $('.thumbs').each(function(i){
        setTimeout(function() {
          $('.thumbs').eq(i).addClass('visible');
        }, 200 * i);
      });
    }