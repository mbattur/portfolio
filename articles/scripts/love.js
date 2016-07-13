var linesArray = document.getElementsByClassName('line');

var animateLines = function(lines) {
    
    
    var revealLine = function(index) {
        lines[index].style.opacity = 1;
    }
    
    for (var i = 0; i < lines.length; i++) {
        revealLine(i);
    }
};

window.onload = function() {
    
    var scrollHead = document.getElementsByClassName('head')[0];
    var scrollDistance = scrollHead.getBoundingClientRect().top - window.innerHeight + 200;
    
    window.addEventListener('scroll', function(event) {

    if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
        animateLines(linesArray);
    }
    });
}