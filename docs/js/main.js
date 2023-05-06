$(function () {

    //    header slider--------------------------
    $('.header__slide').slick({
        arrows: true,
        dots: false,
        speed: 800,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    })

    // mobile__popular-slider-----------------------
    $('.mobpopular__slider-box').slick({
        arrows: false,
        dots: true,
        speed: 800,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    })
    // range---------------------------

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 150000,
        from: 0,
        to: 150000,
        prettify: function (value) {
            return value + " ₽";
        },
    });
    // accordeon-------------------------------

    $('.questions__accordeon-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('questions__accordeon-link--active')) {
            $(this).removeClass('questions__accordeon-link--active')
            $(this).children('.questions__accordeon-text').slideUp(700)
        } else {
            $('.questions__accordeon-link').removeClass('questions__accordeon-link--active')
            $('.questions__accordeon-text').slideUp(700)
            $(this).addClass('questions__accordeon-link--active')
            $(this).children('.questions__accordeon-text').slideDown(200)
        }
    })
    // --------------------smooth-scrol----------------
    $(".header__links-faq, .footer__col-logo, .header__links-work, .footer__col-link, .menu__mobile__links-faq, .menu__mobile__links-work, .footer__mobile-logo").on("click", function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 1000)
    })
    // -------------------burger-------------------
    $('.header__burger, .header__burger1, .overlay, .menu__mobile-close').on('click', function (e) {
        e.preventDefault()
        if ($('.menu__mobile').hasClass('menu__mobile--active')) {
            $('.menu__mobile').removeClass('menu__mobile--active')
            $('.overlay').removeClass('overlay--show')
            $('body').removeClass('lock')


        } else {
            $('.menu__mobile').addClass('menu__mobile--active')
            $('.overlay').addClass('overlay--show')
            $('body').addClass('lock')

        }
    })
    // ------------------fancybox--------------------------
    $('[data-fancybox]').fancybox({
        touch: false
    });
    $('.modal__search-close, .modal__coop-close, .modal__choose-close').on("click", function () {
        $.fancybox.close();
    });


    // -----------------scrol menu---------------------
    $(window).scroll(function () {
        const header = $('.header__top');
        const scrollPosition = $(window).scrollTop();

        if (scrollPosition > 250) {
            header.addClass('header__scroll');
        } else {
            header.removeClass('header__scroll');
        }
    });
    // -------------close mobile menu-------------------
    $('.menu__mobile-btn, .menu__mobile__form-btn, .menu__mobile__links-work, .menu__mobile__links-faq, .menu__mobile-phone').on('click', function () {
        if ($('.menu__mobile').hasClass('menu__mobile--active')) {
            $('.menu__mobile').removeClass('menu__mobile--active');
            $('.overlay').removeClass('overlay--show');
            $('body').removeClass('lock')
        }
    });

    // $('."mobile__nav-link').on('click', function () {
    //     $('.mobile__nav-link').removeClass('mobile__nav-link--active')
    //     $(this).addClass('mobile__nav-link--active')
    // })


})
// calend---------------------------

$(function () {
    var dateFormat = "mm/dd/yy",
        from = $("#from")
            .datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1
            })
            .on("change", function () {
                to.datepicker("option", "minDate", getDate(this));
            }),
        to = $("#to").datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1
        })
            .on("change", function () {
                from.datepicker("option", "maxDate", getDate(this));
            });
    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }
        return date;
    }
});


// $('.menu__mobile-close').on('click', function (e) {
//     e.preventDefault();
//     $('.menu__mobile').removeClass('menu__mobile--active')
//     $('.overlay').removeClass('overlay--show')

// })
// $('.menu__mobile').on('touchmove', function (e) {
//     e.preventDefault();
// });

