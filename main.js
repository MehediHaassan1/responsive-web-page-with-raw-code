let menuList = document.getElementById("menuList");
let nav = document.querySelector('nav');
let menuIcon = document.getElementById("menuIcon").firstElementChild;


menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "100vh";
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuList.style.maxHeight = "0px";
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
}
