// The following code is divided for these main sections:
// Info
// Others
// Stills

// Info
function readMore(clicked) {
  var readmore = document.getElementById('read_more');

  if (readmore.style.display !== "block") {
    readmore.style.display = "block";
    clicked.innerHTML = "Read Less..";
  } else {
    readmore.style.display = "none";
    clicked.innerHTML = "Read More..";
  }
}

// Others
function swap(movie) {
  var moviePoster = "images/posters/" + movie + ".jpg";
  var displayed = document.getElementById('poster');

  displayed.setAttribute('src', moviePoster);
}

// Stills
// nyFoto() is the function that actually sets the image and highlights the thumbnail
// still() is the function for clicking on the thumbnails to get their number
// backwards() and forwards() is the function for moving one up or one down
// document.onkeydown reads any keyboard events

var thumbArray = document.querySelectorAll('#thumbs img');
var displayedStill = document.querySelector('#photoseries');
var nyFoto;
var thumb;
var index = 1;

// Setting image based on the number given.
function nyFoto(foto) {
  photo = "images/stills"+foto+".jpg";
  displayedStill.setAttribute('src', photo);

  thumb = thumbArray[foto-1];
  for (var i = 0; i < thumbArray.length; i++) {
    thumbArray[i].classList.remove("active");
  }
  thumb.classList.add("active");
}

// Move photo to the clicked thumbnail.
function still(num) {
  index = num;
  nyFoto(num);
}

// Move one photo forward.
function forwards() {
  if (index < thumbArray.length) {
    index++;
  } else {
    index = 1;
  }

  nyFoto(index);
}

// Move one photo back.
function backwards() {
  if (index > 1) {
    index--;
  } else {
    index = thumbArray.length;
  }

  nyFoto(index);
}

// When pressing left or right key, go back or forward in gallery.
document.onkeydown = function(e) {
  switch(e.key) {
    case "ArrowLeft":
      backwards();
      break;
    case "ArrowRight":
      forwards();
      break;
  }
}
