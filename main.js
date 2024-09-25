let nav = document.querySelector('nav');
let menuList = document.getElementById("menuList");
let menuIcon = document.getElementById("menuIcon").firstElementChild;
let modal = document.getElementById("modal");
let closeButton = document.querySelector(".close");


menuList.style.maxHeight = "0px";

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    menuList.style.maxHeight = "0px";
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
    nav.classList.add('blur');
  } else {
    nav.classList.remove('blur');
  }
});


function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "400px";
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuList.style.maxHeight = "0px";
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
}



document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function () {
    const image = this.dataset.image;
    const title = this.dataset.title;
    const description = this.dataset.description;

    document.getElementById('modal-image').src = image;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;

    modal.style.display = "block";
    document.body.classList.add('no-scroll');
  });
});

closeButton.onclick = function () {
  modal.style.display = "none";
  document.body.classList.remove('no-scroll');
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove('no-scroll');
  }
};
