/* Goals:
- Dropdown menu on click
- Read more ('Read more..' and 'Read less..')
- Gallery using arrows, thumbnails, and keyboard. 
  Border should be around the 'active' thumbnail. 
- Add a validated form from form.txt
- Read more and dropdowns should only be there if JS is active, dvs. if no JS, menu and readmore text should be shown by default.
*/

// Dropdown menu
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

      if(activeSubMenu.classList.contains('hidden')) {
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

// Read more
const readMoreButton = document.querySelector('#readmore');
const readMoreText = document.querySelector('#ekstra');

if(readMoreButton) {
  console.log('There is a read more section');
  
  // On JS load, unhide readmore button and hide readmore text
  readMoreButton.classList.remove('hidden');
  readMoreText.classList.add('hidden');

  // Click the read more button to show text
  readMoreButton.addEventListener('click', () => {
    if(readMoreText.classList.contains('hidden')) {
      readMoreText.classList.remove('hidden');
      readMoreButton.innerHTML = 'Read Less..'
    } else {
      readMoreText.classList.add('hidden');
      readMoreButton.innerHTML = 'Read More..'
    }
  });
}