import axios from 'axios'

const SERVER_SEARCH_URL = 'http://localhost:8080';

export const getCheckCookie = async() => {
    try {
        const res = await axios({
            method: "GET",
            url: SERVER_SEARCH_URL + '/api/exist'
        });
        //console.log(res.data);
        return res;
    } catch (error) {
        throw error;
    }
}