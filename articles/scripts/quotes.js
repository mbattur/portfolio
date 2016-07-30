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
        
        $('.button').hover(
            function() {
            $(this).css('height', '50px');
            }, function() {
                $(this).css('height', '35px');
            }
        );
        
        
});


var buttonHover = function() {
    
    var button = document.getElementsByClassName('button').addEventListener("mouseenter", mouseenter);
    
    function mouseenter() {
        document.getElementsByClassName('button').style.color = "red";
    }
    
}