import axios from 'axios'
import { SERVER_URL } from '../config';

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
export const getBalance = async() => {
    try {
        const res = await axios({
            method:"GET",
            url: SERVER_URL + '/api/balance'
        });
        // console.log(res.data);
        return res.data;
    } catch(error) {
        throw error;
    }
}
export const getDraw = async(order) => {
    try {
        const res = await axios({
            method:"GET",
            url: SERVER_URL + '/api/draw',
            params:{
                "order": order
            }
        });
        // console.log(res.data);
        return res.data;
    } catch(error) {
        throw error;
    }
}