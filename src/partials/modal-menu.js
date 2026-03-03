'use strict'

const openBtn = document.getElementById('openBurgerMenu');
const closeBtn = document.getElementById('closeBurgerMenu');
const backdrop = document.getElementById('modal-brg');

openBurgerMenu.addEventListener('click', () => {
  modalBrg.classList.remove('is-hidden');
});

closeBurgerMenu.addEventListener('click', () => {
  modalBrg.classList.add('is-hidden');
});