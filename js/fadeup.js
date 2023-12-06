function fadeUpAnime(){
    // ふわっの動き
    $('.fadeUpTrigger').each(function(){
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).scrollTop();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeUp');
        }else{
            $(this).removeClass('fadeUp');
        }
    });
}

// スクロールをしたら動かす
$(window).scroll(function(){
    fadeUpAnime();
});
