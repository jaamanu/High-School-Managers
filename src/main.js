const bar = document.querySelector('.hamburger');
const menu = document.querySelectorAll('.menu');
const logo = document.querySelector('.logo');
const menuOne = document.querySelector('.menuItems');

bar.addEventListener('click', function(){
  bar.classList.toggle('active')
  menuOne.classList.toggle('in-active')
  logo.classList.toggle('in-active')
})

const spreadList = [...menu];
spreadList.forEach((menuList) => {
  menuList.addEventListener('click', () => {
    bar.classList.toggle('active')
    menuOne.classList.toggle('in-active')
    logo.classList.toggle('in-active')
  });
});

const principal = [{
  principalName: 'Mr JA MANU',
  principalImage: './images1/JAMANU.jpg',
  schoolPrincipal: 'Founder of Manu Angels High School',
  PrincipalTestimony: 'I can attest that the School-Managers Notebook packs that i purchased for my managers has brought great improvement to my school.',

}, {
  principalName: 'Mr JAMES BARNS',
  principalImage: './images1/james.jpg',
  schoolPrincipal: 'Founder of James Barns Secondary School',
  PrincipalTestimony: 'School-Managers Notebook packs that i purchased for my managers has brought great productivity to my school.',

}, {
  principalName: 'MrS JULIET KORK',
  principalImage: './images1/juliet.jpg',
  schoolPrincipal: 'Founder of Juliet Kork High School',
  PrincipalTestimony: 'School-Managers Notebook packs that i purchased for my managers has change the dynamics of my school.',
  className: 'hide',
}, {
  principalName: 'Mr JOHN BONNY',
  principalImage: './images1/john.jpg',
  schoolPrincipal: 'Founder of Bonny Angels Academy',
  PrincipalTestimony: 'I can attest that the School-Managers Notebook packs that i purchased for my managers has brought great improvement to my school.',
  className: 'hide',
}, {
  principalName: 'MrS JANE MANU',
  principalImage: './images1/jane.jpg',
  schoolPrincipal: 'Founder of Saint Angels High School',
  PrincipalTestimony: 'I can attest that the School-Managers Notebook packs that i purchased for my managers has brought great improvement to my school.',
  className: 'hide',
}, {
  principalName: 'Mr JIMMY KARATE',
  principalImage: './images1/jimmy.jpg',
  schoolPrincipal: 'Founder of KArateKid Academy',
  PrincipalTestimony: 'I can attest that the School-Managers Notebook packs that i purchased for my managers has brought great improvement to my school.',
  className: 'hide',
},
];

const cover = document.querySelector('.principals');

principal.forEach((prince) => {
  const div = document.createElement('div');
  div.innerHTML += `
  <img src="${prince.principalImage}" class="${prince.className} testimonialImg" alt="">
                      <div class="first-testimonial-div ${prince.className}">
                          <h3 class="first-testimonial-h3">${prince.principalName}</h3>
                          <p class="first-testimonial-p1">${prince.schoolPrincipal}</p>
                          <p class="first-testimonial-p2">${prince.PrincipalTestimony}</p>
                      </div>
  `;
  div.classList.add('first-testimonial');
  cover.append(div);
});

const speakDiv = document.querySelectorAll('.hide');
const btn = document.querySelector('.button');
const spreadLis = [...speakDiv];

btn.addEventListener('click', () => {
  btn.classList.toggle('select');
  spreadLis.forEach((list) => {
    list.classList.toggle('tap');
  });
});

// --------------formvalidation---------

const nameError = document.querySelector('.nameinfo');
const emailError = document.querySelector('.emailinfo');
const textError = document.querySelector('.textinfo');
const submitError = document.querySelector('.submit1');

function nameMessage() {
  const names = document.querySelector('.name').value;
  const name = document.querySelector('#name');
  if (name.length === 0) {
    nameError.innerHTML = 'Required';
    nameError.style.color = 'red';
    name.style.border = '1px solid red';
    return false;
  }
  if (!names.match(/^[a-zA-Za]*\s[a-zA-Za]*$/)) {
    nameError.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    nameError.style.color = 'red';
    name.style.border = '1px solid red';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  nameError.style.color = 'green';
  name.style.border = '1px solid green';
  return true;
}

function emailMessage() {
  const emails = document.querySelector('.email').value;
  const email = document.querySelector('#email');
  if (emails.length === 0) {
    emailError.innerHTML = 'Required';
    emailError.style.color = 'red';
    email.style.border = '1px solid red';
    return false;
  }
  if (!emails.match(/^[a-z-0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z-0-9-]*\.[a-z]+(?:\.[a-z-0-9-]+)*$/)) {
    emailError.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    emailError.style.color = 'red';
    email.style.border = '1px solid red';
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  emailError.style.color = 'green';
  email.style.border = '1px solid green';
  return true;
}

function textareaMessage() {
  const textareas = document.querySelector('.textarea').value;
  const required = 30;
  const left = required - textareas.length;
  if (left > 0) {
    textError.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    textError.style.color = 'red';
    return false;
  }
  textError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  textError.style.color = 'green';
  return true;
}

function submitMessage() {
  if (!nameMessage() || !emailMessage() || !textareaMessage()) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'please fix';
    submitError.style.color = 'red';
    setTimeout(() => { submitError.style.display = 'none'; }, 4000);
    return false;
  }
  return true;
}
submitMessage();