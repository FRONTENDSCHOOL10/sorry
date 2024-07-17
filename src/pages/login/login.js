import '/src/styles/style.scss';
import pb from '/src/api/pocketbase';
import { getStorage, setStorage } from 'kind-tiger';

const loginId = document.querySelector('.login__user__id');
const loginPw = document.querySelector('.login__user__password');
const loginBtn = document.querySelector('.login__button');

loginBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const username = loginId.value;
  const password = loginPw.value;

  if (!username) {
    alert('아이디를 입력해 주세요!');
    return;
  } else if (!password) {
    alert('비밀번호를 입력해 주세요!');
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
});
