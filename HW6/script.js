document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navMenu = document.getElementById("nav-menu");

  hamburgerMenu.addEventListener("click", function () {
    if (navMenu.style.left === "0px") {
      navMenu.style.left = "-250px";
    } else {
      navMenu.style.left = "0px";
    }
  });
});
