const menuIcon = document.querySelector(".menu-icon");
const sideBar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".main");

let isSideBarVisible = false;

menuIcon.addEventListener('click', () => {
	if (!isSideBarVisible) {
		sideBar.style.display = 'block';
		if (window.innerWidth >= 768) {
			mainContent.style.marginLeft = '320px';
		}
		isSideBarVisible = true;
	} else {
		sideBar.style.display = 'none';
		if (window.innerWidth >= 768) {
			mainContent.style.marginLeft = '10px';
		}
		isSideBarVisible = false;
	}
});

window.addEventListener('resize', () => {
	if (!isSideBarVisible) return;
	if (window.innerWidth >= 768) {
		mainContent.style.marginLeft = '320px';
	} else {
		mainContent.style.marginLeft = '10px';
	}
});




const menuItems = document.querySelectorAll(".menu .icon-link");
menuItems.forEach(item => {
   const dropDown = item.querySelector(".drop");
   const subMenu = item.nextElementSibling;

   item.addEventListener('click', () => {
    // Close all other submenus
	menuItems.forEach(otherItem => {
      if (otherItem !== item) {
         const otherSubMenu = otherItem.nextElementSibling;
         otherSubMenu.classList.remove('active');
         otherItem.classList.remove('menu-link');
      }
   });

    // Toggle the clicked submenu
   subMenu.classList.toggle('active');

    // Toggle the .menu-link class
   item.classList.toggle('menu-link');
	});
});

