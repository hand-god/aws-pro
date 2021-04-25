// 点击top-right
$('.topRight1').on('click', function () {
  $('.topLeft1').show();
  $('.topLeft2').hide();
  $('.topRight1').hide();
  $('.topRight2').show();

  $('.tab1[data-v-887ad70c]').hide();
  $('.tab1[data-v-4ce1c7ee]').show();
})
// 点击top-left
$('.topLeft1').on('click', function () {
  $('.topLeft1').hide();
  $('.topLeft2').show();
  $('.topRight1').show();
  $('.topRight2').hide();

  $('.tab1[data-v-887ad70c]').show();
  $('.tab1[data-v-4ce1c7ee]').hide();
})

// 点击左边标签
var tabLeftLength = $('#tabNav-ul[data-v-887ad70c]').find('li').length;
for (let i = 0; i < tabLeftLength; i++) {
  $(`#tabNav-ul[data-v-887ad70c]`).find(`li:eq(${i})`).on('click', function () {//点击左边的tab标签
    console.log(i);
    $(`#tabNav-ul[data-v-887ad70c]`).find(`.clickPer`).show();//所有-还原-底色
    $(`#tabNav-ul[data-v-887ad70c]`).find(`.clickLast`).hide();//所有-还原-底色
    $(`#tabNav-ul[data-v-887ad70c]`).find(`.textPer`).show();//所有-还原-文字
    $(`#tabNav-ul[data-v-887ad70c]`).find(`.textLast`).hide();//所有-还原-文字
    $(`#activeBox[data-v-887ad70c]`).find(`div`).hide();//所有-隐藏-图片
    
    $(`#tabNav-ul[data-v-887ad70c]`).find(`li:eq(${i}) .clickPer`).hide();//当前-变化-底色
    $(`#tabNav-ul[data-v-887ad70c]`).find(`li:eq(${i}) .clickLast`).show();//当前-变化-底色
    $(`#tabNav-ul[data-v-887ad70c]`).find(`li:eq(${i}) .textPer`).hide();//当前-变化-文字
    $(`#tabNav-ul[data-v-887ad70c]`).find(`li:eq(${i}) .textLast`).show();//当前-变化-文字
    $(`#activeBox[data-v-887ad70c]`).find(`div:eq(${i})`).show();//当前-显示-图片
    $(`#tabNav-ul[data-v-887ad70c]`).find(`li:eq(${i}) .newspan`).hide();//当前-红点-隐藏
  })
}

// 点击右边标签
var tabRightLength = $('#tabNav-ul[data-v-4ce1c7ee]').find('li').length;
for (let i = 0; i < tabRightLength; i++) {
  $(`#tabNav-ul[data-v-4ce1c7ee]`).find(`li:eq(${i})`).on('click', function () {//点击左边的tab标签
    console.log(i);
    $(`#tabNav-ul[data-v-4ce1c7ee]`).find(`.clickPer`).show();//所有-还原-底色
    $(`#tabNav-ul[data-v-4ce1c7ee]`).find(`.clickLast`).hide();//所有-还原-底色
    $(`#tabNav-ul[data-v-4ce1c7ee]`).find(`.textPer`).show();//所有-还原-文字
    $(`#tabNav-ul[data-v-4ce1c7ee]`).find(`.textLast`).hide();//所有-还原-文字
    $(`#activeBox2[data-v-4ce1c7ee]`).find(`div`).hide();//所有-隐藏-图片/公告
    
    $(`#tabNav-ul[data-v-4ce1c7ee]`).find(`li:eq(${i}) .clickPer`).hide();//当前-变化-底色
    $(`#tabNav-ul[data-v-4ce1c7ee]`).find(`li:eq(${i}) .clickLast`).show();//当前-变化-底色
    $(`#tabNav-ul[data-v-4ce1c7ee]`).find(`li:eq(${i}) .textPer`).hide();//当前-变化-文字
    $(`#tabNav-ul[data-v-4ce1c7ee]`).find(`li:eq(${i}) .textLast`).show();//当前-变化-文字
    $(`#notice${i+1}`).show();//当前-显示-图片/公告
  })
}
// $('.topLeft').on('click', function () {
  
// })