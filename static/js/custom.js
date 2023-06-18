var getCodeisWaiting = false;
$(document).ready(function() {
    var ajaxOrderUrl = $("input[name='ajax_order_url']").val();
    var goodsId = $("input[name='goods_id']").val();
    var verifyFlag = $("input[name='verify_flag']").val();
    if ($("#custom-dialog").is(":visible")) {
        $('body,html').addClass('disable-scrolling');
    }
    $("#close").click(function() {
        if ($("#dialog-auth").is(":hidden")) {
            $("#custom-dialog").hide();
        } else {
            history.go(-1);
        }
    });

    //认证
    $("#authBtn").click(function() {
        var isContinue = true;
        var name = $("input[name='name']").val().trim();
        if (!name || name == '' || name.length < 2) {
            isContinue = false;
            $("input[name='name']").parent().find("p").html('<i class="fa fa-exclamation-triangle"></i>请输入正确的姓名！');
        } else {
            $("input[name='name']").parent().find("p").html('');
        }
        var phone = $("input[name='phone']").val().trim();
        if (!phone || phone == '' || !(/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone))) {
            isContinue = false;
            $("input[name='phone']").parent().find("p").html('<i class="fa fa-exclamation-triangle"></i>请输入正确的手机号！');
        } else {
            $("input[name='phone']").parent().find("p").html('');
        }


        var productName = document.getElementsByClassName("title")[0].childNodes[0].nodeValue;
        var edu = {};
        edu.value = 666;
        if (isContinue) {
            // reservation(productName, name.value, phone.value, edu.value);
            reservation(productName, name, phone, edu.value);
        }
        // if (isContinue) {
        //     //提交申请
        //     $.post(
        //         ajaxOrderUrl, { type: 0, name: name, phone: phone, code: code, goods_id: goodsId, verify_flag: verifyFlag },
        //         function(data) {
        //             if (data.error == 0) {
        //                 $('body,html').removeClass('disable-scrolling');
        //                 $("#custom-dialog").hide();
        //             } else {
        //                 $("input[name='code']").parent().find("p").html('<i class="fa fa-exclamation-triangle"></i>' + data.info);
        //                 //alert(data.info);
        //                 shake("custom-dialog");
        //             }
        //         });
        // } else {
        //     //抖动窗口
        //     shake("custom-dialog");
        // }
    });
    //预约
    $("#orderBtn").click(function() {
        var newWeb = window.open('_blank');
        newWeb.location = 'https://www14.53kf.com/webCompany.php?kf_sign=zA3NjMTY4NAzMTEyNTQxNDEzMDkwMDA3NzI3NjUyOTE=&arg=10765291&style=1&guest_id=11594631568001&language=cn&charset=GBK&referer=http%3A%2F%2Fwww.newyifun.com%2Findex.html&keyword=http%3A%2F%2F127.0.0.1%3A5500%2F&tpl=crystal_blue&uid=2200019ad925c20abe1e71c5eb2270ec&is_group=&tfrom=1&timeStamp=1687076047684&ucust_id=';
    });
});

function shake(o) {
    var $panel = $("#" + o);
    box_left = ($(window).width() - $panel.width()) / 2;
    $panel.css({ 'left': box_left, 'position': 'fixed' });
    for (var i = 1; 4 >= i; i++) {
        $panel.animate({ left: box_left - (40 - 10 * i) }, 50);
        $panel.animate({ left: box_left + 2 * (40 - 10 * i) }, 50);
    }
}

function getCode() {
    if (getCodeisWaiting) {
        return;
    }
    var phoneNumber = $("input[name='phone']").val().trim();
    if (!phoneNumber || phoneNumber == '' || !(/^1(3|4|5|6|7|8|9)\d{9}$/.test(phoneNumber))) {
        $("input[name='phone']").parent().find("p").html('<i class="fa fa-exclamation-triangle"></i>请输入正确的手机号！');
        //抖动窗口
        shake("custom-dialog");
        return;
    } else {
        $("input[name='phone']").parent().find("p").html('');
    }

    $("#getCodeText").text("发送中...");
    getCodeisWaiting = true;
    $("#getCodeText").css("color", "blue");
    //示例用定时器模拟请求效果
    //tel,code_type,verify_flag
    $.post(
        $("input[name='ajax_getcode_url']").val(), { tel: phoneNumber, code_type: 0, verify_flag: $("input[name='verify_flag']").val() },
        function(data) {
            if (data.error == 0) {
                //alert(data.data);
                setTimer();
            } else {
                getCodeisWaiting = false;
                $("#getCodeText").text("获取验证码");
                $("#getCodeText").css("color", "red");
            }
        });
}

function setTimer() {
    console.log("setTimer==>");
    var holdTime = 60;
    $("#getCodeText").text("重新获取(60)");
    Timer = setInterval(() => {
        if (holdTime <= 0) {
            getCodeisWaiting = false;
            $("#getCodeText").text("获取验证码");
            $("#getCodeText").css("color", "blue");
            clearInterval(Timer);
            return;
        }
        $("#getCodeText").text("重新获取(" + holdTime + ")");
        holdTime--;
    }, 1000)
}