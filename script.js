const wrapperForm = document.createElement("div");
const createAnAccount = document.createElement("p");
const form = document.createElement("form");
const wrapperMail = document.createElement("div");
const mail = document.createElement("input");
const wrapperPassword = document.createElement("div");
const password = document.createElement("input");
const button = document.createElement("button");
const block = document.createElement("div");
const buttonCancel = document.createElement("button");
const buttonConfirm = document.createElement('button')
const user = document.createElement('p')
const wrapperButton = document.createElement('div')
const wrapperUser = document.createElement('div')
const helloUser = document.createElement('p')
const img = new Image(500, 300)

const wrapper = () => {
  wrapperForm.classList.add("wrapper");
  form.classList.add("form");

  createAnAccount.classList.add("create-an-account");
  createAnAccount.innerHTML = "Create an account";

  wrapperMail.classList.add("wrapper-mail");
  mail.classList.add("mail");
  mail.type = "email";
  wrapperMail.innerHTML = "Mail";
  wrapperMail.append(mail);

  wrapperPassword.classList.add("wrapper-password");
  password.classList.add("password");
  password.type = "password";
  wrapperPassword.innerHTML = "Password";
  wrapperPassword.append(password);

  button.classList.add("button");
  button.innerHTML = "Button";
  button.disabled = true

  form.append(wrapperMail, wrapperPassword, button, createAnAccount);
  wrapperForm.append(form);

  return wrapperForm;
};

function isValidEmail(email) {
  return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);
}

function isValidPassword(password) {
  return /^(?=.*[A-Za-z])(?=.*[!@#$%^&*? ])(?=.{8,}).*$/.test(password); // Пароль должен содержать одну букву, одну цифру и один спец. символ
}

button.addEventListener("click", (event) => {
  event.preventDefault();

  block.classList.add("ass");

  wrapperButton.classList.add('wrapper-button')

  user.innerHTML = `Please confirm account creation for ${mail.value}`

  buttonCancel.classList.add("button-cancel");
  buttonCancel.innerHTML = "Cancel";

  buttonConfirm.classList.add("button-confirm");
  buttonConfirm.innerHTML = "Confirm";
  wrapperButton.append(buttonCancel, buttonConfirm)
  block.append(user, wrapperButton);
  wrapperForm.append(block);
});

buttonCancel.addEventListener("click", (event) => {
  event.preventDefault();

  wrapperForm.removeChild(block);
});

buttonConfirm.addEventListener('click', event => {
  event.preventDefault()
  wrapperForm.remove()

  wrapperUser.classList.add('wrapper-user')

  helloUser.classList.add('hello-user')
  helloUser.innerHTML = `Hello, user whit email ${mail.value}`

  img.src = 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'

  wrapperUser.append(helloUser, img)
  document.body.append(wrapperUser)
  })

function setButtonDisabled() {
  button.disabled = !validMail || !validPassword;
}

let validMail = false;
let validPassword = false;


mail.addEventListener('input', event => {
  validMail = isValidEmail(event.target.value)

  setButtonDisabled()
})

password.addEventListener('input', event => {
  validPassword = isValidPassword(event.target.value)

  setButtonDisabled()
})

document.body.appendChild(wrapper());

