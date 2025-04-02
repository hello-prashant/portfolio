// -- Select DOM Elements --
// Menu and Navbar for mobile toggle
const menu = document.querySelector(".menu-icon");
const navbar = document.querySelector(".menu");

// Notification Bell Element
const bell = document.querySelector(".notification");
const bellIcon = document.querySelector("#bell-icon");

// -- Menu Toggle Function --
menu.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menu.classList.toggle("move");
  // Close the notification bell if menu is toggled
  bell.classList.remove("active");
});

// -- Notification Bell Toggle Function --
bellIcon.addEventListener("click", () => {
  bell.classList.toggle("active");
});

// -- Swiper (Trending Content) Initialization --
var swiper = new Swiper(".trending-content", {
  slidesPerView: 1,  // Show one slide at a time on small screens
  spaceBetween: 10,   // Space between slides
  autoplay: {
    delay: 5000,      // Delay between slides (5 seconds)
    disableOnInteraction: false, // Continue autoplay after interaction
  },
  pagination: {
    el: ".swiper-pagination", // Pagination controls
    clickable: true,          // Make pagination clickable
  },
  breakpoints: {
    640: {
      slidesPerView: 2,       // Show 2 slides on small devices (>=640px)
      spaceBetween: 20,       // Space between slides
    },
    768: {
      slidesPerView: 3,       // Show 3 slides on medium devices (>=768px)
      spaceBetween: 15,       // Space between slides
    },
    1068: {
      slidesPerView: 4,       // Show 4 slides on large devices (>=1068px)
      spaceBetween: 20,       // Space between slides
    },
  },
});

// -- Scroll Progress Bar Update --
window.addEventListener("scroll", updateScrollBar);

function updateScrollBar() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  const scrollBar = document.getElementById("scroll-bar");
  if (scrollBar) {
    scrollBar.style.width = `${scrolled}%`; // Update scroll bar width
  }
}
