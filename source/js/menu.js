const menuButton = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const menuItems = document.querySelectorAll('.nav__link');
const body = document.querySelector('.page__body');

menuButton.addEventListener('click', ()=> {
  menuButton.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--open');
  body.classList.toggle('page__body--menu');

  if (body.classList.contains('page__body--menu')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
})

for (let menuItem of menuItems) {
  menuItem.addEventListener('click', ()=> {
    menuButton.classList.remove('burger--active');
    menu.classList.remove('header__nav--open');
    body.classList.remove('page__body--menu');
    body.style.overflow = '';
  })
}
