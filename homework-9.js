// (4) Работа с email-формой

const form = document.querySelector('.subscribe-form');
const emailInput = document.querySelector('#email');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailValue = emailInput.value.trim();

    if (!emailValue) {
        alert('Введи email');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        alert('Введите корректный email');
        return;
    }

    console.log({ email: emailValue });

    form.reset();
});


// (5) Создание модального окна

const openBtn = document.getElementById('open-modal-btn');
const closeBtn = document.getElementById('modal-close');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

openBtn.addEventListener('click', () => {
    modal.classList.add('modal-showed');
    overlay.classList.add('modal-showed');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal-showed');
    overlay.classList.remove('modal-showed');
});

overlay.addEventListener('click', () => {
    modal.classList.remove('modal-showed');
    overlay.classList.remove('modal-showed');
});


// (6) Создание формы для модального окна (регистрации)

const registerForm = document.getElementById('register-form');

let user = null;

registerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!registerForm.checkValidity()) {
        alert('Форма заполнена неверно');
        registerForm.reportValidity();
        return;
    }

    const password = registerForm.password.value;
    const repeatPassword = registerForm.repeatPassword.value;

    if (password !== repeatPassword) {
        alert('Пароли не совпадают');
        return;
    }

    user = {
        firstName: registerForm.firstName.value.trim(),
        lastName: registerForm.lastName.value.trim(),
        birthDate: registerForm.birthDate.value,
        login: registerForm.login.value.trim(),
        password: password,
        createdOn: new Date()
    }

    console.log(user);

    modal.classList.remove('modal-showed');
    overlay.classList.remove('modal-showed');

    registerForm.reset();
});