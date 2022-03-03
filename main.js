/* DARK MODE */
const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  document.body.classList.toggle("light-mode");
});

/* PRE-LOADER */
window.onload = function () {
  document.querySelector(".preloader").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
};
