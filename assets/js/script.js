$(function(){
    // $('img').on('mouseover',function(){
    //     $(this).addClass('img-big');
    // })  
    // $('img').on('mouseleave',function(){
    //     $(this).removeClass('img-big');
    // })

    $('.btn').on('click',function(){
        $('.btn').text('809-989');
        })
    
    $('#look').on('click',function(){
        $('#option').slideToggle();
    })


    $('.slider1').slick({
        // autoplay:true,
        // autoplaySpeed:5000,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 780, //399px以下のサイズに適用
              settings: {
              slidesToShow: 2,
              },
            },
          ],
      });
      
      $('.slider2').slick({
        // autoplay:true,
        // autoplaySpeed:5000,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 780, //399px以下のサイズに適用
              settings: {
              slidesToShow: 1,
              },
            },
          ],
      });
    
    //   $('img').on('mouseover', function () {
    //     $(this).css('opacity', 0.7);
    //   });
    
    //   $('img').on('mouseleave', function () {
    //     $(this).css('opacity', 1);
    //   });
  
  
  
  })