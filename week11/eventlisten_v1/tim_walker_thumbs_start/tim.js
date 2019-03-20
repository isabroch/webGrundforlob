// JavaScript Document
var index=0;
var nyFoto;
var fotoListe=["After-the-flood-001", "Eglingham-ch-008", "InsideOutside-004", "Kristen-McMe-005", "Lily-Cole-and-giant-fish-007", "Lindsey-Wixs-003", "Pastel-cats-012", "Snow-in-Summer-009"];

//event listeners for de 2 knapper - kalder den samme function:
document.querySelector("#next").addEventListener("click", skift);
document.querySelector("#back").addEventListener("click", skift);

//functionen bruger event target (den knap man har klikket på) til at vælge om man sætter index op eller ned:
function skift(e){
	if (e.target.getAttribute("id")==="next"){
		if(index < fotoListe.length-1){
			index++;
		}else{
			index = 0;
		}
	}else{
		if(index > 0){
			index--;
		}else{
			index = fotoListe.length-1;
		}
	}
	// når index er justeret, kan man danne stivej til det rigtige foto:
	nyFoto = "fotos/"+fotoListe[index]+".jpg";
	// og sæt det ind:
	document.querySelector("#photo").setAttribute("src", nyFoto);
}

// Kode for thumbnails: ...

var thumbs = document.querySelectorAll('.thumbs img');
//querySelectorAll actually returns a htmlCollection/NodeList, which doesn't work like a regular array for some things. So we convert it to an array.
var thumbsArray = Array.from(thumbs); 

for (var i = 0; i < thumbs.length; i++) {
	thumbs[i].addEventListener("click", show);
}

function show(e) {
	var foto = e.target.getAttribute('src');
	document.querySelector('#photo').setAttribute('src', foto);
	index = thumbsArray.indexOf(e.target);
}
