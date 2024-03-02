addFirstDom =function (nodeList, callback) {
    nodeList.forEach((value, index) => {
        const svgDom = document.createElement('div'),
            firstDom = value.firstChild
        svgDom.id = 'linkSvg' + index
        value.insertBefore(svgDom, firstDom)
        const svg = new Vivus(`linkSvg${index}`, { duration: 100, start: 'inViewport', file: `${path()}images/ico${index + 1}.svg` }, callback)
        svgDom.parentElement.addEventListener('mouseover', () => {
            svg.getStatus() === 'end' ? svg.reset().play() : void 0
        })
    })
}
    , path = function(){
        const ip = window.location.origin
        const link = document.querySelectorAll('link')
        for (i of link) {
            if (i.type == 'image/x-icon') {
                return i.href.replace(ip, '').replace('favicon.ico', '')
            }
        }
    }
$(function () {
    $(".header2").html($(".header1").html());
    $(".search-submit").click(function (event) {
        $(this).removeAttr("name");
        event.preventDefault();
        var val = $.trim($(".search-title").val());
        if (val !== "") {
            $(".wp-search").find("form").submit();
        } else {
            alert("请输入关键词");
        }
        return false;
    });

//地址
var html='<div class="foot-c">' +
'<div class="address"><div class="school-title">啬园校区</div><div class="school-text">南通市啬园路9号</div><div class="school-text">邮编：226019</div> </div>'+
'<div class="address"><div class="school-title">启秀校区</div><div class="school-text">南通市启秀路19号</div><div class="school-text">邮编：226001</div> </div>'+
'<div class="address"><div class="school-title">启东校区</div><div class="school-text">江苏省启东市高新技术产业开发区南海路1号 </div><div class="school-text">邮编：226236</div> </div>'+
'</div>'
$(".foot-top").after(html)

    $(".wp-search").hover(function () {
        $(this).addClass('on')
    }, function () {
        $(this).removeClass('on')
    })

$("body").append('<div id="gotop" class="hideicon"><svg t="1620981491725" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="14041" width="16" height="16"><path d="M825.568 555.328l-287.392-289.28C531.808 259.648 523.488 256.576 515.2 256.64 514.08 256.544 513.12 256 512 256c-4.672 0-9.024 1.088-13.024 2.88-4.032 1.536-7.872 3.872-11.136 7.136l-259.328 258.88c-12.512 12.48-12.544 32.736-0.032 45.248 6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.624-9.344L480 364.288 480 928c0 17.696 14.336 32 32 32s32-14.304 32-32L544 362.72l236.192 237.728c6.24 6.272 14.496 9.44 22.688 9.44s16.32-3.104 22.56-9.312C838.016 588.128 838.048 567.84 825.568 555.328zM864 192 160 192C142.336 192 128 177.664 128 160s14.336-32 32-32l704 0c17.696 0 32 14.336 32 32S881.696 192 864 192z" p-id="14042"></path></svg></div>')

$('#gotop').click(function () {
    $('html,body').animate({
        scrollTop : '0px'
    }, 800);
}); 
//禁止右键
document.oncontextmenu = function(event){
     if (window.Event) {
         if (event.which == 2 || event.which == 3) {
             return false;
         }
     }
     else {
         if (event.button == 2 || event.button == 3) {
             event.cancelBubble = true;
             event.returnValue = false;
             return false;
         }
     }
 }

$(window).scroll(function(){
if($(window).scrollTop()>400){$("#gotop").removeClass("hideicon")}
else{$("#gotop").addClass("hideicon")}
})

    /*导航*/
    if (window.innerWidth > 999) {
        $(".wp-menu li").on("mouseenter",function(){
            $(this).siblings().find('.sub-menu').stop(true, true).slideUp(150)
            $(this).children('.sub-menu').stop(true, true).slideDown(200);
            $(this).addClass('hover');
     	}).on("mouseleave",function(){
            $(this).children('.sub-menu').stop(true, true).slideUp(150);
            $(this).removeClass('hover');
        });
    }
    $(".wp-navi").find("li").find(".menu-switch-arrow").on("click", function () {
        $(this).toggleClass("hover").parent().children('.sub-menu').slideToggle(250)
            .parent().siblings(".menu-item,.sub-item").children('.sub-menu').slideUp(250);
    });

    var scrolltop = $(window).scrollTop();
    if (scrolltop > 300) {
        $(".header2").addClass("fixed");
        $('.header1').removeClass("fixed");
       $(".sidenav").addClass("open")
    } else {
        $(".header2").removeClass("fixed");
        $('.header1').addClass("fixed")
         $(".sidenav").removeClass("open")
    }
    $(window).scroll(function () {
        var scrolltop = $(window).scrollTop();
        if (scrolltop > 300) {
            $(".header2").addClass("fixed");
            $('.header1').removeClass("fixed")
      $(".sidenav").addClass("open")
        } else {
            $(".header2").removeClass("fixed");
            $('.header1').addClass("fixed")
    $(".sidenav").removeClass("open")
        }


    });
    $('.navbtn').click(function () {
        $(this).parents(".header").toggleClass('navShow')
    });
    /*友情链接下拉*/
    $(".botlinks").each(function (index, el) {
        $(el).find(".links-wrap").hover(function () {
            $(this).addClass('wrap-open').children('.link-items').stop(true, true).slideDown(300);
        }, function () {
            $(this).removeClass('wrap-open').children('.link-items').stop(true, true).slideUp(100);
        });
    });
    $(".backtop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })
});
fontSize();
$(window).resize(function () {
    fontSize();
});

function fontSize() {
    var size;
    var winW = window.innerWidth;
    if (winW > 1920) {
        size = Math.round(winW / 19.2);
    } else if (1366<winW <= 1920) {
          size = 100;
    } else if (999<winW <= 1366) {
          size = Math.round(winW / 13.6);
    }else if (winW <= 999) {
        size = 75;
    }
    $('html').css({
        'font-size': size + 'px'
    })
}