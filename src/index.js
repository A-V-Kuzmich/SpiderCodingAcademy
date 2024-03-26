import './main.scss';

const refs = {
  mod: document.getElementsByTagName('body')[0],

  btnCloseModal: document.querySelector('[closeModal]'),
  modal: document.querySelector('[data-modal]'),
  burger: document.querySelector('[burger]'),
  logo: document.querySelector('[mobile-logo]'),
  modalMobile: document.querySelector('[data-menu]'),
  modalMobileItems: document.querySelector('[data-menu-items]'),
  openModalBtn: document.querySelector('[data-modal-open]'),
  openBackdropModalBtn: document.querySelector('[data-modal-open-2]'),
  openModalBtnHero: document.querySelector('[data-modal-open-hero]'),
};

refs.modal.addEventListener('click', closeModalOnClick);
refs.btnCloseModal.addEventListener('click', closeModal);
refs.burger.addEventListener('click', toggleModalMobile);
refs.modalMobileItems.addEventListener('click', toggleModalMobile);
refs.openBackdropModalBtn.addEventListener('click', openBackdropModalBtn);
refs.openModalBtn.addEventListener('click', toggleModal);
refs.openModalBtnHero.addEventListener('click', toggleModal);

function toggleModalMobile() {
  refs.modalMobile.classList.toggle('is-open');
  refs.mod.classList.toggle('no-scrol');
  refs.burger.classList.toggle('burger-active');
  refs.logo.classList.toggle('mobile-menu-logo');
}
function openBackdropModalBtn() {
  toggleModalMobile();
  toggleModal();
}

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  refs.mod.classList.toggle('no-scrol');
}

function closeModal() {
  toggleModal();
}

function closeModalOnClick(event) {
  if (event.target === refs.modal) {
    toggleModal();
  }
}

// scroll-button
document.getElementById('buttonUp').onclick = function scrollUpFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById('buttonUp').style.display = 'block';
  } else {
    document.getElementById('buttonUp').style.display = 'none';
  }
}
