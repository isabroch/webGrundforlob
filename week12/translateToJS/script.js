function gallery() {
  let button = document.querySelector('#fotomenu button');
  let displayPhoto = document.querySelector('#hovedfoto');
  let thumbnails = document.querySelectorAll('#thumbs img');

  let photo;
  let active;

  // if there is a gallery button, then run the gallery on click
  if (!button.classList.contains('hidden')) {
    button.addEventListener('click', function () {
      // hide gallery button
      button.classList.add('hidden');

      // show the large image
      displayPhoto.classList.remove('hidden');

      // set large image to the last thumbnails
      active = thumbnails[thumbnails.length - 1];
      photo = active.getAttribute('src');
      displayPhoto.setAttribute('src', photo);

      // give active thumbnail full opacity
      active.classList.add('active');

      // if the large display image is shown, then thumbnails can be clicked
      if (!displayPhoto.classList.contains('hidden')) {
        console.log('large photo is shown');

        thumbnails.forEach(thumbnail => {
          thumbnail.style.cursor = 'pointer';
          thumbnail.addEventListener('click', (e) => {
            // remove active class from all thumbnails
            thumbnails.forEach(thumbnail => {
              thumbnail.classList.remove('active');
            });

            // give clicked image active
            active = e.target;
            photo = active.getAttribute('src');
            displayPhoto.setAttribute('src', photo);
            active.classList.add('active');
            
          });
        });

      }
    });
  }
}

gallery();