$(function(){

$('.slider').slick({
    arrows: false,
    infinite:true,
    fade: true,
    dots: true,
    autoplay: 3000,
});

$('.header-btn').on('click', function(){
    $('.menu').addClass('active');
});

$('.close-btn').on('click', function(){
    $('.menu').removeClass('active');
});

});