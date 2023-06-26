const menuMobile = document.querySelector('.navbar__menu-mobile')
const burgerBtn = document.querySelector('.navbar__burger-btn')

const handleMobile = () => {
	menuMobile.classList.toggle('navbar__menu-mobile--active')
	burgerBtn.classList.toggle('navbar__burger-btn--active')
}

burgerBtn.addEventListener('click', handleMobile)
