import axios from 'axios'
import { SERVER_URL } from '../config';

export const updateFarmThruBuy = async(num, land) => {
    try {
        const res = await axios({
            method:"PUT",
            url: SERVER_URL + '/api/buy',
            params: {
                "num": num,
                "land": land
            }
        });
        console.log(res.data);
        return res.data;
    } catch(error) {
        throw error;
    }
}

export const updateFarmThruSell = async(land) => {
    try {
        const res = await axios({
            method:"PUT",
            url: SERVER_URL + '/api/sell',
            params: {
                "land": land
            }
        });
        console.log(res.data);
        return res.data;
    } catch(error) {
        throw error;
    }
}

export const updateBuyLand = async() => {
    try {
        const res = await axios({
            method:"PUT",
            url: SERVER_URL + '/api/land',
        });
        console.log(res.data);
        return res.data;
    } catch(error) {
        throw error;
    }
}

export const updateAnimCond = async(order, land, nickName) => {
    try {
        const res = await axios({
            method:"PUT",
            url: SERVER_URL + '/api/condition',
            params:{
                "order": order,
                "land": land,
                "nickName": nickName
            }
        });
        // console.log(res.data);
        return res.data;
    } catch(error) {
        throw error;
    }
}