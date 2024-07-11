const hamburger = document.querySelector(".hamburger");
const navberLinks = document.querySelector(".navber-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navberLinks.classList.toggle("active");
});
