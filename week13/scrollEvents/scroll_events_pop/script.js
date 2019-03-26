$(function() {
  var scrollTop = $(window).scrollTop(); //pixels from top, updates on scroll
  var height = $(window).height(); //window height, updates on resize
  var pageHeight = $(document).height(); //total height of entire document
  var bundLimit = ($('footer').offset().top - height); //at what height is the function triggered
  var ignoreTrigger = false;

  $(document).on('scroll', function (e) {
    scrollTop = $(window).scrollTop();

    if (scrollTop >= 50) {
      $('header').addClass('minimer');
    }

    if (scrollTop >= bundLimit && ignoreTrigger == false) {
      $("#pop-ind").addClass('slide_pop_ind');
    }

    if (scrollTop <= bundLimit) {
      $("#pop-ind").removeClass('slide_pop_ind');
    }
  });

  $('#pop-ind a').on('click', function (e) {
    e.preventDefault();
    $('#pop-ind').removeClass('slide_pop_ind');
    ignoreTrigger = true;
  })
})