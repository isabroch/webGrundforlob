// if .gallery exists on page, then run!
if (document.querySelector('.gallery')) {
  var largeImage = document.querySelector(".gallery .imageWrapper img");

  var thumbList = document.querySelectorAll(".thumbnails .thumbWrapper img");
  var thumbArray = Array.from(thumbList);
  var thumb;

  var index = 0;

  // adds click and touch event handler and runs thumbIndex()
  for (var i = 0; i < thumbList.length; i++) {
    thumb = thumbList[i];

    thumb.addEventListener('click', function(e) {
      thumbIndex(e.target);
    });

    thumb.addEventListener('touchstart', function(e) {
      thumbIndex(e.target);
    });
  }

  // adds listener for keyboard left and right, runs prev() or next()
  document.addEventListener('keydown', function(e) {
    switch (e.key) {
      case "ArrowLeft":
        prev();
        break;
      case "ArrowRight":
        next();
        break;
    }
  });

  // adds listener for swiping left and right OR pressing left side or right side, runs prev() or next()
  var xStart;
  var xEnd;
  var xDiff;

  var imageWidth;
  var imageLeft;
  var halfPoint;

  largeImage.addEventListener('touchstart', function(e) {
    xStart = e.changedTouches[0].clientX;

  });

  largeImage.addEventListener('touchend', function(evt) {
    xEnd = evt.changedTouches[0].clientX;

    // swipe right = negative(<0), swipe left = positive(>0)
    xDiff = xStart - xEnd;


    if (xDiff < 0) {
      prev();
    } else if (xDiff > 0) {
      next();
    }

    // pressing on left side: xDiff = 0, xStart is less than half of image width
    imageWidth = largeImage.parentElement.offsetWidth;
    imageLeft = largeImage.parentElement.offsetLeft;
    halfPoint = (imageWidth / 2) + imageLeft;

    // using -/+50 so that center clicks do nothing
    if(xDiff == 0 && xStart < halfPoint - 40) {
      prev();
    } else if (xDiff == 0 && xStart > halfPoint + 60) {
      next();
    }

    // stops click from running if touch is used
    evt.preventDefault();
  });

  // clicking on left or right side with mouse
  largeImage.addEventListener('click', function(event){
    xStart = event.clientX;

    imageWidth = largeImage.parentElement.offsetWidth;
    imageLeft = largeImage.parentElement.offsetLeft;
    halfPoint = (imageWidth / 2) + imageLeft;

    if (xStart < halfPoint - 40) {
      prev();
    } else if (xStart > halfPoint + 60) {
      next();
    }

  })

  var leftArrow = document.querySelector('.leftArrow i');
  var rightArrow = document.querySelector('.rightArrow i');

  leftArrow.addEventListener('click', function(e){
    prev();
  });
  rightArrow.addEventListener('click', function(e){
    next();
  });

  //on click of any thumb, change index to it's position in array
  function thumbIndex(active) {
      index = thumbArray.indexOf(active);

      var imgsrc = active.getAttribute('src');
      changePhoto(imgsrc);
      highlightThumb();
  }

  //on click of right arrow, increase index by one
  function next() {
    if (index < thumbList.length-1) {
      index++;
    } else {
      index = 0;
    }

    var active = thumbList[index];
    var imgsrc = active.getAttribute('src');
    changePhoto(imgsrc);
    highlightThumb();
  }

  //on click of left arrow, increase index by one
  function prev() {
    if (index > 0) {
      index--;
    } else {
      index = thumbList.length-1;
    }

    var active = thumbList[index];
    var imgsrc = active.getAttribute('src');
    changePhoto(imgsrc);
    highlightThumb();
  }

  //change main photo to the indexed photo
  function changePhoto(file) {
    largeImage.setAttribute('src', file);
  }

  //apply 'active' class to the current shown thumb wrapper, and remove from any other thumbnails
  function highlightThumb() {
    //removing all .active from every thumbnail
    for (var i = 0; i < thumbList.length; i++) {
      thumbList[i].parentElement.classList.remove('active');
    }

    //giving indexed thumbnail .active
    thumbList[index].parentElement.classList.add('active');
  }

}
