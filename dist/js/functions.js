document.addEventListener("DOMContentLoaded", function () {

    //галерея в карточке поста
    $('.js-post-gallery').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: false
    });

    //галерея на детальной странице поста
    $('.js-post-detail-gallery').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: false
    });

    $('.js-post-special').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    //Простой слайдер (один слайд, простые стрелки)
    $('.js-simple-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 10000
    });

    //Простой слайдер (один слайд, простые стрелки, точки на мобильном)
    $('.js-simple-slider-dotted').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 10000
    });

    //Простая карусель на 4 слайда 
    $('.js-simple-carousel-dotted').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 10000,

          responsive: [
              {
                  breakpoint: 1200,
                  settings: {
                      slidesToShow: 2,
                  }
              },
              {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 1,
                  }
              }
        ]
    });

    //Карусель потфолио на странице организации
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
        $(this).siblings(".share-popup").addClass('active');
    });

    $(".js-share-btn-bottom").on('click', function () {
        $(".share-popup").addClass('active');
    });

    $(".share-popup__close").on('click', function () {
        $(".share-popup").removeClass('active');
    });

    $(".js-tools-popup").on('click', function () {
        $(this).siblings(".tools-popup__panel").toggleClass('active');
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

    //$(".btn-languages").on('click', function () {
    //    $(".header__languages").toggleClass('active');
    //});

    $(".js-dropdown-toogle").on('click', function () {
        $(this).toggleClass('active');
    });

    $(".site-header__city-btn").on('click', function () {
        $(".site-header__city").toggleClass('active');
    });

    $(".city-close").on('click', function () {
        $(".site-header__city").removeClass('active');
    });

    $(".site-header__reg-btn").on('click', function () {
        $(".login-wrapper").toggleClass('active');
    });

    $(".js-action-btn").on('click', function () {
        $(this).children(".actions-btns__list").toggleClass('active');
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

    $(".seach__btn").on('click', function () {
        $(".seach").addClass('active');
    });

    $(".js-tools-feed").on('click', function () {
        $(".tools-feed__dropdown").addClass('active');
    });

    $(".js-lang").on('click', function () {
        $(".tools-feed__lang-dropdown").toggleClass('active');
    });

    //Блокировка канала
    $('.js-locked').click(function () {
        //$('.post-card__locked').removeClass('active');
        $(this).closest(".post-card").find('.post-card__locked').addClass('active');
        $(".tools-popup__panel").removeClass('active');
    });

    $(".post-card__locked-cancel").on('click', function () {
        $(this).closest(".post-card").find('.post-card__locked').removeClass('active');
    });

    $(".js-note-locked").on('click', function () {
        $(".notice").toggleClass('active');
    });

    //панель с фильтром
    $(".js-open-filter").on('click', function () {
        $(".filter-panel__inner").toggleClass('active');
    });

    $(".filter-panel__btn-close").on('click', function () {
        $(".filter-panel__inner").removeClass('active');
    });

    //Сортировка в попапе
    $(".js-sort-open").on('click', function () {
        $(".sort-popup__panel").toggleClass('active');
    });

    $(".sort-popup__close").on('click', function () {
        $(".sort-popup__panel").removeClass('active');
    });

    //появление футера
    //$(window).scroll(function () {
    //    if ($(window).scrollTop() > 120) {
    //        $(".footer-sm").addClass('active');
    //    } else {
    //        $(".footer-sm").removeClass('active');
    //    }
    //});

    //Комментарии
    $(".js-show-comment").on('click', function () {
        $(this).closest(".comments__item").find('.comment-item__reply-list').toggleClass('comment-item--hide')

        if ($(this).attr('data-show') === "true") {
            $(this).text("Показать");
            $(this).attr('data-show', "false");
        }
        else {
            $(this).text("Свернуть");
            $(this).attr('data-show', "true");
        }
    });

    //ответить на комментарий
    $(".js-add-reply-btn").on('click', function () {
        $(this).closest(".comment-item").find('.js-add-reply').toggleClass('active');
    });

    //Показать полный текст
    $(".js-show-full").on('click', function () {
        $(this).toggleClass('active');
        $(".hide-descr__txt").toggleClass('visible')

        if ($(this).attr('data-show') === "true") {
            $(this).text("Развернуть");
            $(this).attr('data-show', "false");
        }
        else {
            $(this).text("Свернуть");
            $(this).attr('data-show', "true");
        }
    });

    // чат на канале
    $(".js-open-chat").on('click', function () {
        $(".web-chat").addClass('active');
    });

    $(".js-close-chat").on('click', function () {
        $(".web-chat").removeClass('active');
    });

    // выбор региона (при создании канала)
    $(".js-select-city").on('click', function () {
        $(".city-mobil__panel--nested").addClass('active');
    });
    $(".js-back").on('click', function () {
        $(".city-mobil__panel--nested").removeClass('active');
    });

    //показать/скрыть панель (добавить рекламу)
    $(".js-show-panel").on('click', function () {
        $(this).hide();
        $(".js-panel").addClass('active');
    });

    $(".js-close-panel").on('click', function () {
        $(".js-show-panel").show();
        $(".js-panel").removeClass('active');
    });

    //просмотр созданной рекламы
    $('.js-show-rek').click(function () {
        $(this).hide()
        $(this).closest(".reklam-table__item-panel").find('.js-rek').addClass('active');
    });
    $('.js-close-rek').click(function () {
        $(this).closest(".reklam-table__item-panel").find('.js-rek').removeClass('active')
        $(this).closest(".reklam-table__item-panel").find('.js-show-rek').show();
    });


    //переключение баннеров  

    $('.js-banner-bottom').click(function () {
        $('input[type=radio]').change(function () {
            if ($('#bottom-static').is(':checked')) {
                $(".js-banner-bottom .reklam-banner").removeClass('active');
                $(".js-banner-bottom-static").addClass('active');
            }
            if ($('#bottom-media').is(':checked')) {
                $(".js-banner-bottom .reklam-banner").removeClass('active');
                $(".js-banner-bottom-media").addClass('active');
            }
        });
    });

    $('.js-banner-right').click(function () {
        $('input[type=radio]').change(function () {
            if ($('#right-static').is(':checked') && $('#right-big').is(':checked')) {
                $(".js-banner-right .reklam-banner").removeClass('active');
                $(".js-banner-right-static-big").addClass('active');
            }
            if ($('#right-static').is(':checked') && $('#right-sm').is(':checked')) {
                $(".js-banner-right .reklam-banner").removeClass('active');
                $(".js-banner-right-static-sm").addClass('active');
            }
            if ($('#right-media').is(':checked') && $('#right-big').is(':checked')) {
                $(".js-banner-right .reklam-banner").removeClass('active');
                $(".js-banner-right-media-big").addClass('active');
            }
            if ($('#right-media').is(':checked') && $('#right-sm').is(':checked')) {
                $(".js-banner-right .reklam-banner").removeClass('active');
                $(".js-banner-right-media-sm").addClass('active');
            }
        });
    });

    //карточки перевертыши   
    var max = $('.users-flip__card').length;
    setInterval(function () {
        var min = 1;
        randomLi = Math.floor(Math.random() * (max - min + 1)) + min;
        $('.users-flip__card.active').removeClass('active');
        $('.users-flip__card').eq(randomLi - 1).addClass('active');
    }, 1000);

    //Аккордеон только на мобильном
    $(".accordion-mob__title").click(function () {
        $(this).toggleClass('active').siblings('.accordion-mob__content').slideToggle();
        return false;
    });

    //Плавный скролл для якорей
    $(document).ready(function () {
        $('a[href*=#]').bind("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });
        return false;
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

    //Табы
    //$('.tabgroup > .tabgroup__item').hide();
    //$('.tabgroup > .tabgroup__item:first-of-type').show();
    //$('.tabs .tabs__nav-link').click(function (e) {
    //    e.preventDefault();
    //    var $this = $(this),
    //        tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
    //        others = $this.closest('.tabs__nav').siblings().children('.tabs__nav-link'),
    //        target = $this.attr('href');
    //    others.removeClass('active');
    //    $this.addClass('active');
    //    $(tabgroup).children('.tabgroup__item').hide();
    //    $(target).show();

    //})

    $('.tabgroup > .tabgroup__item').removeClass('active');
    $('.tabgroup > .tabgroup__item:first-of-type').addClass('active');
    $('.tabs .tabs__nav-link').click(function (e) {
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
            others = $this.closest('.tabs__nav').siblings().children('.tabs__nav-link'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('.tabgroup__item').removeClass('active');
        $(target).addClass('active');

    })

    //аккордеон
    $(".js-accordion-item > .accordion__title").on("click", function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass("active");
            $(this).siblings('.accordion__content').slideUp(200);
        } else {
            $(".accordion__title > .accordion__title").removeClass("active");
            $(this).addClass("active");
            $('.accordion__content').slideUp(200);
            $(this).siblings('.accordion__content').slideDown(200);
        }
    });

});

$(document).on('mouseup', function (e) {
    let hsm = $('.home-services__modal');
    if (!hsm.is(e.target) && hsm.has(e.target).length === 0) {
        hsm.removeClass('active');
    };

    //let lang = $('.header__languages');
    //if (!hsm.is(e.target) && lang.has(e.target).length === 0) {
    //    lang.removeClass('active');
    //}

    let city = $('.site-header__city');
    if (!hsm.is(e.target) && city.has(e.target).length === 0) {
        city.removeClass('active');
    }

    let add = $('.actions-btns__list');
    if (!hsm.is(e.target) && add.has(e.target).length === 0) {
        add.removeClass('active');
    }

    let login = $('.login-wrapper');
    if (!hsm.is(e.target) && login.has(e.target).length === 0) {
        login.removeClass('active');
        $(".site-header").removeClass("log-active")
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

    let seach = $('.seach');
    if (!hsm.is(e.target) && seach.has(e.target).length === 0) {
        seach.removeClass('active');
    }

    let tools_feed = $('.tools-feed__dropdown');
    if (!hsm.is(e.target) && tools_feed.has(e.target).length === 0) {
        tools_feed.removeClass('active');
    }

    let tools_post = $('.tools-popup__panel');
    if (!hsm.is(e.target) && tools_post.has(e.target).length === 0) {
        tools_post.removeClass('active');
    }

    let add_reply = $('.js-add-reply');
    if (!hsm.is(e.target) && add_reply.has(e.target).length === 0) {
        add_reply.removeClass('active');
    }

    let share = $('.share-popup');
    if (!hsm.is(e.target) && share.has(e.target).length === 0) {
        share.removeClass('active');
    }
});

if (document.documentElement.clientWidth > 1201) {
    $(".burger__btn-menu").on('click', function () {
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


    $(".burger__btn-menu").on('click', function () {
        $(".mobil-header-wrapper").addClass("active")
    });

    $(".site-header__btn-menu-close").on('click', function () {
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
        $(".site-header__city").removeClass("active")
    });

    $(".footer__mobil-wrap .footer__sub").click(function () {
        $(this).toggleClass('active').siblings('.footer__mobil-wrap .footer__sub-menu').slideToggle();
        return false;
    });

    $(".company-menu .company-menu__title").click(function () {
        $(this).toggleClass('active').siblings('.company-menu__content').slideToggle();
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

    $(".site-header__reg-btn").on('click', function () {
        $(".site-header").toggleClass("log-active")
    });

    $(".login-reg__close").on('click', function () {
        $(".site-header").removeClass("log-active")
        $(".login-wrapper").removeClass("active")
    });
};

$(function () {
    if ($(window).width() > 1199) {

        //панель с поиском в World (каналы/сообщества)
        $(".js-world-search").on('click', function () {
            $(this).toggleClass('active');
            $(".world-seach").toggleClass('active');
        });

    }
});

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



//Интерактивная карта

mapPaths = document.querySelectorAll('#map-container path');
mapContainer = document.getElementById('map-container')
countryName = document.getElementById('country-name');
flag = document.getElementById('country-flag');
flagContainer = document.getElementsByClassName('flag-container')[0];
markers = document.querySelectorAll('.marker');
markersContainer = document.getElementsByClassName('markers')[0];

mapPaths.forEach(item => {
    item.addEventListener('mousemove', e => {
        //console.log('x: ' + e.offsetX + ' y: ' + e.offsetY)
        countryName.innerHTML = item.getAttribute("title");
        //console.log(item.getAttribute("title"));
        //countryName.setAttribute("style","top:" + (e.offsetY) + "px; left: "+ (e.offsetX) + "px;");
        countryName.style.display = "block";
        flag.innerHTML = ` <img src="images/dist/map/country-flags/` + item.id.toLowerCase() + `.svg" alt="flag">`
        flagContainer.style.display = 'flex';
        //console.log(item.clientLeft+"  "+item.clientTop);
        //console.log(item.getAttribute("title"));
    })
    item.addEventListener('mouseout', e => {
        countryName.innerHTML = "";
        flag.innerHTML = "";
        flagContainer.style.display = 'none'
        //countryName.setAttribute("style","border:none;");
    })
})
const markersPosition = (marker) => {
    let x = Math.floor(Math.random() * 808);
    let y = Math.floor(Math.random() * 490);
    marker.setAttribute("style", "top:" + (y) + "px; left:" + (x) + "px;");
    marker.style.opacity = Math.random();
}
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
//MARKERS ZONES
const firstZone = (marker) => {
    let x = 500 + Math.floor(Math.random() * 150);
    let y = 100 + Math.floor(Math.random() * 200);
    marker.setAttribute("style", "top:" + (y) + "px; left:" + (x) + "px;");
}
const secondZone = (marker) => {
    let x = 130 + Math.floor(Math.random() * 50);
    let y = 150 + Math.floor(Math.random() * 150);
    marker.setAttribute("style", "top:" + (y) + "px; left:" + (x) + "px;");
}
const thirdZone = (marker) => {
    let x = 380 + Math.floor(Math.random() * 90);
    let y = 200 + Math.floor(Math.random() * 40);
    marker.setAttribute("style", "top:" + (y) + "px; left:" + (x) + "px;");
}
const fourthZone = (marker) => {
    let x = 400 + Math.floor(Math.random() * 50);
    let y = 300 + Math.floor(Math.random() * 100);
    marker.setAttribute("style", "top:" + (y) + "px; left:" + (x) + "px;");
}
const fifthZone = (marker) => {
    let x = 220 + Math.floor(Math.random() * 50);
    let y = 340 + Math.floor(Math.random() * 80);
    marker.setAttribute("style", "top:" + (y) + "px; left:" + (x) + "px;");
}
const sixthZone = (marker) => {
    let x = 640 + Math.floor(Math.random() * 70);
    let y = 390 + Math.floor(Math.random() * 40);
    marker.setAttribute("style", "top:" + (y) + "px; left:" + (x) + "px;");
}
const changeMarkerStyle = (marker, style, delay) => {
    setInterval(() => marker.classList.add(style), delay)
}
/*
const setMarkersPosition = () => {
    //let i = 0;
    let j =0;
    while (j !== markers.length){
    if (j <= 10){
            let marker = markers[j];
            let delay = getRandomInt(1000,3000);
            changeMarkerStyle(marker,'marker--enter',delay);
            setTimeout(()=>{
                firstZone(marker);
            },500)
    }if ((j > 10) && (j <= 15)){
            let marker = markers[j];
            let delay = getRandomInt(1000,3000);
            changeMarkerStyle(marker,'marker--enter',delay);
            setTimeout(()=>{
                secondZone(marker);
            },1000)
    }if (j>15 && j <=20){
            let marker = markers[j];
            let delay = getRandomInt(1000,3000);
            changeMarkerStyle(marker,'marker--enter',delay);
            setTimeout(()=>{
                thirdZone(marker);
            },800)
    }if (j>20 && j <=23){
            let marker = markers[j];
            let delay = getRandomInt(1000,3000);
            changeMarkerStyle(marker,'marker--enter',delay);
            setTimeout(()=>{
                fourthZone(marker);
            },400)
    }if (j>23 && j <=26){
            let marker = markers[j];
            let delay = getRandomInt(1000,3000);
            changeMarkerStyle(marker,'marker--enter',delay);
            setTimeout(()=>{
                fifthZone(marker);
            },1100)
        }
    j++;
    }
}
 */
const setMarkersPosition = () => {
    //let i = 0;
    let j = 0;
    while (j !== markers.length) {
        if (j <= 15) {
            let marker = markers[j];
            let delay = getRandomInt(1000, 3000);
            changeMarkerStyle(marker, 'marker--enter', delay);
            setTimeout(() => {
                firstZone(marker);
            }, 300)
        } if ((j > 15) && (j <= 20)) {
            let marker = markers[j];
            let delay = getRandomInt(1000, 3000);
            changeMarkerStyle(marker, 'marker--enter', delay);
            setTimeout(() => {
                secondZone(marker);
            }, 200)
        }
        if (j > 20 && j <= 25) {
            let marker = markers[j];
            let delay = getRandomInt(1000, 3000);
            changeMarkerStyle(marker, 'marker--enter', delay);
            setTimeout(() => {
                fourthZone(marker);
            }, 100)
        } if (j > 25 && j <= 30) {
            let marker = markers[j];
            let delay = getRandomInt(1000, 3000);
            changeMarkerStyle(marker, 'marker--enter', delay);
            setTimeout(() => {
                fifthZone(marker);
            }, 150)
        }
        if (j > 30 && j <= 35) {
            let marker = markers[j];
            let delay = getRandomInt(1000, 3000);
            changeMarkerStyle(marker, 'marker--enter', delay);
            setTimeout(() => {
                thirdZone(marker);
            }, 80)
        }
        if (j > 35 && j <= 40) {
            let marker = markers[j];
            let delay = getRandomInt(1000, 3000);
            changeMarkerStyle(marker, 'marker--enter', delay);
            setTimeout(() => {
                sixthZone(marker);
            }, 120)
        }
        j++;
    }
}
const disappearance = () => {
    let i = 0;
    //const markers = document.querySelectorAll('.marker--enter');
    while (i < markers.length) {
        let delay = getRandomInt(2500, 3000);
        let j = getRandomInt(0, markers.length)
        let marker = markers[j];
        setTimeout(() => { marker.classList.remove('marker--enter') }, delay);
        i++;
    }
}
setInterval(() => {
    setMarkersPosition();
    setTimeout(disappearance, 2000);
}, 2000)