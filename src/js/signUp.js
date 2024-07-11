import client from '/api/pocketbase';

console.log('회원가입페이지 연결됐나요?');

function register() {
  const idField = document.querySelector('.userId');
  const pwField = document.querySelector('.userPw');
  const emailField = document.querySelector('.userEmail');
  const registerBtn = document.querySelector('.main__button');

  registerBtn.addEventListener('click', () => {
    const memberId = idField.value;
    const password = pwField.value;
    const passwordConfirm = pwField.value;
    const email = emailField.value;

    client
      .collection('member')
      .create({ memberId, password, passwordConfirm, email })
      .then(() => {
        alert('회원 가입이 완료되었습니다! 로그인 페이지로 이동합니다.');
        location.href = '/';
      })
      .catch(() => {
        alert('동일한 이메일이 존재합니다.');
        //location.reload();
        idField.value = '';
        pwField.value = '';
        emailField.value = '';
      });
  });
}

register();
