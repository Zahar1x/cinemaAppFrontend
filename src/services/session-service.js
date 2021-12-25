import axios from 'axios';

const API_URL = 'http://localhost:8080/api/'

class SessionService {
    getSessionByCinemaId(cinemaId) {
        return axios.get(API_URL + `sessions/${cinemaId}`);
    }
}

export default new SessionService()