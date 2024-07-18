export default function headerScript(shadowRoot) {
  const navProfile = shadowRoot.querySelector('.nav__profile');
  const navProfileWrapper = shadowRoot.querySelector('.nav__profile__wrapper');
  const userName = navProfileWrapper.querySelector('.user__name');
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

  navProfile.addEventListener('click', (e) => {
    e.preventDefault();
  });
  navProfile.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      handleProfileLayer();
    }
  });
  navProfile.addEventListener('mouseover', handleProfileLayer);
  navProfile.addEventListener('mouseout', handleProfileLayerRemove);
  navProfileWrapper.addEventListener('mouseover', handleProfileLayer);
  navProfileWrapper.addEventListener('mouseout', handleProfileLayerRemove);

  if (localStorage.getItem('auth')) {
    const authData = JSON.parse(localStorage.getItem('auth'));
    const { isAuth, user } = authData;
    if (isAuth) {
      userName.textContent = user.username;
    }
  }
}
