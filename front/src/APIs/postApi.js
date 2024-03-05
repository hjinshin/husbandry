import axios from 'axios'
import { SERVER_URL } from '../config';

export const postID = async(nicnNm) => {
    try {
        const res = await axios({
            method: "POST",
            url: SERVER_URL + `/api/signup/id`,
            params: {  "nickname": nicnNm  },
        });
        //console.log(res.data);
        return res;
    } catch (error) {
        throw error;
    }
}

export const postpassWd = async(id, passWd) => {
    try {
        const res = await axios({
            method: "POST",
            url: SERVER_URL + `/api/signup`,
            data: {  
                "id": id,
                "pw": passWd  
            },
        });
        //console.log(res.data);
        return res;
    } catch (error) {
        throw error;
    }
}

export const postLogin = async(id, pw) => {
    try {
        const res = await axios({
            method: "POST",
            url: SERVER_URL + `/api/login`,
            data: {
                "id": id,
                "pw": pw
            }
        });
        return res;
    } catch (error) {
        throw error;
    }
}