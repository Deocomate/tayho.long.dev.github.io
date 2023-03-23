$(document).ready(function () {
    $('.su-kien-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 1000
    });
    $('.su-kien-slider-chi-tiet').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow: "<button type='button' class='slick-prev'><img src='/assets/lou_icon/prev-btn.svg'/></button>",
        nextArrow: "<button type='button' class='slick-next'><img src='/assets/lou_icon/next-btn.svg'/></button>",
    });
});