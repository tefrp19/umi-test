import { request } from '@umijs/max';



export async function login(data) {
    const { username, password } = data
    return request('/api/login', {
        method: 'POST',
        data: {
            username: username,
            password: password
        },
        // getResponse: false,
    })

}

export async function getEmployees() {
    return request('/api/employees')

}