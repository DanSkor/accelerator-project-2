const form = document.querySelector('.form__field');
const labelPhone = document.querySelector('.form__label--phone');
const inputPhone = document.querySelector('.form__input--phone');
const labelEmail = document.querySelector('.form__label--email');
const inputEmail = document.querySelector('.form__input--email');

const numbers = '0123456789';
const regex = /^([A-Za-zА-Яа-я0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-zА-Яа-я]{2,4})$/gm;

const validationEmail = (event) => {
  const email = inputEmail.value;

  if (email.length === 0) {
    event.preventDefault();
    inputEmail.classList.add('form__input--error');
    inputEmail.addEventListener('input', ()=> {
      inputEmail.classList.remove('form__input--error');
    });
  }

  if (regex.test(email) === false) {
    event.preventDefault();
    inputEmail.classList.add('form__input--error');
    inputEmail.addEventListener('input', ()=> {
      inputEmail.classList.remove('form__input--error');
    });
  }
};

const validationTel = (event) => {
  const tel = inputPhone.value;
  if (tel.length === 0) {
    event.preventDefault();
    inputPhone.classList.add('form__input--error');
    inputPhone.addEventListener('input', ()=> {
      inputPhone.classList.remove('form__input--error');
    });
  }

  for (let i = 0; i < tel.length; i++) {
    if (!numbers.includes(tel[i])) {
      inputPhone.classList.add('form__input--error');
      inputPhone.addEventListener('input', ()=> {
        inputPhone.classList.remove('form__input--error');
      });
    }
  }
};

form.addEventListener('submit', (evt)=> {
  validationEmail(evt);
  validationTel(evt);
});

const hidingLabelPhone = () => {
  labelPhone.style.color = 'transparent';
};

const appearingLabelPhone = () => {
  const value = inputPhone.value;
  if (value.length === 0) {
    labelPhone.style.color = 'rgba(45, 56, 63, 0.5)';
  }
};

inputPhone.addEventListener('focusin', hidingLabelPhone);
inputPhone.addEventListener('focusout', appearingLabelPhone);

const hidingLabelEmail = () => {
  labelEmail.style.color = 'transparent';
};

const appearingLabelEmail = () => {
  const value = inputEmail.value;
  if (value.length === 0) {
    labelEmail.style.color = 'rgba(45, 56, 63, 0.5)';
  }
};

inputEmail.addEventListener('focusin', hidingLabelEmail);
inputEmail.addEventListener('focusout', appearingLabelEmail);
