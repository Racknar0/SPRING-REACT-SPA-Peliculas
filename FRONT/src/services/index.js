import axios from 'axios';
const BASE_URL = 'http://localhost:8080';

export default class ApiDashboard {

    /* METODO GET */
    async getData(lastUrl) {
        return axios.get(`${BASE_URL}/${lastUrl}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => response.data);
    }

    /* METODO POST */
    async postData(lastUrl, data) {
        console.log('URL: ', `${BASE_URL}/${lastUrl}`);
        console.log('DATA: ', data);
        return axios.post(`${BASE_URL}/${lastUrl}`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => response.data);
    }
}