const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});
