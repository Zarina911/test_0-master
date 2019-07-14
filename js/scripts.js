
$(document).ready(function () {
    $(".owl-carousel.brands").owlCarousel({
        loop: true,
        items: 6
    });
});


$(document).ready(function () {

    $('.owl-carousel.brands').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});

$(document).ready(function () {
    $(".owl-carousel.photo_carousel").owlCarousel({
        loop: true,
        margin: 30,
        items: 1
    });
});

$(document).ready(function () {

    $('.owl-carousel.photo_carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});



