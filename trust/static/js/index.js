// 认证
function reservation(productName, username, phone, edu) {
    var productName = productName;
    var name = username;
    var telephone = phone;
    var amount = edu;

    var data = JSON.stringify({
        "productName": productName,
        "name": name,
        "telephone": telephone,
        "amount": amount
    });

    $.ajax({
        url: 'http://47.106.246.230:9090/product/appointment',
        type: 'POST',
        contentType: 'application/json',
        data: data,
        success: function(response) {
            console.log(JSON.stringify(response));
            if (response.code == 200) {
                $('body,html').removeClass('disable-scrolling');
                $("#custom-dialog").hide();
                alert('操作成功');
            }
        },
        error: function(error) {
            console.log(error);
        }
    });
}

/**获取url参数**/
function GetQuery(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
}

// 用户信息登记框
function showRegistration() {
    $('body,html').addClass('disable-scrolling');
    $("#custom-dialog").show();
}