import Cookies from "js-cookie"


export const POST = async (url, payload, header = {}, withToken = false) => {
    try {
        let x = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', ...header },
            body: JSON.stringify(payload),
        })
            .then(response => response.json())
            .then(data => {
                return data
            })
        return x
    }
    catch (e) {
        return { success: false }
    }
}


export const POST_TOKEN = async (url, payload = {}, header = {}) => {
    let x = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', token: Cookies.get('token'), ...header },
        body: JSON.stringify(payload),
    })
        .then(response => response.json())
        .then(data => {
            return data
        })
    return x
}

export const DELETE = async (url, payload, header = {}) => {
    let x = await fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', ...header },
        body: JSON.stringify(payload),
    })
        .then(response => response.json())
        .then(data => {
            return data
        })
    return x
}

export const GET = async (url, header = {}) => {
    let x = await fetch(url, {
        method: 'GET',
        headers: header,
    })
        .then(response => response.json())
        .then(data => {
            return data
        })
    return x
}

export const PUT = async (url, payload, header = {}) => {
    let x = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...header },
        body: JSON.stringify(payload),
    })
        .then(response => response.json())
        .then(data => {
            return data
        })
    return x
}


