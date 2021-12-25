import axios from 'axios';

const API_URL = 'http://localhost:8080/api/'

class CinemaService {
    getCinemas() {
        return axios.get(API_URL + `cinema/`);
    }
}
export default new CinemaService()