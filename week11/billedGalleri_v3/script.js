function charChange(clicked) {
  var who = clicked.querySelector("img");
  var whoImage = who.getAttribute("src");
  var whoName = who.getAttribute("alt");

  var charInfoBox = document.querySelector(".character." + whoName);
  var charInfo = charInfoBox.innerHTML;

  var options = document.querySelectorAll("#characterOptions li");
  var image = document.querySelector("#characterImage");
  var info = document.querySelector("#characterInfo");

  var clearImage = "https://via.placeholder.com/200x300";
  var clearInfo = document.querySelector(".character.Clear").innerHTML

  if(clicked.classList == "active") {
    // Removing '.active' from all options
    for (var i = 0; i < options.length; i++) {
      options[i].classList.remove("active");
    }

    // Changing main image and information
    image.setAttribute("src", clearImage);
    info.innerHTML = clearInfo;

  } else {
    // Removing '.active' from all options
    for (var i = 0; i < options.length; i++) {
      options[i].classList.remove("active");
    }

    // Adding '.active' to the clicked option
    clicked.classList.add("active");

    // Changing main image and information
    image.setAttribute("src", whoImage);
    info.innerHTML = charInfo;
  }
}

// Setting clear text as the default
document.querySelector(".character.Clear").innerHTML = document.querySelector("#characterInfo").innerHTML
