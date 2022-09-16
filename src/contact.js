const nameError = document.querySelector('.contact-person-error');
const emailErr = document.querySelector('.contact-address-error');
const textErr = document.querySelector('.contact-message-error');
const submitErr = document.querySelector('.contact-submit-error');

function nameFun() {
  const nameTxt = document.querySelector('.contact-person').value;
  const nameId = document.querySelector('#contact-person');
  if (nameTxt.length === 0) {
    nameError.innerHTML = 'Required';
    nameError.style.color = 'red';
    nameId.style.border = '1px solid red';
    return false;
  }
  if (!nameTxt.match(/^[a-zA-Za]*\s[a-zA-Za]*$/)) {
    nameError.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    nameError.style.color = 'red';
    nameId.style.border = '1px solid red';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  nameError.style.color = 'green';
  nameId.style.border = '1px solid green';
  return true;
}

function emailFun() {
  const emailsAddress = document.querySelector('.contact-address').value;
  const emailAddress = document.querySelector('#contact-address');
  if (emailsAddress.length === 0) {
    emailErr.innerHTML = 'Required';
    emailErr.style.color = 'red';
    emailAddress.style.border = '1px solid red';
    return false;
  }
  if (!emailsAddress.match(/^[a-z-0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z-0-9-]*\.[a-z]+(?:\.[a-z-0-9-]+)*$/)) {
    emailErr.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    emailErr.style.color = 'red';
    emailAddress.style.border = '1px solid red';
    return false;
  }
  emailErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  emailErr.style.color = 'green';
  emailAddress.style.border = '1px solid green';
  return true;
}

function textareaFun() {
  const textarea = document.querySelector('.contact-message').value;
  const required = 30;
  const left = required - textarea.length;
  if (left > 0) {
    textErr.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    textErr.style.color = 'red';
    return false;
  }
  textErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  textErr.style.color = 'green';
  return true;
}

function submitFun() {
  if (!nameFun() || !emailFun() || !textareaFun()) {
    submitErr.style.display = 'block';
    submitErr.innerHTML = 'please fix';
    submitErr.style.color = 'red';
    setTimeout(() => { submitErr.style.display = 'none'; }, 4000);
    return false;
  }
  return true;
}
submitFun();