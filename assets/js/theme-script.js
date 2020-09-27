$(document).ready(function () {
    if ($('.slideBooking').length) {
        $('.slideBooking').slick({
            centerMode: true,
            centerPadding: '15px',
            slidesToShow: 1, arrows: false,
        });
    }

    // $('.profile-form input').focus(function () {
    //     if($(this))
    //     $(this).css('font-size', '16px');
    // })

    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
        $('.profile-form input').css('font-size', '16px');
    }
});