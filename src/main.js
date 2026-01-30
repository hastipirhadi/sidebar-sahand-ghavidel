const sidebar_btn = document.getElementById("btn");
const sidebar = document.getElementById("hide_sidebar");
const close = document.getElementById("close_btn");

sidebar_btn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});
close.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
