import axios from 'axios'
import { SERVER_URL } from '../config';

export const getCheckCookie = async() => {
    try {
        const res = await axios({
            method: "GET",
            url: SERVER_URL + '/api/exist'
        });
        //console.log(res.data);
        return res;
    } catch (error) {
        throw error;
    }
}

export const getUserInfo = async() => {
    try {
        const res = await axios({
            method:"GET",
            url: SERVER_URL + '/api/userinfo'
        });
        // console.log(res);
        return res.data;
    } catch(error) {
        throw error;
    }
}

export const getFarmInfo = async() => {
    try {
        const res = await axios({
            method:"GET",
            url: SERVER_URL + '/api/farminfo'
        });
        return res.data;
    } catch(error) {
        throw error;
    }
}