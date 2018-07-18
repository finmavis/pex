function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);
    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}
onReady(function () {
    show('navbar', true);
    show('main-features', true);
    show('features', true);
    show('bang-boo', true);
    show('about', true);
    show('experience', true);
    show('feature-author', true);
    show('about-2', true);
    show('contact', true);
    show('footer', true);
    show('loading-wrapper', false);
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('trans');
        $('hr').addClass('trans');
    } 
    else {
        $('nav').removeClass('trans');
        $('hr').removeClass('trans');
    }
});