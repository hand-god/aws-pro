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
                alert('认证成功');

            }
        },
        error: function(error) {
            console.log(error);
        }
    });
}