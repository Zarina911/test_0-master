
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


// $(document).ready(function () {

    // $('.owl-carousel.brands').owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     nav: true,
    //     responsive: {
    //         0: {
    //             items: 2
    //         },
    //         600: {
    //             items: 3
    //         },
    //         850: {
    //             items: 6
    //         }
    //     }
    // });

//     $('.owl-carousel.photo_carousel').owlCarousel({
//         loop: true,
//         margin: 0,
//         nav: false,
//         dots: false,
//         items: 1,
//         animateOut: 'fadeOut',
//         animateIn: 'fadeIn',
//         stagePadding:30,
//         smartSpeed:450,
//         autoplay: true,
//         autoplayTimeout: 3000
//     });
// });
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
// $(window).load(function() {
//     var images = $('img');
//     images.each(function(i) {
//         $(this).width($(this).width() / 2);
//     });
// });