document.addEventListener("DOMContentLoaded", function () {

    $('.persons-slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.content-slider').slick({
        infinite: false,
        dots: false,
        autoplay: false
    });

    $('.content-carusel-4').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.content-carusel-3').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.statistic-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: false
    });

    var slick = $('.popup-img__slider').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    $('.image-gallery__popup').click(function () {
        slick.slick('refresh');
    });     

    $(document).ready(function () {
        $("#sections-nav").on("click", "a", function (event) {         
            event.preventDefault();
            var id = $(this).attr('href'),              
                top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top }, 100);
        });
    });

    $('body').on('click', '.password-visible', function () {
        if ($('.password').attr('type') == 'password') {
            $(this).addClass('view');
            $('.password').attr('type', 'text');
        } else {
            $(this).removeClass('view');
            $('.password').attr('type', 'password');
        }
        return false;
    });

    $(".login__btn").on('click', function () {
        $(".login").removeClass('active');
        $(".recovery").removeClass('active');
        $(".registrations").addClass('active');
    });

    $(".js-share-btn").on('click', function () {
        $(".share-popup").addClass('active');
    });

    $(".js-share-btn-bottom").on('click', function () {
        $(".share-popup").addClass('active');
    });

    $(".share-popup__close").on('click', function () {
        $(".share-popup").removeClass('active');
    });

    $(".registrations__btn").on('click', function () {
        $(".registrations").removeClass('active');
        $(".recovery").removeClass('active');
        $(".login").addClass('active');
    });

    $(".recovery-link").on('click', function () {
        $(".registrations").removeClass('active');
        $(".login").removeClass('active');
        $(".recovery-send").removeClass('active');
        $(".recovery").addClass('active');
        $(".recovery-form").addClass('active');
    });

    $(".btn-login-franchisees").on('click', function () {
        $(".login-user").removeClass('active');
        $(".login-franchisees").addClass('active');
    });

    $(".btn-login-user").on('click', function () {
        $(".login-franchisees").removeClass('active');
        $(".login-user").addClass('active');
    });

    $(".btn-registrations-franchisees").on('click', function () {
        $(".registrations-user").removeClass('active');
        $(".registrations-franchisees").addClass('active');
    });

    $(".btn-registrations-user").on('click', function () {
        $(".registrations-franchisees").removeClass('active');
        $(".recovery").removeClass('active');
        $(".registrations").addClass('active');
        $(".registrations-user").addClass('active');
    });

    $(".btn-recovery-send").on('click', function () {
        $(".recovery-form").removeClass('active');
        $(".recovery-send").addClass('active');
    });

    $('.city-slroller-btn1').click(function () {
        $('.city-slroller-btn1').removeClass('active');
        $(this).addClass('active');
        $('.city-slroller-lvl1')
            .hide()
            .filter('[data-con-lvl1="' + $(this).data('btn1') + '"]')
            .show();
    });

    $('.city-slroller-btn2').click(function () {
        $('.city-slroller-btn2').removeClass('active');
        $(this).addClass('active');
        $('.city-slroller-lvl2')
            .hide()
            .filter('[data-con-lvl2="' + $(this).data('btn2') + '"]')
            .show();
    });

    $('.tab-data-btn').click(function () {
        $('.tab-data-content')
            .hide()
            .filter('[data-content="' + $(this).data('btn') + '"]')
            .show();
    });

    $('.tabs-nav').on('click', '.tabs-btn:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.tabs').find('.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $(".options__btn").on('click', function () {
        $(this).toggleClass('active');
    });

    $(".js-sorting").on('click', function () {
        $(this)
        .children('.icon-sorting').toggleClass('active');
    });

    $(".collapse .collapse-link").click(function () {
        $(this)
            .toggleClass('hide')
            .siblings('.collapse-content').addClass('visible')
            .siblings('.collapse-link-close').addClass('visible');
        return false;
    });

    $(".collapse .collapse-link-close").click(function () {
        $(this)
            .toggleClass('visible')
            .siblings('.collapse-link').removeClass('hide')
            .siblings('.collapse-content').removeClass('visible');
        return false;
    });

    $(".services-all").on('click', function () {
        $(".home-services__modal").toggleClass('active');
    });

    $(".home-services__close").on('click', function () {
        $(".home-services__modal").removeClass('active');
    });

    $(".btn-languages").on('click', function () {
        $(".header__languages").toggleClass('active');
    });

    $(".js-dropdown-toogle").on('click', function () {
        $(this).toggleClass('active');
    });

    $(".header__city-btn").on('click', function () {
        $(".header__city").toggleClass('active');
    });

    $(".header__reg-btn").on('click', function () {
        $(".login-wrapper").toggleClass('active');
    });

    $(".user-account__btn-open").on('click', function () {
        $(this).toggleClass('active');
        $(".user-account__dropdown").toggleClass('active');
    });

    $(".user-account__dropdown-close").on('click', function () {
        $(".user-account__btn-open").toggleClass('active');
        $(".user-account__dropdown").toggleClass('active');
    });

    $(".category-bar__btn").on('click', function () {
        $(".category-bar").toggleClass('category-modal-active');
    });

    $(".city-search__btn").on('click', function () {
        $(".city-search").toggleClass('active');
    });

    $(".page-sertificat__more-btn--open").on('click', function () {
        $(this).addClass('hidden');
        $(".page-sertificat__more-btn--close").addClass('active');
        $(".page-sertificat__more-btn--close").removeClass('hidden');
        $(".page-sertificat__more-content").addClass('open');
    });
    $(".page-sertificat__more-btn--close").on('click', function () {
        $(this).addClass('hidden');
        $(".page-sertificat__more-btn--open").addClass('active');
        $(".page-sertificat__more-btn--open").removeClass('hidden');
        $(".page-sertificat__more-content").removeClass('open');
    });

    $(".js-popover-open").on('click', function () {
        $(".note-popover__panel").addClass('active');
    });

    $(".note-popover__close").on('click', function () {
        $(".note-popover__panel").removeClass('active');
    });

    $(".js-services-open").click(function () {
        $(this)
            .addClass('active')
            .siblings('.article__services').toggleClass('active');
        return false;
    });

    $(".js-smart-filter").on('click', function () {
        $(this)
            .siblings('.smart-filter__popup').addClass('active');
    });

    $(".smart-filter__close").on('click', function () {
        $('.smart-filter__popup').removeClass('active');
    });

    $(".popup-img__tags-more").on('click', function () {
        $(this).css('display', 'none')
        $('.popup-img__tags-hide').addClass('visible');
    });

    $(".popup-img__share-btn").on('click', function () {
        $(this).css('display', 'none')
        $('.popup-img__share-block').addClass('visible');
    });

    //Mobil filter

    $(".mobil-bar__btn").on('click', function () {
        $(".mobil-filter").addClass('active');
    });

    $(".mobil-filter__close").on('click', function () {
        $(".mobil-filter").removeClass('active');
    });

    //

    $(".mobil-filter__btn-category").on('click', function () {
        $(".category-modal-mobil").addClass('active');
    });

    $(".mobil-filter__back").on('click', function () {
        $(".mobil-filter__wrapper").removeClass('active');
    });

    $(".category-modal-mobil__cancel").on('click', function () {
        $(".category-modal-mobil").removeClass('active');
    });

    $(".category-modal-mobil__ok").on('click', function () {
        $(".category-modal-mobil").removeClass('active');
    });

    $(".mobil-filter__btn-country").on('click', function () {
        $(".mobil-filter__country").addClass('active');
    });

    $(".mobil-filter__btn-region").on('click', function () {
        $(".mobil-filter__region").addClass('active');
    });
});

