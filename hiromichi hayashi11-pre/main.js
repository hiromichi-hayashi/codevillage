$(function () {
    $('a[href^="#"]').click(function () {
        let speed = 500;
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
    $('#hammenu').on('click', function () {
        $('.navmenu,#hammenu,.first-view-catch__sp').toggleClass('open')
    })
    $('.navmenu').on('click', function () {
        $('.navmenu,#hammenu,.first-view-catch__sp').toggleClass('open')
    })
    $('.navmenu a[href]').on('click', function () {
        $('#hammenu').trigger('click')
    })

})

let _window = $(window),
    _header = $('header'),
    heroBottom;

_window.on('scroll', function () {
    heroBottom = $('.eyeCatch-copy').height();
    if (_window.scrollTop() > heroBottom) {
        _header.addClass('transform');
    }
    else {
        _header.removeClass('transform');
    }
});

_window.trigger('scroll');