/*global $ */

$(document).ready(function() {

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