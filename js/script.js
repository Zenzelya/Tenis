// Уменьшение высоты меню
var animatedHeader = (function() {

    var docElem = document.documentElement,
        header = document.querySelector( '.header__down' ),
        rootHeader = document.querySelector('header'),
        didScroll = false,
        changeHeaderOn = 100;

    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }

    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            header.classList.add( 'hd__animated' );
            rootHeader.classList.add('h_an')
        }
        else {
            header.classList.remove('hd__animated' );
            rootHeader.classList.remove('h_an')
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();


// Первый экран
(function (e, t, o) {
    "use strict";
    var n = document.querySelectorAll(".home-slider .home-slider__item"),
        r = document.querySelectorAll(".home-slider__control-item"),
        s = document.querySelectorAll(".home-slider__top"),
        i = document.querySelectorAll(".home-slider__line"),
        l = document.querySelectorAll(".home-slider__title"),
        c = 0,
        u = setInterval(function () {
            return d()
        }, 8e3),

        a = function (e) {
            n[e].classList.toggle("home-slider__item--showing"),
                setTimeout(function () {
                    s[e].classList.toggle("home-slider__top--showing"),
                        i[e].classList.toggle("home-slider__line--showing"),
                        l[e].classList.toggle("home-slider__title--showing")
                }, 300),
                r[e].classList.toggle("home-slider__control-item--showing")
        },

        d = function () {
            a(c), c = (c + 1) % n.length, a(c)
        };

    document.querySelector(".home-slider__control").addEventListener("click", function (e) {
        var t = e.target;
        if (t.classList.contains("home-slider__control-item")) {
            clearInterval(u), a(c);
            var o = t.getAttribute("data-currentSlide");
            a(o), c = o % n.length,
                u = setInterval(function () {
                    return d()
                }, 8e3)
        }
    })
})();