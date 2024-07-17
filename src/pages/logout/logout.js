import '/src/styles/style.scss';
import defaultAuthData from '/src/api/defaultAuthData';
import { setStorage, getNode } from 'kind-tiger';

const logoutCheck = getNode('.logoutCheck');

logoutCheck.addEventListener('click', () => {
  localStorage.removeItem('pocketbase_auth');
  setStorage('auth', defaultAuthData).then(() => {
    location.href = '/src/pages/onboarding'; // 로그인 페이지로 리다이렉션
  });
});
