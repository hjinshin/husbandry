import axios from 'axios'
import { SERVER_SEARCH_URL } from '../config';

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