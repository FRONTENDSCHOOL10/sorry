document.addEventListener('DOMContentLoaded', function () {
  const profileContainer = document.querySelector('.nav__profile');
  const profileWrapper = document.querySelector('.nav__profile__wrapper');
  let timer;

  profileContainer.addEventListener('mouseover', function () {
    clearTimeout(timer);
    profileWrapper.style.display = 'block';
  });

  profileContainer.addEventListener('mouseout', function () {
    timer = setTimeout(function () {
      profileWrapper.style.display = 'none';
    }, 300);
  });

  profileWrapper.addEventListener('mouseover', function () {
    clearTimeout(timer);
    profileWrapper.style.display = 'block';
  });

  profileWrapper.addEventListener('mouseout', function () {
    profileWrapper.style.display = 'none';
  });
});
