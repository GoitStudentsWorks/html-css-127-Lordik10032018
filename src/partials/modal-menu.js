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

(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();