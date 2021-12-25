import axios from 'axios';

const API_URL = 'http://localhost:8080/api/sessions'

class PlaceService {

    getPlaces(sessionId) {
        return axios.get(API_URL + `/${sessionId}/places`);
    }
}
export default new PlaceService()