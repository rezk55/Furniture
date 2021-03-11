$(document).ready(function() {

    //navbar tooggler
    $('.navbar-toggler').on('click', function() {
        $('nav .one').toggleClass('top');
        $('nav .two').toggleClass('hidden');
        $('nav .three').toggleClass('bottom');
    })


    //active btns for portfolio
    $('.btns-filter li').on('click', function() {

        $(this).parent().find('li').removeClass('active-btn');
        $(this).addClass('active-btn');
    })


    //mix it up
    var mixer = mixitup('.gallary');


    //venobox
    $('.venobox').venobox();

    //smoth scroll
    $('nav li a').on('click', function() {

        //add active class on nav links
        $(this).addClass('active').parent().siblings().find('a').removeClass('active')

        //smoth scroll
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 60
        }, 1)

    })

    //hidden scroll up 
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 700) {
            $('.scroll-up').fadeIn(500)
        } else {
            $('.scroll-up').fadeOut(500)
        }
    })

    //scroll up
    $('.scroll-up').on('click', function() {

        $('html, body').animate({
            scrollTop: 0
        }, 1)
    })


    //AOS
    $(function() {
        AOS.init();
        window.addEventListener('load', AOS.refresh)
    })
})