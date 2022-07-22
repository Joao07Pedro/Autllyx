const imgLogoMenu = document.querySelector("#header__end__logoMenu");
const menu = document.querySelector(".header__end__menu");

imgLogoMenu.addEventListener("click", function () {
	menu.classList.toggle("show-menu");
});
