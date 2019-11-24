export const usersServices = {
    usersLogin,
    logout,
    registration,
    getUsers,
    getID,
    updateUsers
}

function usersLogin(UsersEmail, UsersPassword) {
    const requestOptions = {
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ UsersEmail, UsersPassword })
    }

    return fetch(`http://localhost:4200/api/users/`, requestOptions)
    .then(handleResponse)
    .then(users => {
        localStorage.setItem('users', JSON.stringify(users))

        return users
    })
}

function logout() {
    localStorage.removeItem('users')
}

function getUsers(UsersEmail) {
    const requestOptions = {
        method: 'get',
    }

    return fetch('https://localhost:4200/api/users' + UsersEmail, requestOptions)
    .then(handleResponse);
}
function getUsers(UsersEmail) {
    const requestOptions = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(fields)
    }

    return fetch('http://localhost:4200/api/users', requestOptions)
    .then(handleResponse)
}
function updateUsers(account) {
    const requestOptions = {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(account)
    }

    return fetch(`http://localhost:4200/api/users/${account.UsersEmail}`, requestOptions)
        .then(handleResponse)
}

function getID(UsersEmail) {
    const requestOptions = {
        method: 'GET',
    }

    return fetch(`http://localhost:4200/api/users/${UsersEmail}`, requestOptions)
        .then(handleResponse)
}



function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text)
        if (!response.ok) {
            if (response.status === 401) {
                logout()

            }

            const error = (data && data.message) ||
            response.statusText
            return Promise.reject(error)
        }

        return data
    })
}