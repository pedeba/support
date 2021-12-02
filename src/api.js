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

export function GET_COMMENTS (id) {
    return {
        url: API_URL + `/mensagem?id_ticket=${id}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }
}

export function POST_COMMENT (body) {
    return {
        url: API_URL + `/mensagem`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: body
    }
}

export function GET_TICKETS_ALL () {
    return {
        url: API_URL + `/ticket/all`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }
}


export function DELETE_COMMENT (id) {
    return {
        url: API_URL + `/mensagem/${id}`,
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }
}

export function GET_TICKETSA (id) {
    return {
        url: API_URL + `/ticket/${id}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }
}
