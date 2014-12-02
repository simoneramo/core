$(document).ready(function(){
  $('.o-burger').on('click',function(){
    $(this).toggleClass('--opened');
  });

  $('.js-z-index > div').on('click',function(){
    $(this).toggleClass('+u-z-5');
  });
});

