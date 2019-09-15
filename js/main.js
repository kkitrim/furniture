$(document).ready(function () {

  /* mobile menu */
  $(".btn_lnb").click(function() {
      $(".btn_lnb").toggleClass("active");
      $(".span_top").toggleClass("span1");
      $(".span_middle").toggleClass("span2");
      $(".span_bottom").toggleClass("span3");
      $(".nav_lnb").toggleClass("active");
  });
  
  /* slider */
  $(".ul_slider").slick({
      dots: true,
      infinite: true
  });



});