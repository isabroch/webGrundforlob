// JavaScript Document
function change(number, desc) {
  var nyFoto = "images/cat" + number + ".jpg";
  document.querySelector("#displayimage").setAttribute("src", nyFoto);
  // alert(nyFoto);

  var nyTekst = desc.getAttribute("title");
  document.querySelector("#title").innerHTML = nyTekst;
  // alert (nyTekst);

}
