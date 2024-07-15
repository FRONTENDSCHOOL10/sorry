import client from '/src/api/pocketbase';

const idField = document.querySelector('.userId');
const pwField = document.querySelector('.userPw');
const pwConfirmField = document.querySelector('.userPw__confirm');
const emailField = document.querySelector('.userEmail');
const registerBtn = document.querySelector('.main__button');
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

function isValidForm(memberId, password, passwordConfirm, email) {
  if (!idCheck(memberId)) {
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
  const memberId = idField.value;
  const password = pwField.value;
  const passwordConfirm = pwConfirmField.value;
  const email = emailField.value;

  if (!isValidForm(memberId, password, passwordConfirm, email)) return;

  try {
    await client
      .collection('member')
      .create({ memberId, password, passwordConfirm, email });
    alert('회원 가입이 완료되었습니다! 로그인 페이지로 이동합니다.');
    location.href = '/';
  } catch (error) {
    console.error('error : ', error);
    alert('동일한 이메일이 존재합니다.');
    idField.value = '';
    pwField.value = '';
    emailField.value = '';
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

registerBtn.addEventListener('click', register);
