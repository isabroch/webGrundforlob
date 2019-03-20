// Vi laver en interaktiv galleri
const celebrityThumbnails = document.querySelectorAll('nav img');
const celebrityThumbnailsArray = Array.from(celebrityThumbnails);
const activeImage = document.querySelector('#plakat');

const posterList=["anne_les_mis", "brad_bastards", "colin_single_man", "drew_miss_you", "eddie_bev_hills_cop"];

const originalImage = 'posters/hollywood.jpg';
const originalText = 'Film Quiz';

// Give hver thumbnail en 'click' event listener
// Når en thumbanil er klikkede, udskift billede og tekst
celebrityThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', (e) => {
        changeImage(e.target);
        changeText(e.target);
    });
});

// Udskift stor billede med denne skuespillers plakat, plakater er skrevet i samme rækkefølge som thumbnails
function changeImage(clickedThumb) {
    console.log(clickedThumb);
}

// Udskift 'Film Quiz' tekst med skuespillers navn, som står i thumbnails 'alt'
function changeText(clickedThumb) {
    console.log(clickedThumb);
}

// Dæmpe alle thumbnails udover thumbnailen af den valgte skuespiller

// Hvis bruger dobbel klikker (dvs. klikker på den samme skuespiller), dæmpe alle thumbnails og vis den hollywood billede + 'Film Quiz' tekst




