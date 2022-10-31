$( function() {
 $( "#CheckIn" ).datepicker();
 $( "#CheckOut" ).datepicker();

  $('.voyage-slider').slick({
   dots :true,
   infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
  });

} );