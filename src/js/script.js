const navbar = document.querySelector(".navbar");
const burgerBtn = document.querySelector(".navbar__burger-btn");
const navItems = document.querySelector(".navbar__items");
const allNavItem = document.querySelectorAll(".navbar__items-item");

const handleNav = () => {
	navItems.classList.toggle("handling-nav");
	document.body.classList.toggle("fixed-body");
};

const closeNav = () => {
	navItems.classList.remove("handling-nav");
	document.body.classList.remove("fixed-body");
};

allNavItem.forEach((item) => {
	item.addEventListener("click", closeNav);
});

burgerBtn.addEventListener("click", handleNav);
