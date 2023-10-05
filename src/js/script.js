//nav
const navbar = document.querySelector(".navbar");
const burgerBtn = document.querySelector(".navbar__burger-btn");
const navItems = document.querySelector(".navbar__items");
const allNavItem = document.querySelectorAll(".navbar__items-item");

//form
const username = document.querySelector("#name");
const mail = document.querySelector("#email");
const msg = document.querySelector("#msg");
const usernameError = document.querySelector(".error-name");
const emailError = document.querySelector(".error-email");
const msgError = document.querySelector(".error-msg");
const popup = document.querySelector(".msg-status");

const handleNav = () => {
	navItems.classList.toggle("handling-nav");
	document.body.classList.toggle("fixed-body");
};

const closeNav = () => {
	navItems.classList.remove("handling-nav");
	document.body.classList.remove("fixed-body");
};

const checkForm = (e) => {
	e.preventDefault();

	if (username.value === "") {
		usernameError.style.visibility = "visible";
		usernameError.innerHTML = "Podaj imię";
	}

	if (mail.value === "") {
		emailError.style.visibility = "visible";
		emailError.innerHTML = "Podaj email";
	}

	if (msg.value === "") {
		msgError.style.visibility = "visible";
		msgError.innerHTML = "Podaj wiadomość";
	}

	if (username.value !== "") {
		usernameError.style.visibility = "hidden";
	}

	if (mail.value !== "") {
		emailError.style.visibility = "hidden";
	}

	if (msg.value !== "") {
		msgError.style.visibility = "hidden";
	}

	if (username.value !== "" && mail.value !== "" && msg.value !== "") {
		popup.style.display = "flex";
		setTimeout(() => {
			popup.classList.add("show-msg");
		}, 10);
	}
};

const closeMsgStatus = () => {
	popup.style.display = "none";
	popup.classList.remove("show-msg");
};

allNavItem.forEach((item) => {
	item.addEventListener("click", closeNav);
});

burgerBtn.addEventListener("click", handleNav);

document.addEventListener("DOMContentLoaded", function () {
	const sendBtn = document.querySelector(".send-btn");
	const closeBtn = document.querySelector(".close-btn");

	if (sendBtn) {
		sendBtn.addEventListener("click", checkForm);
		closeBtn.addEventListener("click", closeMsgStatus);
	}
});
