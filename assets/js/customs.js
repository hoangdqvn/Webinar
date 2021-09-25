var GUI = {};
GUI.win = $(window);
// 
$(document).ready(function() {
    $('#touch-menu').click(function() {
        $(this).stop(0).toggleClass('opened');
        $('#sticker').toggleClass('opened');
        $('.sticker-overlay').addClass('show');
    });
    $('#sticker .close-menu, .sticker-overlay').click(function(event) {
        event.stopPropagation();
        $('#touch-menu').stop(0).removeClass('opened');
        $('#sticker').removeClass('opened');
        $('.sticker-overlay').removeClass('show');
    });
    $('.body-sticker ul li').click(function(event) {
        event.stopPropagation();
        var ul = $(this).children('ul');
        var icon = $(this).children('i');
        hiddenCate(ul, icon);
    });
    $('.body-sticker>ul>li.active').has('ul').click(function() {
        $(this).children('ul').slideToggle();
    });
    //gmap
    if ($('.gmap') == 0) return;
    setTimeout(function() {
        $('.gmap').each(function() {
            var map = $(this).attr('data-map');
            $(this).append(map);
        })
    }, 3000);

    // 
    $(".btn-click").click(function() {
        $('html, body').animate({
            scrollTop: $(".form-access").offset().top
        }, 1000);
    });
});

function hiddenCate(ul, icon) {
    if (ul.is(":hidden") === true) {
        ul.parent('li').parent('ul').children('li').children('ul').slideUp(200);
        ul.parent('li').parent('ul').children('li').children('i').removeClass('up');
        icon.toggleClass('up');
        ul.slideDown(200);
    } else {
        icon.toggleClass('up');
        ul.slideUp();
        ul.find('ul').slideUp(200);
    }
}

function menuLG() {
    $('.body-sticker ul li').each(function() {
        if ($(this).find('ul > li').length > 0) {
            $(this).append('<i class="fa fa-angle-down"></i>');
        }
    })
}
// 
GUI.fixedMenu = function() {
    if ($('.header').length) {
        var scrollTrigger = 0; // px
        fixmenu = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.header').addClass('fixed');
            } else {
                $('.header').removeClass('fixed');
            }
        };
        fixmenu();
        $(window).on('scroll', function () {
            fixmenu();
        });
    }    
};
// 
if (typeof $.fn.slick == 'function') {
    if ($(".slider-banner").length > 0) {
        $(".slider-banner").slick({
            infinite: true,
            slidesToShow: 1,
            arrows: true,
            fade: true,
            dots: true,
            autoplay: true,
            arrows: true,
            // vertical: true,
            prevArrow: '<i class="fa fa-angle-left bn-prev aria-hidden="true"></i>',
            nextArrow: '<i class="fa fa-angle-right bn-next aria-hidden="true"></i>',
        })
    }
    if ($(".slider-itro").length > 0) {
        $('.slider-itro').slick({
            infinite: true,
            slidesToShow: 1,
            arrows: true,
            fade: true,
            dots: true,
            autoplay: true,
            arrows: true,
            // vertical: true,
            prevArrow: '<i class="fa fa-angle-left bn-prev aria-hidden="true"></i>',
            nextArrow: '<i class="fa fa-angle-right bn-next aria-hidden="true"></i>',
            responsive: [{
                breakpoint: 480,
                settings: {
                    dots: false,
                }
            }],
        });
    }
    if ($(".slider-mt").length > 0) {
        $(".slider-mt").slick({
            infinite: true,
            slidesToShow: 1,
            arrows: true,
            fade: true,
            dots: true,
            autoplay: true,
            arrows: true,
            // vertical: true,
            prevArrow: '<i class="fa fa-angle-left bn-prev aria-hidden="true"></i>',
            nextArrow: '<i class="fa fa-angle-right bn-next aria-hidden="true"></i>',
            responsive: [{
                breakpoint: 480,
                settings: {
                    dots: false,
                }
            }],
        })
    }
    if ($(".slider-ct").length > 0) {
        $(".slider-ct").slick({
            infinite: true,
            slidesToShow: 1,
            arrows: true,
            fade: true,
            dots: false,
            autoplay: true,
            arrows: true,
            // vertical: true,
            prevArrow: '<i class="fa fa-angle-left bn-prev aria-hidden="true"></i>',
            nextArrow: '<i class="fa fa-angle-right bn-next aria-hidden="true"></i>',
            responsive: [{
                breakpoint: 480,
                settings: {
                    dots: false,
                }
            }],
        })
    }
}
GUI.initbackTop = function() {
    if ($(".back-top").length > 0) {
        $(window).scroll(function() {
            var e = $(window).scrollTop();
            if (e > 300) {
                $(".back-top").show()
            } else {
                $(".back-top").hide()
            }
        });
        $(".back-top").click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 500)
        })
    }
}
GUI.initFancy = function() {
    if ($('.fancy').length == 0) return;
    $('.fancy').fancybox({
        loop: true,
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "thumbs",
            "close"
        ],
        transitionEffect: "circular",
    });
}
GUI.initWow = function() {
    if ($(window).width() > 991) {
        if ($('.wow').length) {
            new WOW().init();
        }
    }
}
GUI.init = function() {
    GUI.fixedMenu();
    GUI.initbackTop();
    GUI.initWow();
    GUI.initFancy();
}
$(function() {
    GUI.init();
    menuLG();
})