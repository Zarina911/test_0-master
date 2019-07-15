
$(document).ready(function () {
    $(".owl-carousel.brands").owlCarousel({
        loop: true,
        items: 6,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            850: {
                items: 5
            },
            1000: {
                items: 6
            }
        }
    });
});

$(document).ready(function () {
    $(".owl-carousel.photo_carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        items: 1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        stagePadding:30,
        smartSpeed:450,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            600: {
                items: 1
            },
            850: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});
