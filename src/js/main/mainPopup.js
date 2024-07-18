function removePopup() {
  const popup = document.querySelector('.mainPopup');
  document.body.classList.remove('noScroll');
  if (popup) {
    popup.remove();
  }
}

function closePopupForOneDay() {
  const now = new Date();
  localStorage.setItem('popupClosedTime', now.getTime());
  removePopup();
}

const popupCloseOneday = document.querySelector('.mainPopup__close__oneday');
popupCloseOneday.addEventListener('click', closePopupForOneDay);

const popupCloseNow = document.querySelector('.mainPopup__close__now');
popupCloseNow.addEventListener('click', removePopup);

function shouldShowPopup() {
  const popupClosedTime = localStorage.getItem('popupClosedTime');
  if (!popupClosedTime) {
    return true;
  }

  const oneDay = 24 * 60 * 60 * 1000;
  const now = new Date();
  const timeElapsed = now.getTime() - popupClosedTime;

  if (timeElapsed > oneDay) {
    localStorage.removeItem('popupClosedTime');
    return true;
  }

  return false;
}

window.addEventListener('DOMContentLoaded', () => {
  if (shouldShowPopup()) {
    const popup = document.querySelector('.mainPopup');
    if (popup) {
      popup.style.display = 'block';
    }
  } else {
    const popup = document.querySelector('.mainPopup');
    if (popup) {
      popup.style.display = 'none';
    }
    document.body.classList.remove('noScroll');
  }
});
