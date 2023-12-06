$(document).ready(function(){
$('.lslider').slick({
    autoplay: true,
    infinite: true,
    speed:800,
    slidesToShow:5,
    slidesToScroll:1,
    arrows:false,
    prevArrow:'<div class="slick-prev"></div>',
    nextArrow:'<div class="slick-next"></div>',
    centerMode: true,
    variableWidth: true,
    dots: false,
});
});