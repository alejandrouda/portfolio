// SMOOTH SCROLL

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    const id = this.getAttribute("href");
    const sectionSelector = document.querySelector(id);
    sectionSelector.scrollIntoView({ behavior: "smooth" });
  });
});

// RESPONSIVE NAVBAR

const navSlide = () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const nav = document.querySelector(".nav-links");

  burgerMenu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navSlide();
