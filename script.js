function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".test-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.addEventListener('DOMContentLoaded', (event) => {
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});