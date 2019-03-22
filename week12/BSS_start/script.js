/* Goals:
//// Dropdown menu on click
//// Read more ('Read more..' and 'Read less..')
//// Gallery using arrows, thumbnails, and keyboard. Border should be around the 'active' thumbnail. 
//// Read more and dropdowns should only be there if JS is active, dvs. if no JS, menu and readmore text should be shown by default.
*/

//> Dropdown menu
const allSubMenus = document.querySelectorAll('.mainMenu > ul');
const allMenuItems = document.querySelectorAll('.mainMenu > a');

if (allSubMenus) {
  console.log('There is a dropdown menu');

  // On JS load, hide the submenus and fix position
  allSubMenus.forEach(subMenu => {
    subMenu.classList.add('jsActive', 'hidden');
  });

  // Click the menu item to show the submenu
  allMenuItems.forEach(menuItem => {
    menuItem.addEventListener('click', (e) => {
      let active = Array.from(allMenuItems).indexOf(e.target);
      let activeSubMenu = allSubMenus[active];

      if (activeSubMenu.classList.contains('hidden')) {
        allSubMenus.forEach(subMenu => {
          subMenu.classList.add('hidden');
        });
        activeSubMenu.classList.remove('hidden');
      } else {
        allSubMenus.forEach(subMenu => {
          subMenu.classList.add('hidden');
        });
      }

    })
  });
}

//> Read more
const readMoreButton = document.querySelector('#readmore');
const readMoreText = document.querySelector('#ekstra');

if (readMoreButton) {
  console.log('There is a read more section');

  // On JS load, unhide readmore button and hide readmore text
  readMoreButton.classList.remove('hidden');
  readMoreText.classList.add('hidden');

  // Click the read more button to show text
  readMoreButton.addEventListener('click', () => {
    if (readMoreText.classList.contains('hidden')) {
      readMoreText.classList.remove('hidden');
      readMoreButton.innerHTML = 'Read Less..'
    } else {
      readMoreText.classList.add('hidden');
      readMoreButton.innerHTML = 'Read More..'
    }
  });
}

//> Gallery
const activeImage = document.querySelector('#photo');
const leftArrow = document.querySelector('#backarrow');
const rightArrow = document.querySelector('#forwardsarrow')
const thumbnails = document.querySelectorAll('.thumbs img');
const gallery = document.querySelector('#fotogallery');

if (gallery) {
  console.log('There is a gallery');

  let index = 0;

  // Add border around current image
  let activeThumbnail = thumbnails[index];
  activeThumbnail.classList.add('active');

  // Listen for clicks on arrows
  leftArrow.addEventListener('click', () => {
    changeIndexByOne('back')
  });
  rightArrow.addEventListener('click', () => {
    changeIndexByOne('next')
  });

  // Listen for keypress 'left' or 'right'
  window.addEventListener('keydown', (e) => {
    switch (e.key) {
      case "ArrowLeft":
        changeIndexByOne('back')
        break;

      case "ArrowRight":
        changeIndexByOne('next');
        break;
    }
  });

  // Listen for clicks on thumbnails
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', (e) => {
      index = Array.from(thumbnails).indexOf(e.target);
      changeImage();
    });
  });

  // Goes back or forward by one image
  function changeIndexByOne(direction) {
    if (direction == 'next') {
      if (index < thumbnails.length - 1) {
        index++
      } else {
        index = 0;
      }
    } else if (direction == 'back') {
      if (index > 0) {
        index--
      } else {
        index = thumbnails.length - 1;
      }
    }

    changeImage();
  }

  // Changing active image
  function changeImage() {
    // Changing border of active thumbnail
    activeThumbnail = thumbnails[index];

    thumbnails.forEach(thumbnail => {
      thumbnail.classList.remove('active');
    });

    activeThumbnail.classList.add('active');

    // Sets image to the thumbnail
    const imgsrc = activeThumbnail.getAttribute('src');

    activeImage.setAttribute('src', imgsrc);
  }
}