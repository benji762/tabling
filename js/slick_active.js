$(document).ready(function() {
	$(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
		arrows : false,
        autoplay : true,
      });

      $(".review_slider_1").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
		    arrows : false,
        dots:true,
      });
});