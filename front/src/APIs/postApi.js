import axios from 'axios'

const SERVER_SEARCH_URL = 'http://localhost:8080';

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