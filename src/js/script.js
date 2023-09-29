const burgerBtn = document.querySelector(".nav__burger-btn");
const navItems = document.querySelector(".nav__items");
const allNavItem = document.querySelectorAll(".nav__item");

const handleNav = () => {
	navItems.classList.toggle("handling-nav");
};

burgerBtn.addEventListener("click", handleNav);
