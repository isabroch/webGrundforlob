// JavaScript Document
var index = 1;
var nyFoto;

function next(){
  if(index < 6) {
    //increasing index by 1 on click
    index++;
  } else {
    //if index is larger than number of photos, go back to 1
    index = 1;
  }

  nyFoto = "images/cadiz"+index+".jpg";
  console.log(nyFoto);

  //change #gallery img src to the new one
  document.querySelector("#galleri").setAttribute("src", nyFoto);
}

function prev(){
  if(index > 1) {
    //decreasing index by 1 on click
    index--;
  } else {
    //if index is smaller than 1, go back to 6
    index = 6;
  }

  nyFoto = "images/cadiz"+index+".jpg";
  console.log(nyFoto);

  //change #gallery img src to the new one
  document.querySelector("#galleri").setAttribute("src", nyFoto);
}
