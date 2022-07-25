let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
    sideBar.classList.toggle('active');
}

document.querySelector('#close-side-bar').onclick = () =>{
    sideBar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

window.onscroll = () =>{
    sideBar.classList.remove('active');
    searchForm.classList.remove('active');
};

document.querySelectorAll('.accordion-container .accordion').forEach(accordion =>{
    accordion.onclick = () =>{
        accordion.classList.toggle('active');
    }
});

var swiper = new Swiper(".swiper", {
    // direction: vertical,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 3,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// var swiper = new Swiper(".review-slider", {
//     loop:true,
//     grabCursor:true,
//     spaceBetween: 20,
//     breakpoints: {
//         450: {
//           slidesPerView: 1,
//         },
//         768: {
//           slidesPerView: 2,
//         },
//         1024: {
//           slidesPerView: 3,
//         },
//     },
// });

function reinitSwiper(swiper) {
    setTimeout(function () {
        swiper.reInit();
        
    },5)
    
}