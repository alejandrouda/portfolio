const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    const id = this.getAttribute("href");
    const sectionSelector = document.querySelector(id);
    sectionSelector.scrollIntoView({ behavior: "smooth" });
  });
});
