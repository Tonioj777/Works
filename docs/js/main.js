// --------------range slider---------------------
var slider = document.getElementById("slider");
var minval = slider.min = 10;
var maxval = slider.max = 300;
var selector = document.getElementById("selector");
var selectvalue = document.getElementById("selectvalue");
var progressbar = document.getElementById("progressbar");

selectvalue.innerHTML = slider.value;

slider.oninput = function () {
    selectvalue.innerHTML = this.value;
    var percent = (this.value - minval) / (maxval - minval) * 100
    selector.style.left = percent + "%";
    progressbar.style.width = percent + "%";
}

// -------------------------------input phone---------------------------
var input = document.querySelector("#phone");
window.intlTelInput(input, ({
    onlyCountries: ["ru", "by", "ua", "kz"],
    separateDialCode: true,
    initialCountry: "RU",
    placeholderNumberType: "MOBILE",
    utilsScript: "/js/utils.js",

}));

// ----------------------------slick slider---------------
$(function () {
    $('.testimonials__slider').slick({
        arrows: true,
        dots: false,
        speed: 800,
        infinite: false,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    waitForAnimate: false,
                    arrows: false,
                    dots: true,
                }
            }]
    })

    // -----------------------------accordeon------------------------------
    $('.questions__accordeon-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('questions__accordeon-link--active')) {
            $(this).removeClass('questions__accordeon-link--active')
            $(this).children('.questions__accordeon-text').slideUp(500)
        } else {
            $('.questions__accordeon-link').removeClass('questions__accordeon-link--active')
            $('.questions__accordeon-text').slideUp(500)
            $(this).addClass('questions__accordeon-link--active')
            $(this).children('.questions__accordeon-text').slideDown(500)
        }
    })

    $('.testimonials__slide-link').fancybox({
        width: 740,
        height: 360,
    });


    $(".header__btn, .footer__logo, .header__call, .credits__btn").on("click", function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 1000)
    })

    $('.header__burger, .overlay').on('click', function (e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')
        $('.header__burger').toggleClass('open')


    })
    $('.header__call, .header__logo, .header__nav-item a').on('click', function () {
        if ($('.header__top').hasClass('header__top--open')) {
            $('.header__top').removeClass('header__top--open');
            $('.overlay').removeClass('overlay--show');
            $('.header__burger').removeClass('open');
        }
    });

})


var map;
ymaps.ready(init);
function init() {
    map = new ymaps.Map('map', {
        center: [57.153359668883446, 65.53351171324144],
        zoom: 15,
    })
    map.controls.remove('trafficControl')
    map.controls.remove('geolocationControl')
    map.controls.remove('rulerControl')
    map.behaviors.disable('scrollZoom')
    map.controls.remove('searchControl')
    map.geoObjects.add(new ymaps.Placemark([57.153359, 65.533511]))

}

// price calc-----------------

const areaSelect = document.querySelector('[name="area"]');
const tarifSelect = document.querySelector('[name="tarif"]');
const rangeInput = document.querySelector('#slider');
const finalPrice = document.querySelector('.price__final');

// добавляем обработчик события
areaSelect.addEventListener('change', calculatePrice);
tarifSelect.addEventListener('change', calculatePrice);
rangeInput.addEventListener('input', calculatePrice);

// функция для расчета стоимости
function calculatePrice() {
    const area = areaSelect.value === 'live' ? 0.7 : 1;
    const tarif = tarifSelect.value === 'econom' ? 1500 : tarifSelect.value === 'komfort' ? 3500 : tarifSelect.value === 'luks' ? 8000 :'';
    const square = rangeInput.value;
    const price = area * tarif * square;

    finalPrice.textContent = `Итого: ${price} руб.`;
}

function moveSelector() {
    const x = rangeInput.value;
    const y = -15 - (x - rangeInput.min) / (rangeInput.max - rangeInput.min) * (selector.clientHeight - 30);

}