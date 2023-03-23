$(function() {
    //浜у搧鍒楄〃
    $(document).on('mouseover', ".pro-box-ul-box", function() {
        $(this).addClass('pro-box-ul-box1')
        $(this).find('.jindu').css('display', 'block')
    })
    $(document).on('mouseout', ".pro-box-ul-box", function() {
            $(this).removeClass('pro-box-ul-box1')
            $(this).find('.jindu').css('display', 'none')
        })
        /* $(document).on('click','#dosubmit',function{
        	var name = $("#pdetailName").val();
        	var phone = $("#pdetailPhone").val();
        	if(name.length<1 || phone.length<1){
        		alert("鑱旂郴浜哄拰鑱旂郴鏂瑰紡涓嶈兘涓虹┖锛?)
        		return false;
        	}
        	
        }) */
    jQuery("#slideBox").slide({ mainCell: ".bd ul", effect: "fold", autoPlay: true });
    //浜у搧椤甸殧琛屾崲鑹?
    $(".list-com").hover(function() { $(this).toggleClass("list-com-now") });
    //瀵艰埅鏉″綋鍓嶆爮鐩姸鎬?
    $(".nav li a").each(function() {
        $this = $(this);
        if ($this[0].href == String(window.location)) {
            $this.parent().addClass("selected");
        }
    });
    //棣栭〉鍘籦order-bottom
    $('.m-left').each(function() {
            $(this).children('.good').last().css('border-bottom', '0')
        })
        //婊氬姩鍚庝細鏈夌殑鏁堟灉
    $(".go-bottom").on('click', function() {
        $('body,html').animate({ scrollTop: 0 }, "1");
    });
    if ($(".sidebox li").size() > 0) {
        var rel = $(this).attr("name");
        $(".sidebox li").on('click', function() {
            var rel = $(this).attr("name");
            if (rel != "go-bottom") {
                var top = $("." + rel).offset().top - 60;
                window.scrollTo(0, top);
            }
        });
    }
    //鍏充簬鎴戜滑
    $('.tab li').on('mouseover', function() {
        var index = $(this).index();
        $(this).addClass('current').siblings().removeClass('current')
        $('.tab-c .tabbox').hide().eq(index).show()
    })

    if ($(".r-fixed-box").size() > 0) {
        var rightFixed = $('.r-fixed-box').offset().top - 440;
        var rightFixed2 = $('.hot-title').offset().top - 400;
        $(window).scroll(function() {
            var wh = $(window).scrollTop();
            if (wh > rightFixed && wh < rightFixed2) { $('.r-fixed-box').addClass('r-fixed-class') } else { $('.r-fixed-box').removeClass('r-fixed-class') }
        });
    }

    //
    if ($(".backToTop").size() > 0) {
        $(window).scroll(function() {
            var wh = $(window).scrollTop();
            if (wh > 100) { $('.backToTop').css('display', 'block') } else { $('.backToTop').css('display', 'none') }
        });
    }
    $(".backToTop").on('click', function() {
            $("html, body").animate({ scrollTop: 0 }, 300);
        })
        //图文列表变色

    $('.list-tuwen li').mouseover(function() {
        $(this).addClass("list-tuwen-cur");
    })
    $('.list-tuwen li').mouseout(function() {
        $(this).removeClass("list-tuwen-cur");
    })

    //信托公司列表前3个红色
    $('.companyul').each(function() {
        $(this).find('li:lt(3)').children('span').addClass('com-red')
    })

    $('.r-ul li:lt(3)').children('span').addClass('num-y')

    function browserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        console.log(sUserAgent);
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            $("#messageBtn").show();
        }
    }
    browserRedirect();
});

$(document).ready(function() {
    var version = window.navigator.platform;
    if (version.toString() == "Win32") {
        var COOKIE_NAME = "showbox";
        if (!$.cookie(COOKIE_NAME)) {
            $(".auto-approval-modal").hide();
        } else {
            $(".auto-approval-modal").show();
            $(".approval-off-btn").click(function() {
                $(".auto-approval-modal").fadeOut(500);
                if ($('#select_check').prop('checked')) {
                    $.cookie(COOKIE_NAME, 'ishide', {
                        expires: 1
                    });
                } else {
                    $.cookie(COOKIE_NAME, 'ishide', {});
                }
            })
        }
    }
})