function ShowMobileMenu() {
  var mobileMenu = document.querySelector(".mobile-menu");
  var pageContainer = document.querySelector(".page-container");
  mobileMenu.style.display = "block";
  pageContainer.style.display = "none";
  document.querySelector(".mobile-menu-icon").outerHTML = 
  `<i class="fa-solid fa-xmark mobile-menu-icon" onclick="CloseMobileMenu()"></i>`
}

function CloseMobileMenu() {
  var mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.style.display = "none";
  var pageContainer = document.querySelector(".page-container");
  pageContainer.style.display = "block";

  document.querySelector(".mobile-menu-icon").outerHTML = 
`<i class="fa-solid fa-bars mobile-menu-icon" onclick="ShowMobileMenu()"></i>`
}

function ShowMobileSubMenu (id) {
  var submenu = document.querySelector(`.show-${id}`);
  var style = submenu.style.display === "block";
  console.log(style);
  submenu.style.display = style  ? "none" : "block";

}