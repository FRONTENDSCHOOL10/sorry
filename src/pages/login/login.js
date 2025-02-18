import '/src/styles/style.scss';
import '/src/js/header.js';
import '/src/js/footer.js';
import pb from '/src/api/pocketbase';
import { getStorage, setStorage } from 'kind-tiger';
import '/src/js/header.js';
import '/src/js/footer.js';

const loginId = document.querySelector('.login__user__id');
const loginPw = document.querySelector('.login__user__password');
const loginBtn = document.querySelector('.login__button');

const validateInputs = () => {
  const username = loginId.value.trim();
  const password = loginPw.value.trim();

  if (username && password) {
    loginBtn.classList.remove('disabled');
    loginBtn.disabled = false;
  } else {
    loginBtn.classList.add('disabled');
    loginBtn.disabled = true;
  }
};

loginId.addEventListener('input', validateInputs);
loginPw.addEventListener('input', validateInputs);

const login = () => {
  const username = loginId.value.trim();
  const password = loginPw.value.trim();

  if (!username) {
    alert('아이디를 입력해 주세요!');
    return;
  } else if (!password) {
    alert('비밀번호를 입력해 주세요!');
    return;
  } else {
    pb.collection('users')
      .authWithPassword(username, password)
      .then(
        async () => {
          const { model, token } = await getStorage('pocketbase_auth');
          setStorage('auth', {
            isAuth: model,
            user: model,
            token,
          });
          alert('로그인 완료! 메인페이지로 이동합니다.');
          location.href = '/index.html';
        },
        () => {
          alert('인증된 사용자가 아닙니다.');

          const pass = confirm('회원가입 페이지로 이동하시겠습니까?');
          if (pass === true) {
            location.href = '/src/pages/signup/signUp.html';
          } else {
            location.reload();
          }
        }
      );
  }
};

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  login();
});

document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (!loginBtn.disabled) {
      login();
    }
  }
});
