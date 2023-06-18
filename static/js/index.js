// 预约

// var axios = require('axios');
// var myImport = function() {
//     var script = document.createElement("script");
//     script.setAttribute("type", "text/javascript");
//     script.setAttribute("src", "static/js/axios.min.js"); // 引用文件的路径
//     document.getElementsByTagName('head')[0].appendChild(script); // 引用文件
// }
// window.onload = function() {
//     myImport();
// }

// function reservation(username, phone, edu) {
//     var productName = "测试0602";
//     var name = "yzj";
//     var telephone = "17376555729";
//     var amount = 2000;

//     var data = JSON.stringify({
//         "productName": productName,
//         "name": name,
//         "telephone": telephone,
//         "amount": amount
//     });

//     var headers = {
//         'Content-Type': 'application/json'
//     };

//     var url = 'http://47.106.246.230:9090/product/appointment';

//     var config = {
//         method: 'post',
//         url: url,
//         headers: headers,
//         data: data
//     };

//     axios(config)
//         .then(function(response) {
//             console.log('成功');
//             console.log(JSON.stringify(response.data));
//         })
//         .catch(function(error) {
//             console.log(error);
//         });
// }


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