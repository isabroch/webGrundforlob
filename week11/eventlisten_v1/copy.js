var index = 0;
var nyFoto;
var fotoListe = ["After-the-flood-001", "Eglingham-ch-008", "InsideOutside-004", "Kristen-McMe-005", "Lily-Cole-and-giant-fish-007", "Lindsey-Wixs-003", "Pastel-cats-012", "Snow-in-Summer-009", "Tilda-Swinton-011"];
var display = document.querySelector("#photo");

function change(e) {
  if (e.target.getAttribute("id")==="next") {
    // forward
    if (index < fotoListe.length - 1) {
      index++;
    } else {
      index = 0;
    }
  } else if (e.target.getAttribute("id")==="back") {
    // back
    if (index > 0) {
      index--;
    } else {
      index = fotoListe.length - 1;
    }
  }

  // change photo to index photo
  nyFoto = fotoListe[index];
  display.setAttribute("src", "fotos/" + nyFoto + ".jpg")

  /* console.log(e)
     will show information about the event */

  /* console.log(e.target)
     will show information about the element clicked on */
}

document.querySelector("#next").addEventListener("click", change);
document.querySelector("#back").addEventListener("click", change);
