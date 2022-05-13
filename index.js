const menu = document.querySelector(".menu-burger");
const burgerNav = document.querySelector(".menu-burger-nav");

menu.addEventListener("click", () => {
  burgerNav.classList.toggle("active");
  console.log(burgerNav);
});
