$(document).ready(function () {

    $(window).scroll(function () {
        var scrollValue = $(window).scrollTop();
        if (scrollValue > 0 && scrollValue < 3000) {
            $(".menu-two").css("font-family", 'GmarketSansMedium');
            $(".menu-three").css("font-family", 'GmarketSansLight');

            $(".underline_select_menu").css("background-image", 'linear-gradient(120deg, #F7C9BC 0%, #F7D7A8 100%)');
            $(".underline_select_menu2").css("background-image", 'none');

        } else if (scrollValue > 3000) {
            $(".menu-three").css("font-family", 'GmarketSansMedium');
            $(".menu-two").css("font-family", 'GmarketSansLight');

            $(".underline_select_menu2").css("background-image", 'linear-gradient(120deg, #F7C9BC 0%, #F7D7A8 100%)');
            $(".underline_select_menu").css("background-image", 'none');
        }
    })

    $(".owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        margin: 80,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
    });

    $(".menu-two").on("click", function () {
        $('html,body').animate({ scrollTop: 0 }, "slow")
        $(".menu-two").css("font-family", 'GmarketSansMedium');
        $(".menu-three").css("font-family", 'GmarketSansLight');
    })

    $(".menu-three").on("click", function () {
        $('html,body').animate({ scrollTop: 3200 }, "slow")
        $(".menu-three").css("font-family", 'GmarketSansMedium');
        $(".menu-two").css("font-family", 'GmarketSansLight');
    })
});
