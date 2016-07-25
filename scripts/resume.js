/*global $ */
$(document).ready(function() {
    
    var $table = $('.table');
    
    $('.next').click(function() {
        for(var i = 0; i < $table.length; i++) {
            $table.toggle();
        }
    });
    
    
    
})