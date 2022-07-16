(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-btn'),
    closeMenuBtn: document.querySelector('.btn-close'),
    menu: document.querySelector('.menu__modal'),
    body: document.querySelector('body'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();