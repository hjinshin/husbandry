import axios from 'axios'
import { SERVER_SEARCH_URL } from '../config';

export const postNickNm = async(nicnNm) => {
    try {
        const res = await axios({
            method: "POST",
            url: SERVER_SEARCH_URL + `/api/nickname`,
            params: {  "nickname": nicnNm  },
        });
        //console.log(res.data);
        return res;
    } catch (error) {
        throw error;
    }
}

export const postpassWd = async(passWd) => {
    try {
        const res = await axios({
            method: "POST",
            url: SERVER_SEARCH_URL + `/api/passwd`,
            params: {  "passwd": passWd  },
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
            url: SERVER_SEARCH_URL + `/api/login`,
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