$(document).on('mouseup', function (e) {
    let hsm = $('.home-services__modal');
    if (!hsm.is(e.target) && hsm.has(e.target).length === 0) {
        hsm.removeClass('active');
    };

    let lang = $('.header__languages');
    if (!hsm.is(e.target) && lang.has(e.target).length === 0) {
        lang.removeClass('active');
    }

    let city = $('.header__city');
    if (!hsm.is(e.target) && city.has(e.target).length === 0) {
        city.removeClass('active');
    }

    let login = $('.login-wrapper');
    if (!hsm.is(e.target) && login.has(e.target).length === 0) {
        login.removeClass('active');
        $(".header").removeClass("log-active")
    }

    let ctm = $('.category-bar');
    if (!hsm.is(e.target) && ctm.has(e.target).length === 0) {
        ctm.removeClass('category-modal-active');
    }

    let csh = $('.city-search');
    if (!hsm.is(e.target) && csh.has(e.target).length === 0) {
        csh.removeClass('active');
    }

    let drop = $('.dropdown');
    if (!hsm.is(e.target) && drop.has(e.target).length === 0) {
        drop.removeClass('active');
    }

    let option = $('.options__btn');
    if (!hsm.is(e.target) && drop.has(e.target).length === 0) {
        option.removeClass('active');
    }

    let services = $('.article__services');
    if (!hsm.is(e.target) && drop.has(e.target).length === 0) {
        $('.js-services-open').removeClass('active')
        services.removeClass('active');
    }
});

