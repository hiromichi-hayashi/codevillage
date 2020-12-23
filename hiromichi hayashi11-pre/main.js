$(function () {
    $('a[href^="#"]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
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