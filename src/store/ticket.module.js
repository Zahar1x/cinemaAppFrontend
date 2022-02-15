import TicketService from '../services/ticket-service'


export const ticket = {
    namespaced: true,
    state:{
        state: '',
    },
    actions: {
            create({ commit }, ticket) {
                return TicketService.createTicket(ticket).then(
                    ticket => {
                        commit('TicketCreationSuccess', ticket)
                        return Promise.resolve(ticket)
                    },
                    error => {
                        commit('TicketCreationFailure');
                        return Promise.reject(error);
                    }
                )
            }
        },
    mutations: {
        TicketCreationSuccess(state, ticket) {
            state.status.created = true;
            state.ticket = ticket;
        },
        TicketCreationFailure(state) {
            state.status.created = false;
            state.ticket = null;
        },
    }
}