console.log("Loving Axolotl está funcionando 🫧");

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("active");
});