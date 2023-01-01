import axios from "axios"
import { TOKEN_KEY } from "../constant/constant";



export const apiGet = async (_url) => {
    try {
        let resp = await axios.get(_url, {
            headers: {
                "x-api-key": localStorage[TOKEN_KEY],
                'Content-Type': "application/json"
            }
        })
        return resp;
    } catch (err) {
        
        throw err;
    }
}
export const apiPost = async (_url, _body = {}) => {
    try {
        let resp = await axios({
            url: _url,
            method: 'POST',
            data: JSON.stringify(_body),
            headers: {
                "x-api-key": localStorage[TOKEN_KEY],
                'Content-Type': "application/json",
                "Access-Control-Allow-Origin": "*",

                "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS",

                "Access-Control-Allow-Headers": "*"
            }
        })
         
        return await resp.data
    } catch (err) {
        throw err.response.status;    // !thorw err send data from register:1 and not from catch 
    }
}
export const apiPut = async (_url, _body = {}) => {
    try {
        let resp = await axios({
            url: _url,
            method: 'PUT',
            data: JSON.stringify(_body),
            headers: {
                "x-api-key": localStorage[TOKEN_KEY],
                'Content-Type': "application/json"
            }
        })
        return resp;
    } catch (err) {
        throw err;
    }
}
export const apiDelete = async (_url, _body = {}) => {
    try {
        let resp = await axios({
            url: _url,
            method: 'DELETE',
            data: JSON.stringify(_body),
            headers: {
                "x-api-key": localStorage[TOKEN_KEY],
                'Content-Type': "application/json"
            }
        })
        return resp;
    } catch (err) {
        throw err;
    }
}