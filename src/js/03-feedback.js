import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('.feedback-form input[name="email"]');
const inputMessage = document.querySelector(
  '.feedback-form textarea[name="message"]'
);

const dataInput = {
  email: '',
  message: '',

  setDataInput(email, message) {
    this.email = email;
    this.message = message;
  },

  clearDataInput() {
    this.email = '';
    this.message = '';
  },
};

window.addEventListener('load', checkDataforInput);
formEl.addEventListener('input', throttle(toSaveDataLocaleStorage, 500));
formEl.addEventListener('submit', submitForm);

function checkDataforInput() {
  let savedData;
  try {
    savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  } catch (error) {
    console.log('Error getting data', error.message);
  }

  if (!savedData) {
    return;
  }

  inputEmail.value = savedData.email;
  inputMessage.value = savedData.message;
  dataInput.setDataInput(savedData.email, savedData.message);
}

function toSaveDataLocaleStorage(evt) {
  dataInput[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(dataInput));
}

function submitForm(evt) {
  evt.preventDefault();
  localStorage.clear();
  evt.currentTarget.reset();
  console.log(dataInput);
  dataInput.clearDataInput();
}
