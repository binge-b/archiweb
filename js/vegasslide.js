var windowwidth = window.innerWidth ||
document.documentElement.clientWidth ||0;
    if (windowwidth > 768){
        var resposiveImage = [
            { src: 'images/bg_01.jpg'},
            { src: 'images/bg_02.jpg'},
            { src: 'images/bg_03.jpg'}
        ];
    }else{
        var resposiveImage = [
            { src: 'images/bg_sp01.jpg'},
            { src: 'images/bg_sp02.jpg'},
            { src: 'images/bg_sp03.jpg'}
        ];
    }

    $('#slider').vegas({
        overlay: true,
        transition: 'blur',
        transitionDuration:2000,
        delay: 10000,
        animationDuration:20000,
        animation: 'kenburns',
        slides: resposiveImage,
    });