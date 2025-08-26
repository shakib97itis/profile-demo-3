const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// theme toggle functionality implementation start
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const root = document.documentElement;

// প্রথমে user এর আগের choice localStorage থেকে check করো
if (localStorage.getItem("theme") === "dark") {
  root.classList.add("dark");
  themeIcon.classList.remove("fa-sun");
  themeIcon.classList.add("fa-moon");
}

themeToggle.addEventListener("click", () => {
  if (root.classList.contains("dark")) {
    // light theme এ যাও
    root.classList.remove("dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "light");
  } else {
    // dark theme এ যাও
    root.classList.add("dark");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "dark");
  }
});
// theme toggle functionality implementation end
