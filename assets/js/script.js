$(function(){
    $('img').on('mouseover',function(){
        $(this).addClass('img-big');
    })  
    $('img').on('mouseleave',function(){
        $(this).removeClass('img-big');
    })

    $('.btn').on('click',function(){
        $('.btn').text('809-989');
        })
    
    $('#look').on('click',function(){
        $('#option').slideToggle();
    })
  
  
  
  })