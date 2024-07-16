import '/src/styles/style.scss';
import '/src/js/mainpage.js';
import '/src/js/header.js';
import defaultAuthData from '/src/api/defaultAuthData';
import { setStorage, getStorage } from 'kind-tiger';

setStorage('auth', defaultAuthData);

if (localStorage.getItem('auth')) {
  getStorage('auth').then(({ isAuth }) => {
    if (!isAuth) location.href = '/src/pages/onboarding';
  });
}
