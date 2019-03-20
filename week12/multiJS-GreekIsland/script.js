//JavaScript Document

/* Dropdown menu in header */
if(document.querySelector('#menu')) {
    console.log('Dropdown menu exists');

    const navMenu = document.querySelector('header nav');
    const menuItem = navMenu.querySelectorAll('div');
    const subMenu = navMenu.querySelectorAll('ul');

    // If JS is active, then hide submenus
    navMenu.classList.add('jsActive');
    hideSubMenus();

    // Menu onclick show/hide submenus
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].addEventListener('click', function(e) {
            const subMenuIsHidden = subMenu[i].classList.contains('hide'); 

            if (subMenuIsHidden) {
                hideSubMenus();
                subMenu[i].classList.remove('hide');       
            } else {
                hideSubMenus();
            }
        });
    }

    // Function to hide ul because it's used in a lot of places
    function hideSubMenus() {
        for (let i = 0; i < subMenu.length; i++) {
            subMenu[i].classList.add('hide');
        }
    }
}

/* Read more in body */
if (document.querySelector('#moreButton')) {
    console.log('Read more exists');

    const readMoreButton = document.querySelector('#moreButton');
    const readMoreText = document.querySelector('#moreInfo');

    // If JS is active, then hide extra text
    readMoreButton.classList.remove('hide');
    readMoreText.classList.add('hide');

    // Click 'read more' and change to 'read less', as well as show/hide extra text
    readMoreButton.addEventListener('click', function() {
        const readMoreTextIsHidden = readMoreText.classList.contains('hide');

        if (readMoreTextIsHidden) {
            readMoreButton.innerHTML = "Read less..";
            readMoreText.classList.remove('hide');
        } else {
            readMoreButton.innerHTML = "Read more..";
            readMoreText.classList.add('hide');
        }
    });
}

/* Photo gallery in body */
if (document.querySelector('#gallery')) {
    console.log('Gallery exists');

    const photoList = ['folegandros_chora', 'folegandros_narrowStreet', 'folegandros_whiteWall', 'folegandros_churchyard', 'folegandros_chapel', 'folegandros_menu', 'folegandros_sunset', 'folegandros_squareByNight']; 
    const displayPhoto = document.querySelector('#galleryPhoto');
    const leftButton = document.querySelector('#previous');
    const rightButton = document.querySelector('#next');

    let index = 0;

    // If left, go back. If right, go forward
    leftButton.addEventListener('click', function(){
        changePhotoIndex('back');
    });
    rightButton.addEventListener('click', function(){
        changePhotoIndex('forward');
    });

    // Change index number depending on direction
    function changePhotoIndex(direction) {
        if (direction == 'back') {
            if (index > 0) {
                index--
            } else {
                index = photoList.length-1;
            }
        } else if (direction == 'forward') {
            if (index < photoList.length-1) {
                index++
            } else {
                index = 0
            }
        }

        changeDisplayPhoto();
    }

    // Change display photo to the current indexed photo location
    function changeDisplayPhoto() {
        displayPhoto.setAttribute('src', `images/${photoList[index]}.jpg`)
    }
}

/* Form validation in footer */
if(document.querySelector('form[onsubmit="return validate(this)"]')) {
    console.log('Form exists');

    const errorMessage = document.querySelector('#message');

    // Run validation when form is submitted
    function validate(submittedForm) {
        const name = submittedForm.name;
        const email = submittedForm.email;

        function isEmailPattern(comparedTo) {
            return /.+@.+\.\w\w+/.test(comparedTo); //regex: anything@anything.co [all 'anythings' must be at least one letter long, and last part 'co' must be at least two letters long]
        }

        if(name.value == "") {
            errorMessage.innerHTML = "Please insert your name";
            name.focus();
            return false;
        }
        
        if(isEmailPattern(email.value) == false) {
            errorMessage.innerHTML = "Please insert a valid email";
            email.focus();
            return false;
        }

        return true;
    }
}