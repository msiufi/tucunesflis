$(document).ready(function () {
    $('.customer-logos').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1500,
      arrows: true,
      dots: true,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
          arrows: false
        }
      }]
    });
  });