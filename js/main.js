$(document).ready(function(){
    
    //gnb
    $(function(){
        $('.subMenu').hide();
        $('.gnb').hover(function(){
            $(this).parent().find('.subMenu').slideDown();
            $(this).parent().hover(function(){
            },function(){
            $(this).parent().find('.subMenu').stop().slideUp();
            })
        })
    })
    //메인슬라이더
    var mainSlider = new Swiper('.mainSlider', {
      loop: true,
      autoplay:true,
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
        },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable : true
        },
    });
    $('.stopBtn').click(function(){
      mainSlider.autoplay.stop();
    });


    //con01 Bussiness
    var _tabList = $( ".bizName" );
    var _tabTarget = _tabList.children( "li" );
    var swiper = new Swiper('.bizSliderBox');
    
    _tabTarget.on( "click", function($e){
        var itemIndex = $(this).index();
        swiper.slideTo(itemIndex);
    });

    
    //con01 tab
    $(function(){
        $('.bizName>li>a').click(function(){
           $(this).parent().addClass("active").siblings().removeClass("active"); 
        });
    });

    //con02
    $('.counter').counterUp();


    //con03
    var newsSwiper = new Swiper('.newsList', {
        slidesPerView: 2,
        spaceBetween: 40,
        slidesPerGroup:2,
        loop: true,
        navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
        },
    });
    
    
});

