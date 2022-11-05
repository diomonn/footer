(function() {

    document.addEventListener('mousemove', function(e) {

        var x = e.pageX;
        var y = e.pageY;
        var pic = document.querySelector('.imgsrc');
        pic.style.left = x - 30 + 'px';
        pic.style.top = y + 'px';
    })
})()