// JavaScript Document

let thumbnails = document.querySelectorAll('.fbox img');
let lightbox = document.querySelector('#lightbox');
let lightboxMask = document.querySelector('#lightbox_mask');
let lightboxImage = document.querySelector('#lightbox img');
let index = 0;
let caption = document.querySelector('.caption');
let thumbnailsCaptions = ["Morning in Montmartre", "Le Pure Café", "Multicultural Sandwich Bar", "Street Art (Man)", "Street Art (Flying)", "Street Art (Boar)", "Art Nouveau Bakery", "Dalí mural"];

// click a thumbnail to show lightbox
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', (e) => {
    // define img clicked as active
    let active = e.target;
    let image = active.getAttribute('src');

    // change lightbox img to active src
    lightboxImage.setAttribute('src', image);

    // show lightbox + mask
    lightbox.classList.remove('hidden');
    lightboxMask.classList.remove('hidden');

    // set index for sake of left/right functions
    index = [...thumbnails].indexOf(e.target);
    console.log(index);

    // change caption
    caption.innerHTML = thumbnailsCaptions[index];
  });
});

// click outside of image to hide lightbox
lightboxMask.addEventListener('click', (e) => {
  lightbox.classList.add('hidden');
  lightboxMask.classList.add('hidden');
});

// function for changing photo that will be used with clicking left or right
function changePhoto(direction) {
  if (direction == 'next') {
    if (index < thumbnails.length-1) {
      index++;
    } else {
      index = 0;
    }
  } else if (direction == 'back') {
    if (index > 0) {
      index--;
    } else {
      index = thumbnails.length-1;
    }
  }

  let active = thumbnails[index];
  let image = active.getAttribute('src');

  // change lightbox img to active src
  lightboxImage.setAttribute('src', image);

  // change caption
  caption.innerHTML = thumbnailsCaptions[index];
}

// click left or right arrow
document.querySelectorAll('.arrow').forEach(arrow => {
  arrow.addEventListener('click', (e) => {  
    if (e.target.classList.contains('next')) {
      changePhoto('next');
    }
    if (e.target.classList.contains('back')) {
      changePhoto('back');
    }
  });
});