/* Goals:
TODO: Dropdown menu on click
TODO: Read more ('Read more..' and 'Read less..')
TODO: Gallery using arrows, thumbnails, and keyboard. Border should be around the 'active' thumbnail. 
*/

$(() => { // shorthand for $(document).ready();
  // > Dropdown menu on click
  if ($('.mainMenu > ul')) {
    console.log('There are menus'); // console check if run

    $('.mainMenu > a').click(function () {
      if ($(this).next().is(':visible')) { // if clicking on the same thing, hide it
        $(this).next().slideToggle(200);
      } else {
        $('.mainMenu > ul').slideUp(200); // hide all others
        $(this).next().slideToggle(200);
      }
    });

  }

  // > Read more
  if ($('#readmore')) {
    console.log('There are readmores'); // console check if run

    $('#readmore').click(function () {
      if ($('#ekstra').is(':hidden')) {
        $('#readmore').text('Read less..');
      } else {
        $('#readmore').text('Read more..');
      }
      $('#ekstra').slideToggle(200);
    });
  }

  // > Gallery
  if ($('#fotogallery')) {
    console.log('There are galleries'); // console check if run

    // $('#backarrow')
    // $('#forwardsarrow')
    // $('#fotogallery')
    // $('.thumbs img')

    let index = 0;

    $('#forwardsarrow').click(function () {
      changePhoto('next')
    });

    $('#backarrow').click(function () {
      changePhoto('back')
    });

    $('.thumbs img').click(function () {
      changePhoto($(this));
    });

    function changePhoto(direction) {
      if (direction == 'next') {
        if (index < $('.thumbs img').length - 1) {
          index++;
        } else {
          index = 0;
        }
      } else if (direction == 'back') {
        if (index > 0) {
          index--;
        } else {
          index = $('.thumbs img').length - 1;
        }
      } else {
        index = $('.thumbs img').index(direction);
      }

      let src = $('.thumbs img').eq(index).attr('src');
      $('#photo').fadeOut(200, function() {
        $('#photo').attr('src', src).fadeIn(200)
      });

      $('.thumbs img').removeClass('active');
      $('.thumbs img').eq(index).addClass('active');
    }



  }

});