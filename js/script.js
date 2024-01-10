$(function(){


  /* WEB - nav hover */

  $('#submenu').hide()

  $('#LNB').hover(function(){
    $('#submenu').slideDown(400);
  }, function(){
    $('#submenu').slideUp(400);
  });

  $('#submenu').hover(function(){
    $('#submenu').show()
  });


  /* MOBILE - nav hover */

  $('.mo_lnb').hide();

  $('#mobile > ul > li:last-child').click(function(){
    $('.mo_lnb').slideToggle(400);
  });
  

  $('.mo_lnb > li > a').on("click", function () {
    $('.mo_lnb > li > a').next('.submenu').not($(this).next('.submenu').slideToggle(400)).slideUp(400);

    return false;
  });


  /* Review Buttons */

  $('.closeReview').hide();

  $('.moreReview').click(function(){
    $('.reviewCard > div:nth-child(4)').css('display','block');
    $('.reviewCard > div:nth-child(5)').css('display','block');
    $('.reviewCard > div:nth-child(6)').css('display','block');
    $(this).hide();
    $('.closeReview').show();
  });

  $('.closeReview').click(function(){
    $('.reviewCard > div:nth-child(4)').css('display','none');
    $('.reviewCard > div:nth-child(5)').css('display','none');
    $('.reviewCard > div:nth-child(6)').css('display','none');
    $(this).hide();
    $('.moreReview').show();
  });


  /* class Button */

  $('.tapConts > ul > li').hide()

  $('.viewallBtn').click(function(){
    $('.tapConts > ul > li').show()
  })

  $('.strategyBtn').click(function(){
    $('.tapConts > ul > li').hide()
    $('.strategy').show()
  })

  $('.digitalBtn').click(function(){
    $('.tapConts > ul > li').hide()
    $('.digital').show()
  })

  $('.industryBtn').click(function(){
    $('.tapConts > ul > li').hide()
    $('.industry').show()
  })

  $('.workerBtn').click(function(){
    $('.tapConts > ul > li').hide()
    $('.worker').show()
  })

  $('.procedureBtn').click(function(){
    $('.tapConts > ul > li').hide()
    $('.procedure').show()
  })

  $('.highschoolBtn').click(function(){
    $('.tapConts > ul > li').hide()
    $('.highschool').show()
  })




  var swiper3 = new Swiper('.swiper3', {
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination3',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
    loop: true
  });

});