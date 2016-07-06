jQuery(document).ready(function() {
    jQuery('#pull').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.nav').toggleClass('active');
 
        e.preventDefault();
    });
});