const navProfile = document.querySelector('.nav__profile');
const navProfileWrapper = document.querySelector('.nav__profile__wrapper');
let timer;

function handleProfileLayer() {
  clearTimeout(timer);
  navProfileWrapper.style.display = 'block';
}

function handleProfileLayerRemove() {
  timer = setTimeout(() => {
    navProfileWrapper.style.display = 'none';
  }, 300);
}

navProfile.addEventListener('mouseover', handleProfileLayer);
navProfile.addEventListener('mouseout', handleProfileLayerRemove);
navProfileWrapper.addEventListener('mouseover', handleProfileLayer);
navProfileWrapper.addEventListener('mouseout', handleProfileLayerRemove);
