import axios from 'axios';

const API_URL = 'http://localhost:8080/api/ticket'

class TicketService {
    createTicket(ticket) {
        return axios.post(API_URL + `/`, {
            place_id: ticket.place_id,
            customer: ticket.customer,
        })
            .then(response => {
                return response.data;
            })
    }

    findAllTicketsByCustomerId(id) {
        return axios.get(API_URL + `/${id}`)
    }
}

export default new TicketService()