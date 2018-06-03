 $(function() {
  $('.testimonials__carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.testimonials__carousel2'
  });

  $('.testimonials__carousel2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.testimonials__carousel',
    arrows: false,
  });

  $('.testimonials__carousel2-prev').click(function(){
    $('.testimonials__carousel2').slick('slickPrev');
  })

  $('.testimonials__carousel2-next').click(function(){
    $('.testimonials__carousel2').slick('slickNext');
  })

 });

	