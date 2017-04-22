




$(document).ready(function () {
  $('.head_nav').delegate('a','hover',function (e) {
    $(this).toggleClass('head_nav_a').toggleClass('head_nav_a2');
    $(this).children('.nav_icon').toggle();
  })
})
