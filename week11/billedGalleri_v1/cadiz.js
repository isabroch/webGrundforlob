// JavaScript Document
function skift(nr, knap) {
  var nyFoto = "images/cadiz" + nr + ".jpg";
  document.querySelector("#galleri").setAttribute("src", nyFoto);
  // alert(nyFoto);

  var nyTekst = knap.getAttribute("title");
  document.querySelector("#description").innerHTML = nyTekst;
  // alert (nyTekst);

}
