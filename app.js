const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const icons = document.querySelector(".social-icons");

const dialog = document.getElementById("dialog");
const modelOpen = document.getElementById("model-open");
const modelClose = document.getElementById("closeModel");
navToggle.addEventListener("click", () => {
    links.classList.toggle("show-links");
    icons.classList.toggle("show-links");
})

modelOpen.addEventListener('click', () => {
    dialog.showModal();
    dialog.style.display = "block"
})
modelClose.addEventListener('click', () => {
    dialog.close();
    dialog.style.display = "none"
})