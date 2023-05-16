const topHeader = document.getElementsByClassName("navbar-top")[0];
const banner = document.getElementsByClassName("banner-kontainer")[0];

const topHeaderToggle = document.getElementsByClassName("top-menu-toggler")[0];
const topHeaderMobile = document.getElementsByClassName("navbar-top-mobile")[0];

const btmHeaderToggle = document.getElementsByClassName("btm-menu-toggler")[0];
const btmHeaderMobile = document.getElementsByClassName("navbar-btm-menu")[0];

function handleHeader() {
	let windowWidth = 0;

	let onresize = function () {
		windowWidth = document.body.clientWidth;
		if (windowWidth < 993) {
            btmHeaderMobile.style.display = "none";
        } else {
            btmHeaderMobile.style.display = "block";
        }
	};
	window.addEventListener("resize", onresize);

	document.addEventListener("scroll", () => {
		const distanceFromTop =
			window.pageYOffset ||
			(
				document.documentElement ||
				document.body.parentNode ||
				document.body
			).scrollTop;

		// console.log(distanceFromTop)
		if (distanceFromTop > 80) {
			topHeader.style.display = "none";
			banner.classList.add("flex-row");
			banner.classList.remove("flex-column");
		} else {
			topHeader.style.display = "flex";
			banner.classList.remove("flex-row");
			banner.classList.add("flex-column");
		}
	});

    onresize()

	topHeaderMobile.style.display = "none";
	topHeaderToggle.addEventListener("click", () => {
		if (topHeaderMobile.style.display === "none") {
			topHeaderMobile.style.display = "block";
		} else {
			topHeaderMobile.style.display = "none";
		}
		// console.log(topHeaderMobile.style.display);
	});

	btmHeaderToggle.addEventListener("click", () => {
		if (btmHeaderMobile.style.display === "none") {
			btmHeaderMobile.style.display = "block";
		} else {
			btmHeaderMobile.style.display = "none";
		}
		// console.log(btmHeaderMobile.style.display);
	});

}
//dropdown controller
const parentDropdown = document.querySelectorAll(
    ".navbar-btm-menu .nav-item"
);

parentDropdown.forEach((dropdownItem, i) => {
    console.log(dropdownItem.lastElementChild)
    dropdownItem.addEventListener("mouseover", () => {
        dropdownItem.lastElementChild.style.display = "flex"
    });
    dropdownItem.addEventListener("mouseout", () => {
        dropdownItem.lastElementChild.style.display = "none"
    });
});

handleHeader();
