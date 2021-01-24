gsap.registerPlugin(ScrollTrigger);

// Modal Open/Close
document.querySelector('.modal__Open').addEventListener('click', createModalPopUp);
document.querySelector('.modal__popup .ui-close-popup').addEventListener('click', closeModalPopUp);

const modal = document.querySelector('.modal__popup');
const modalClose = document.querySelector('.modal__popup .popup-close');
const modalOverlay = document.querySelector('.modal__popup .animation-overlay');
const openModalInfo = document.querySelector('.modal__popup .modal__popup--info');
const openModalInfoDiv = document.querySelectorAll('.modal__popup .modal__popup--info .col-left, .modal__popup .modal__popup--info .col-right');

function createModalPopUp(){
    const t1 = gsap.timeline();

    t1.set(modalClose, { display: 'none' })
    modal.classList.add('modal__popup--open');
    modalOverlay.classList.add('show-cover');

    setTimeout(() => {
        modalOverlay.classList.add('hide-cover');
        t1.to(openModalInfo, {opacity: 1, ease: 'Power1.easeOut' }, -1)
          .to(openModalInfoDiv, { y: 0, ease: 'Power1.easeOut'},-1)
          .to(document.body, { paddingRight: '17px'}, -1)
          .to(modalClose, { display: 'block', ease: 'Power1.easeOut' }, -1);
    }, 2000);
}

function closeModalPopUp(){

    const t1 = gsap.timeline();

    modal.classList.remove('modal__popup--open');
    modalOverlay.classList.remove('show-cover');

    modalOverlay.classList.remove('hide-cover');
    t1.to(openModalInfo, {opacity: 0 })
      .to(openModalInfoDiv, { y: '200px'})
      .to(modalClose, { display: 'nonne' });
    document.body.style.removeProperty("padding");
}
