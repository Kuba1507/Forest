const burgerBtn = document.querySelector(".navbar__burger-btn");
const navItems = document.querySelector(".navbar__items");
const allNavItem = document.querySelectorAll(".navbar__items-item");

const handleNav = () => {
	navItems.classList.toggle("handling-nav");
};

burgerBtn.addEventListener("click", handleNav);
