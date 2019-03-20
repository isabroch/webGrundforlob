// Vi laver en interaktiv galleri
const celebrityThumbnails = document.querySelectorAll('nav img');
const celebrityThumbnailsArray = Array.from(celebrityThumbnails);

const displayImage = document.querySelector('#plakat');
const displayText = document.querySelector('h2');

const posterList=["anne_les_mis", "brad_bastards", "colin_single_man", "drew_miss_you", "eddie_bev_hills_cop"];

const originalImage = 'posters/hollywood.jpg';
const originalText = 'Film Quiz';

// Give hver thumbnail en 'click' event listener
// Når en thumbanil er klikkede, udskift billede og tekst
celebrityThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', (e) => {
        setActive(e.target);
        changeImage(e.target);
        changeText(e.target);
    });
});

let index = undefined;

// Udskift stor billede med denne skuespillers plakat, plakater er skrevet i samme rækkefølge som thumbnails
function changeImage(clickedThumb) {
    if(index == celebrityThumbnailsArray.indexOf(clickedThumb)) { 
        // Hvis de klikker på en ny thumbnail, så skifter til denne thumbnails plakat
   
        // Sætte stor billedes source til skuespillers plakat
        displayImage.setAttribute('src', `posters/${posterList[index]}.jpg`);
    } else {
        // Hvis bruger klikker på den samme thumbnail, så vis den hollywood billede

        // Sætte stor billede til den Hollywood billede
        displayImage.setAttribute('src', originalImage);
    }
}

// Udskift 'Film Quiz' tekst med skuespillers navn, som står i thumbnails 'alt'
function changeText(clickedThumb) {
    if(index == celebrityThumbnailsArray.indexOf(clickedThumb)) { 
        // Hvis de klikker på en ny thumbnail, så skifter til denne thumbnails tekst

        // Sætte tekst til skuespillers navn
        const name = clickedThumb.getAttribute('alt');
        displayText.innerHTML = name;
    } else {
        // Hvis bruger klikker på den samme thumbnail, så vis den 'Film Quiz' tekst

        // Sætte stor billede til den Hollywood billede
        displayText.innerHTML = originalText;
    }
}

// Dæmpe alle thumbnails udover thumbnailen af den valgte skuespiller
function setActive(clickedThumb) {
    celebrityThumbnails.forEach(thumbnail => {
        thumbnail.classList.remove('active');
    });

    if(index != celebrityThumbnailsArray.indexOf(clickedThumb)) {
        // Find ud hvor den klikkede skuespiller står i rækkefølgen, og sætte index til den
        index = celebrityThumbnailsArray.indexOf(clickedThumb);
        clickedThumb.classList.add('active');
    } else {
        // Sætte index tilbage til ingenting, fordi vi ikke er i rækkefølgen længere
        index = undefined;
    }
}





