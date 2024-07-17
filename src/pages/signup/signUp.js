import pb from '/src/api/pocketbase';
import '/src/styles/style.scss';
import '/src/js/header.js';

document.addEventListener('DOMContentLoaded', () => {
  const idField = document.querySelector('.signup__userId');
  const pwField = document.querySelector('.signup__user__password');
  const pwConfirmField = document.querySelector(
    '.signup__user__passwordConfirm'
  );
  const emailField = document.querySelector('.signup__user__email');
  const registerBtn = document.querySelector('.signup__button');
  const agreeCheckbox = document.querySelector('.agree__checkbox');
  const idError = document.querySelector('.id__error');
  const pwError = document.querySelector('.pw__error');

  function setFieldEventListeners(field, errorField, validate, blurMsg) {
    field.addEventListener('focus', () => {
      errorField.innerText = '';
    });
    field.addEventListener('blur', () => {
      if (!validate(field.value)) {
        errorField.innerText = blurMsg;
        errorField.style.color = '#6b6b6b';
      } else {
        errorField.innerText = '';
      }
    });
    field.addEventListener('input', updateButtonState);
  }

  function showError(field, errorField, msg) {
    errorField.innerText = msg;
    errorField.style.color = '#FF153C';
    field.value = '';
  }

  function idCheck(userId) {
    return /^[a-zA-Z0-9]{6,12}$/.test(userId);
  }

  function pwCheck(userPw) {
    return /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*])[A-Za-z\d~!@#$%^&*]{8,15}$/.test(
      userPw
    );
  }

  function pwConfirm(pw, pwConfirm) {
    return pw === pwConfirm;
  }

  function emailCheck(userEmail) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(userEmail);
  }

  function isValidForm(memberid, password, passwordConfirm, email) {
    if (!idCheck(memberid)) {
      showError(
        idField,
        idError,
        '아이디는 6~12자의 영문 또는 영문+숫자만 사용 가능합니다.'
      );
      return false;
    }

    if (!pwCheck(password)) {
      showError(
        pwField,
        pwError,
        '비밀번호는 8~15자의 영문+숫자+특수문자(~!@#$%^&*)만 사용 가능합니다.'
      );
      return false;
    }

    if (!pwConfirm(password, passwordConfirm)) {
      alert('비밀번호가 일치하지 않습니다.');
      return false;
    }

    if (!emailCheck(email)) {
      alert('올바른 이메일을 입력하세요.');
      return false;
    }

    return true;
  }

  async function register() {
    const memberid = idField.value;
    const password = pwField.value;
    const passwordConfirm = pwConfirmField.value;
    const email = emailField.value;

    if (!isValidForm(memberid, password, passwordConfirm, email)) return;

    try {
      await pb.collection('users').create({
        username: memberid,
        password: password,
        passwordConfirm: passwordConfirm,
        email: email,
      });
      alert('회원 가입이 완료되었습니다! 로그인 페이지로 이동합니다.');
      location.href = '/src/pages/login/login';
    } catch (error) {
      console.error('error : ', error);
      alert('동일한 이메일이 존재합니다.');
      idField.value = '';
      pwField.value = '';
      emailField.value = '';
    }
  }

  function updateButtonState() {
    if (
      idField.value &&
      pwField.value &&
      pwConfirmField.value &&
      emailField.value &&
      agreeCheckbox.checked
    ) {
      registerBtn.classList.add('is--active');
    } else {
      registerBtn.classList.remove('is--active');
    }
  }

  setFieldEventListeners(
    idField,
    idError,
    idCheck,
    '영문 또는 영문, 숫자 조합 6~12자리'
  );

  setFieldEventListeners(
    pwField,
    pwError,
    pwCheck,
    '영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15자리'
  );

  agreeCheckbox.addEventListener('change', updateButtonState);
  registerBtn.addEventListener('click', register);

  updateButtonState();
});
