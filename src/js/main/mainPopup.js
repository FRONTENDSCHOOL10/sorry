function removePopup() {
  const popup = document.querySelector('.mainPopup');
  document.body.classList.remove('.noScroll');
  if (popup) {
    popup.remove();
  }
}

const popupCloseOneday = document.querySelector('.mainPopup__close__oneday');
popupCloseOneday.addEventListener('click', removePopup);

const popupCloseNow = document.querySelector('.mainPopup__close__now');
popupCloseNow.addEventListener('click', removePopup);
