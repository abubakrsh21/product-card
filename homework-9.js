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

function openModal() {
    modal.classList.add('modal-showed');
    overlay.classList.add('modal-showed');
}

function closeModal() {
    modal.classList.remove('modal-showed');
    overlay.classList.remove('modal-showed');
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


// (6) Создание формы для модального окна (регистрации)

const registerForm = document.getElementById('register-form');

let user = null;

registerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const password = registerForm.password.value;
    const repeatPassword = registerForm.repeatPassword.value;

    if (password !== repeatPassword) {
        alert('Пароли не совпадают');
        return;
    }

    const firstName = registerForm.firstName.value.trim();
    const lastName = registerForm.lastName.value.trim();
    const birthDate = registerForm.birthDate.value;
    const login = registerForm.login.value.trim();
    const password2 = registerForm.password.value.trim();
    const createdOn = new Date();

    user = {
        firstName,
        lastName,
        birthDate,
        login,
        password2,
        createdOn
    };

    console.log(user);

    modal.classList.remove('modal-showed');
    overlay.classList.remove('modal-showed');

    registerForm.reset();
});