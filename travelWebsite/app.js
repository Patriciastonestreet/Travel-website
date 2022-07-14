//select the class and id
let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-container");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-container");
let closeForm = document.querySelector("#form-close");
let menu = document.querySelector("#menu-bar");
let navBar = document.querySelector(".navBar");
let videoBtn = document.querySelectorAll(".video-btn");

window.onscroll = () => {
  //remove addEventListener when scroll the page
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menu.classList.remove("fa-times");
  navBar.classList.remove("active");
  loginForm.classList.remove("active");
};

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navBar.classList.toggle("active");
});

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});

closeForm.addEventListener("click", () => {
  loginForm.classList.remove("active");
});

videoBtn.forEach((btn) => {
  //foreach btn remove active class and  on click addEventListener active
  btn.addEventListener("click", () => {
    document.querySelector(".control .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src"); //get btn attribute and = to the vide-slider id src
    document.querySelector("#video-slider").src = src;
  });
});

//  swiper / slide
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
