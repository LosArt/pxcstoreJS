 $('#product-slidermain').slick({
  asNavFor: '#product-slidernav',
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<span class="slick-prev prevpostslider"><</span>',
  nextArrow: '<span class="slick-next prevpostslider">></span>',
  fade: true,
});

$('#product-slidernav').slick({
  asNavFor: '#product-slidermain',
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
});

// ZOOM
$('.zoom').zoom();

// STYLE GRAB
$('.zoom--grab').zoom({ on:'grab' });

// STYLE CLICK
$('.zoom--click').zoom({ on:'click' });	

// STYLE TOGGLE
$('.zoom--toggle').zoom({ on:'toggle' });

$('#product-slidermain').slickLightbox({
  itemSelector        : '.zoom img',
  navigateByKeyboard  : true,
  src: 'src',
  lazy: true
});
