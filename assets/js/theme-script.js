$(document).ready(function () {
    if ($('.slideBooking').length) {
        $('.slideBooking').slick({
            centerMode: true,
            centerPadding: '15px',
            slidesToShow: 1, arrows: false,
        });
    }


    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
        // Anh thay selector nha
        $('.profile-form input').css('font-size', '16px');
    }
});