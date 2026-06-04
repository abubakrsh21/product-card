const users = localStorage.getItem('users');

const app = document.getElementById('app');

const deleteAllButton =
    document.getElementById('delete-all');

const showAllButton =
    document.getElementById('show-all');

function renderUsers(users) {
    app.innerHTML = '';

    if (users.length === 0) {
        app.textContent = 'Список пользователей пуст';
        return;
    }

    users.forEach(user => {
        const card = document.createElement('div');

        card.classList.add('card');

        card.innerHTML = `
            <h3>${user.name} ${user.surname}</h3>
            <p>Email: ${user.email}</p>
            <p>Возраст: ${user.age}</p>
            <button class="delete-user">
                Удалить
            </button>
        `;

        const deleteButton = card.querySelector('.delete-user');

        deleteButton.addEventListener('click', () => {
            deleteUser(user.id);
        });

        app.append(card);
    })
}

function deleteUser(id) {
    const users = JSON.parse(
        localStorage.getItem('users')
    );

    const filteredUsers = users.filter(user => {
        return user.id !== id;
    });

    localStorage.setItem(
        'users',
        JSON.stringify(filteredUsers)
    );

    renderUsers(filteredUsers);
}

async function loadUsers() {
    const usersFromStorage = localStorage.getItem('users');

    if (usersFromStorage) {
        console.log('Данные взяты из localStorage');

        const users = JSON.parse(usersFromStorage);

        app.textContent = `Пользователей: ${users.length}`;

        return;
    }

    app.textContent = 'Данные загружаются..';

    await new Promise(resolve => {
        setTimeout(resolve, 3000);
    });

    const response = await fetch('./users.json');

    const data = await response.json();

    localStorage.setItem(
        'users',
        JSON.stringify(data.users)
    );

    localStorage.setItem(
        'allUsers',
        JSON.stringify(data.users)
    );

    renderUsers(data.users);
}

deleteAllButton.addEventListener('click', () => {
    localStorage.setItem(
        'users',
        JSON.stringify([])
    );

    renderUsers([]);
});

showAllButton.addEventListener('click', () => {
    const allUsers = JSON.parse(
        localStorage.getItem('allUsers')
    );

    const currentUsers = JSON.parse(
        localStorage.getItem('users')
    );

    if (currentUsers.length === allUsers.length) {
        app.insertAdjacentHTML(
            'beforebegin',
            '<p>Все пользователи уже отображены</p>'
        );

        return;
    }

    localStorage.setItem(
        'users',
        JSON.stringify(allUsers)
    );

    renderUsers(allUsers);
});

loadUsers();