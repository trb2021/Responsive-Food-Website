let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('#search-form');
let searchIcon = document.querySelector('#search-icon');
let closeIcon = document.querySelector('#close');

searchIcon.onclick = () => {    
    searchForm.classList.toggle('active');
}

closeIcon.onclick = () => {
    searchForm.classList.toggle('active');
}

// Swiper JS Code
var swiper = new Swiper(".home-slider", {
    spaceBetween: 300,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });
