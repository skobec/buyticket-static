// import '../tailwind.css'
import '../scss/main.scss'

const burgerBtn = document.getElementById('burgerBtn')
const closeBtn = document.getElementById('closeBtn')
const mobileMenu = document.getElementById('mobileMenu')
const menuOverlay = document.getElementById('menuOverlay')

function openMenu() {
  mobileMenu.classList.remove('translate-x-full')
  menuOverlay.classList.remove('hidden')
  document.body.style.overflow = 'hidden'
}

function closeMenu() {
  mobileMenu.classList.add('translate-x-full')
  menuOverlay.classList.add('hidden')
  document.body.style.overflow = ''
}

burgerBtn.addEventListener('click', openMenu)
closeBtn.addEventListener('click', closeMenu)
menuOverlay.addEventListener('click', closeMenu)

document.querySelectorAll('.mobile-link').forEach(link =>
  link.addEventListener('click', closeMenu)
)