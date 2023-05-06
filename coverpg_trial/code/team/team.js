const uls = document.querySelectorAll(".nav ");
const links = [...document.querySelectorAll(".nav a")];
const light = document.querySelector(".nav .tubelight");
let activeIndex = 0;
let currentIndex = 0;
let increment = 1;
links.forEach((link, index) => {
    if (links[index].classList.contains("active")) {
        light.style.left = `${links[index].offsetLeft + light.offsetWidth / 8}px`;
    }
    link.addEventListener("click", (e) => {
        activeIndex = index;
        let t = setInterval(() => {
            if (activeIndex > currentIndex) increment = 1;
            else if (activeIndex < currentIndex) increment = -1;
            currentIndex += increment;

            links[currentIndex].classList.add("active");
            if (currentIndex != -2)
                links[currentIndex - increment].classList.remove("active");

            if (currentIndex == activeIndex) {
                e.target.classList.add("active");
                increment = 0;
                clearInterval(t);
            }
        }, 50);
        light.style.left = `${e.target.offsetLeft + light.offsetWidth / 4}px`;
    });
});
$(document).ready(function() {
    $("#MyModal").modal();
    
  });
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}