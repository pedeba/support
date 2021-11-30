export const API_URL = 'http://localhost:8080'

export function USER_POST(body){
    return {
        url: API_URL + '/login',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: body
    }
}

export function GET_TICKETS(id){
    return {
        url: API_URL + `/ticket?id_usuario=${id}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }
}

export function CREATE_TICKET(body) {
    return {
        url: API_URL + `/ticket`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: body
    }
}

export function UPDATE_TICKET (id, body) {
    return {
        url: API_URL + `/ticket/${id}`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: body
    }
}

export function DELETE_TICKET (id) {
    return {
        url: API_URL + `/ticket/${id}`,
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }
}