if (document.documentElement.clientWidth > 1201) {
    $(".header__btn-menu").on('click', function () {
        $(this).toggleClass('active');
        $(".burger-btn").toggleClass('active');
        $(".main-menu").toggleClass('active');
    });

    let graph = document.querySelectorAll('.graph__cell');
    const max = 2000;

    graph.forEach(month => {
        if (month.dataset.graph) {
            const value = month.dataset.graph;
            const bar = month.querySelector('.graph__data');
            const barWidth = (value / max) * 100;

            bar.style.height = `${barWidth}%`;
        }
    });
};

if (document.documentElement.clientWidth < 1202) {
    let graph = document.querySelectorAll('.graph__cell');
    const max = 2000;

    graph.forEach(month => {
        if (month.dataset.graph) {
            const value = month.dataset.graph;
            const bar = month.querySelector('.graph__data');
            const barWidth = (value / max) * 100;

            bar.style.width = `${barWidth}%`;
        }
    });
};

if (document.documentElement.clientWidth < 1200) {


    $(".header__btn-menu").on('click', function () {
        $(".mobil-header-wrapper").addClass("active")
    });

    $(".header__btn-menu-close").on('click', function () {
        $(".mobil-header-wrapper").removeClass("active")
    });

    $('.main-menu__tabs-btn').click(function () {
        $('.main-menu__tabs-btn').removeClass('active');
        $(this).addClass('active');
        $('.main-menu__col')
            .hide()
            .filter('[data-col="' + $(this).data('btn') + '"]')
            .show();
    });

    $(".city-wrapper__back").on('click', function () {
        $(".header__city").removeClass("active")
    });

    $(".footer__mobil-wrap .footer__sub").click(function () {
        $(this).toggleClass('active').siblings('.footer__mobil-wrap .footer__sub-menu').slideToggle();
        return false;
    });
};

if (document.documentElement.clientWidth < 992) {
    $(".page-notice__col-title").click(function () {
        $(this).toggleClass('active').siblings('.page-notice__col-content').slideToggle();
        return false;
    });
};

if (document.documentElement.clientWidth < 768) {

    $(".header__reg-btn").on('click', function () {
        $(".header").toggleClass("log-active")
    });

    $(".login-reg__close").on('click', function () {
        $(".header").removeClass("log-active")
        $(".login-wrapper").removeClass("active")
    });
};

document.addEventListener("DOMContentLoaded", function () {
    $('.popup-link').magnificPopup({
        type: 'inline' // к поп апу добавить класс mfp-hide // Через кнопку data-mfp-src="#call_me" добавить кнопке
    });

    $('.mfp-btn-close').on("click", function () {
        $.magnificPopup.close();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    $('.popup-image').magnificPopup({
        type: 'image'
    });
});
