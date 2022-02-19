$(function () {
  // $('img').on('mouseover',function(){
  //     $(this).addClass('img-big');
  // })  
  // $('img').on('mouseleave',function(){
  //     $(this).removeClass('img-big');
  // })

  $('.slider1').slick({
    // autoplay:true,
    // autoplaySpeed:5000,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1
  });
  
  $('.slider2').slick({
    // autoplay:true,
    // autoplaySpeed:5000,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

  $('img').on('mouseover', function () {
    $(this).css('opacity', 0.7);
  });

  $('img').on('mouseleave', function () {
    $(this).css('opacity', 1);
  });






})