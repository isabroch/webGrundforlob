const menuHeaders = document.querySelectorAll('nav > div');
const menuItems = document.querySelectorAll('nav > div ul');


function loaded() {
  //once loaded, add 'hide' to all the uls.
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.add('hide');
  }

  //add event listeners to all menu headers.
  for (var i = 0; i < menuHeaders.length; i++) {
    menuHeaders[i].addEventListener('click', function(e){
      showHide(e.target);
    });
  }
}

loaded();

function showHide(e) {
  const undermenu = e.querySelector('ul');

  if (undermenu.classList.contains('hide')) {
    //add 'hide' to all the uls.
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.add('hide');
    }

    //show the clicked undermenu
    undermenu.classList.remove('hide');
  } else {
    //add 'hide' to all the uls.
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.add('hide');
    }
  }
}
