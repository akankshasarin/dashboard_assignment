import "../scss/dashboard.scss";
import getIcon from "./icons.js";

// Nav Links
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    const parent = this.parentNode;
    const navItems = document.querySelectorAll(".nav__item");
    navItems.forEach(item => item.classList.remove("is-active"));
    parent.classList.add("is-active");
    e.preventDefault();
  });
});

// Sidebar
const sidebarToggle = document.querySelector(".js-toggle-sidebar");
sidebarToggle.addEventListener("click", function() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("collapsed");
});

// Document Ready
window.addEventListener("DOMContentLoaded", function() {

  // Load Iconset
  getIcon("icons");
}, false );
