// Contoh animasi sederhana saat scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(15, 25, 45, 0.7)";
  } else {
    header.style.background = "transparent";
  }
});
