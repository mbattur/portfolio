/*global $ */
$(document).ready(function() {
    /*$('.menu').click( function() {
        $('.drop-down-menu').toggle().addClass('show');
    });*/
    
    
     $('.menu').click( function(event){
        event.stopPropagation();
        $('.drop-down-menu').toggle();
    });

    $(document).click( function(){
        $('.drop-down-menu').hide();
    });
    
    
   $('.next').click( function() {
       var currentTable = $('.active-table');
       var nextTable = currentTable.next();
       
       if(nextTable.length === 0) {
           nextTable = $('.table').first();
       }
       
       currentTable.fadeOut(500).removeClass('active-table');
       nextTable.fadeIn(600).addClass('active-table');
   });
});



/*function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');
}

window.onclick = function(event) {
  if (!event.target.matches('.menu')) {

    var dropdowns = document.getElementsByClassName("drop-down-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};*/
    
    
    