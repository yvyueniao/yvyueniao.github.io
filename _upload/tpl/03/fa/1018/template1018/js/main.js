$(function () {
$(".slidesou").click(function(){
    $(".sidenav").toggleClass("zan")
})
if($(window).width()<1000){
$(".post-11 .con .list2").after($(".post-11 .con .list1:eq(0)"))
}
$(".tt").each(function(){
    var _href=$(this).find("a").attr("href");
    $(this).append("<a class='more_btn' href='"+_href+"'>查看更多+</a>")
})
$(".post-11 .list1 .news_imgs").each(function(){
    if($(this).attr("imgsrc")==""){$(this).hide();$(this).parent().find(".news_text").show()}
})

$(".mbanner .swiper-slide:eq(0)").attr("data-swiper-autoplay","5000")
$(".mbanner .swiper-slide:eq(0)").siblings().attr("data-swiper-autoplay","3000")
    var mySwiper1 = new Swiper('#swiper1', {
        loop: false,
       autoplay: {
         delay: 5000,//1秒切换一次
       },
        speed: 1000,
        parallax: true,
        //effect: "fade",
        //fadeEffect: {
        //    crossFade: true
        //},
        navigation: {
            nextEl: '.next3',
            prevEl: '.prev3',
        },
       on:{
         slideChange: function(){
          console.log(mySwiper1.isBeginning);
         },
      },

    })


    var mySwiper2 = new Swiper('#swiper2', {
        autoplay: true,//可选选项，自动滑动
        loop: false,
        pagination: {
            el: '.pagination2',
            clickable: true,
        },
    })

    var mySwiper3 = new Swiper('#swiper3', {
        autoplay: true,//可选选项，自动滑动
        loop: true,
        slidesPerView: "auto",
        navigation: {
            nextEl: '.next1',
            prevEl: '.prev1',
        },
    })

    var mySwiper6 = new Swiper('#swiper6', {
        autoplay: true,//可选选项，自动滑动
        loop: true,
        breakpoints: {
            100: {
                slidesPerView: 1,
            },
            479: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 4,
            },
        }
    })
    var mySwiper4 = new Swiper('#swiper4', {
        autoplay: false,//可选选项，自动滑动
        //loop: true,
roundLengths:true,
initialSlide: 2,
        slidesPerView: 1,
        centeredSlides: true,
    })
    var mySwiper5 = new Swiper('#swiper5', {
        autoplay: false,//可选选项，自动滑动
       // loop: true,
initialSlide: 2,
        slidesPerView: 5,
        centeredSlides: true,
        navigation: {
            nextEl: '.next2',
            prevEl: '.prev2',
        },
        breakpoints: {
            100: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 3,
            },
            1000: {
                slidesPerView: 4,
            },
            1366: {
                slidesPerView: 5,
            },
        }
    })
    //mySwiper4.controller.control = mySwiper5;//Swiper1控制Swiper2，需要在Swiper2初始化后
    mySwiper5.controller.control = mySwiper4;//Swiper2控制Swiper1，需要在Swiper1初始化后

       var mySwiper7 = new Swiper('#swiper7', {
        autoplay: true,//可选选项，自动滑动
        loop: false,
        navigation: {
            nextEl: '.next7',
            prevEl: '.prev7',
        },
      breakpoints: {
            100: {
                slidesPerView: 4,
            },
            767: {
                slidesPerView: 1,
            },
        }
    })
    var nodeList = document.querySelectorAll(".post-73 .news_box");
    addFirstDom(nodeList)
    var arr = $('.post-61 .animateNum');
    var roundLogEl = document.querySelectorAll('.animateNum');
    for (var key in roundLogEl) {
        if (key < 10) {
            var animetenum = roundLogEl[key].getAttribute('data-animatetarget');
            anime({
                targets: roundLogEl[key],
                innerHTML: [0, animetenum],
                easing: 'linear',
                round: 1 // Will round the animated value to 1 decimal
            });
        }

    }

    $(".down").click(function () {
        var position = $(".main1").offset();
        position.top = position.top;
        $("html,body").animate({ scrollTop: position.top }, 500);
    })
    $(".slidetop").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    }) 
    $(".mbanner").scroll(function () {
        $(".down").click()
    })
$(".post-71 .news .iconfont").each(function(){
    if($(this).attr("date_icon")=="微博"){
        $(this).addClass("icon-weibo")
    } else if($(this).attr("date_icon")=="微信"){
        $(this).addClass("icon-weixin")
    } else if($(this).attr("date_icon")=="抖音"){
        $(this).addClass("icon-douyin")
    } else if($(this).attr("date_icon")=="学习强国"){
        $(this).addClass("icon-xuexi")
    }else if($(this).attr("date_icon")=="校报"){
        $(this).addClass("icon-xiaobao")
    }
})
});
