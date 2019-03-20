var index=0;
var nyFoto;
var fotoListe=["After-the-flood-001", "Eglingham-ch-008", "InsideOutside-004", "Kristen-McMe-005", "Lily-Cole-and-giant-fish-007", "Lindsey-Wixs-003", "Pastel-cats-012", "Snow-in-Summer-009", "Tilda-Swinton-011"];
var display = document.querySelector("#photo");

function next(){
  if (index<fotoListe.length-1) {
    index++;
  } else {
    index = 0;
  }
  nyFoto = fotoListe[index];
  display.setAttribute("src", "fotos/"+nyFoto+".jpg")
}

function back(){
  if (index>0) {
    index--;
  } else {
    index = fotoListe.length-1;
  }
  nyFoto = fotoListe[index];
  display.setAttribute("src", "fotos/"+nyFoto+".jpg")
}

document.querySelector("#next").addEventListener("click", next);
document.querySelector("#back").addEventListener("click", back);
