/* Areas that need js
   Cast character picker
   Music video picker */

/* Music */
// Listen for clicks on the thumbnails
var videoOptions = document.querySelectorAll('.videoList img');
var videoOptionsArray = Array.from(videoOptions);
var currentVideo = document.querySelector('.video iframe');

for (var i = 0; i < videoOptions.length; i++) {
  videoOptions[i].addEventListener('click', function(e) {
    activeThumbnail(e);
    activeVideo(e);
  });

  videoOptions[i].addEventListener('touchstart', function(e) {
    activeThumbnail(e);
    activeVideo(e);
  });
}

// Setting the clicked thumbnail to active
function activeThumbnail(active) {
  for (var i = 0; i < videoOptions.length; i++) {
    videoOptions[i].classList.remove("active");
  }
  active.target.classList.add("active");

}

// Setting the large video to the clicked video
function activeVideo(active) {
  video = active.target.dataset.video;
  videoURL = "https://www.youtube-nocookie.com/embed/" + video;
  currentVideo.setAttribute('src', videoURL);
}

/* Cast */
// Array
var characters = [
  ["moana", `<h3>Moana</h3>

  <p>Moana is a teenager who dreams of becoming a master wayfinder.</p>
  <p>Voiced by Auli’i Carvalho.</p>

  <p class="floatLeft">Is Moana your favorite character? Show your love by buying some Moana merchandise!</p>

  <a href="https://www.shopdisney.com/movies-shows/disney/moana" target="_blank" class="cta secondary floatRight">Moana Merch</a>`, "moana.jpg"],
  ["maui", `<h3>Maui</h3>

  <p>Maui is half god, half mortal, all awesome.</p>
  <p>Voiced by Dwayne Johnson.</p>

  <p class="floatLeft">Is Maui your favorite character? Show your love by buying some Maui merchandise!</p>

  <a href="https://www.shopdisney.com/movies-shows/disney/moana" target="_blank" class="cta secondary floatRight">Maui Merch</a>`, "maui.jpg"],
  ["kakamora", `<h3>Kakamora</h3>

  <p>The Kakamora are an intense team of crazy, coconut-armored pirates who will stop at nothing to get what they want.</p>

  <p class="floatLeft">Is Kakamora your favorite character? Show your love by buying some Kakamora merchandise!</p>

  <a href="https://www.shopdisney.com/movies-shows/disney/moana" target="_blank" class="cta secondary floatRight">Kakamora Merch</a>`, "kakamora.jpg"],
  ["heihei", `<h3>Heihei</h3>

  <p>Heihei is one dumb rooster, the village idiot, in fact. When the clueless chicken accidentally stows away on Moana’s canoe, he lands a front-row seat for her epic journey.</p>

  <p class="floatLeft">Is Heihei your favorite rooster? Show your love by buying some Heihei merchandise!</p>

  <a href="https://www.shopdisney.com/movies-shows/disney/moana" target="_blank" class="cta secondary floatRight">Heihei Merch</a>`, "heihei.jpg"],
  ["pua", `<h3>Pua</h3>

  <p>Pua is Moana’s loyal pet pig with puppy energy and an innocent playful spirit.</p>

  <p class="floatLeft">Is Pua your favorite pig? Show your love by buying some Pua merchandise!</p>

  <a href="https://www.shopdisney.com/movies-shows/disney/moana" target="_blank" class="cta secondary floatRight">Pua Merch</a>`, "pua.jpg"],
  ["chief tui and sina", `<h3>Chief Tui & Sina</h3>

  <p>Chief Tui is the gregarious and well-respected leader of the people of Motunui Island, and Moana's father. He wants Moana to follow in his footsteps as leader of their people.</p><p>Sina always has her daughter's back. Playful, sharp and strong-willed, Sina appreciates Moana's longing to be on the water, but also wants to protect her daughter from the fabled dangers beyond the reef</p><p>Voiced by Temuera Morrison and Nicole Scherzinger, repsectively</p>

  <p class="floatLeft">Do you love Chief Tui & Sina? Show your love by buying some Chief Tui & Sina merchandise!</p>

  <a href="https://www.shopdisney.com/movies-shows/disney/moana" target="_blank" class="cta secondary floatRight">Parents Merch</a>`, "parents.jpg"]
];

var characterOptions = document.querySelectorAll('.characters_available li');
var arrayCharacterOptions = Array.from(characterOptions);

var index = 3;

for (var i = 0; i < characterOptions.length; i++) {
  characterOptions[i].addEventListener('click', function(e) {
    var active = e.target.getAttribute("alt").toLowerCase();
    var pos = arrayCharacterOptions.indexOf(e.target.parentElement);

    index = pos;

    charaActive(pos);
  });

  characterOptions[i].addEventListener('touchstart', function(e) {
    var active = e.target.getAttribute("alt").toLowerCase();
    var pos = arrayCharacterOptions.indexOf(e.target.parentElement);

    index = pos;

    charaActive(pos);
  });
}

// left and right buttons
document.querySelector('#before').addEventListener('click', function(e) {
  change("before");
});
document.querySelector('#after').addEventListener('click', function(e) {
  change("after");
});

var startTouch;
var endTouch;
document.querySelector('.characters_activeImage').addEventListener("touchstart", function(e){
  startTouch = e.changedTouches[0].clientX;
});
document.querySelector('.characters_activeImage').addEventListener("touchend", function(e){
  endTouch = e.changedTouches[0].clientX;
  swipe();
});

function swipe(){
  var diff = startTouch - endTouch;

  console.log(diff > 0);

  if (diff == 0) {
    return;
  } else if (diff > 0) {
    change("after");
  } else if (diff < 0) {
    change("before");
  }
}

// left and right keyboard
document.addEventListener('keydown', function(e) {
  switch (e.key) {
    case "ArrowLeft":
      change("before");
      break;
    case "ArrowRight":
      change("after");
      break;
  }
});

// getting index if its by keyboard or button press
function change(direction) {
  if (direction === "before") {
    if (index > 0) {
      index--;
    } else {
      index = characterOptions.length - 1;
    }
  } else {
    if (index < characterOptions.length - 1) {
      index++;
    } else {
      index = 0;
    }
  }

  charaActive(index);
}

// changing thumbnail and display image
function charaActive(index) {
  //thumbnail active border
  for (var i = 0; i < characterOptions.length; i++) {
    characterOptions[i].classList.remove("active");
  }
  characterOptions[index].classList.add("active");

  //changing info
  var charImage = document.querySelector('.characters_activeImage');
  var charInfo = document.querySelector('.characters_activeText');

  charImage.style.backgroundImage = "url('./images/" + characters[index][2] + "')";
  charInfo.innerHTML = characters[index][1];
}
