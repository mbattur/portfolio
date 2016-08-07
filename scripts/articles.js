/*global $ */



$(document).ready(function() {
    
  
  $('.hamburger').click( function(event){
        event.stopPropagation();
        $('.drop-menu').toggle();
    });

    $(document).click( function(){
        $('.drop-menu').hide();
    });
    
  
    setInterval(function(){articleTada();}, 3000);
});

function articleTada(){
    var randNum = Math.floor(Math.random() * $('.bg-thumbs').length) + 1;
    
    $('.bg-thumbs').eq(randNum).addClass('is-emph');
    //$('.bg-thumbs').siblings().removeClass('is-emph');
}