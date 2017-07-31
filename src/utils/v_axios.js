/**
 * Created by yanglei on 2017/6/30.
 */
import axios from 'axios';
function checkResponse(response){
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        return response
    } else {
        return {
            status: -404,
            msg: '网络异常'
        }
    }
}

function checkErr(res){
    if (res.status === -404) {
        alert(res.msg)
    }
    if (res.data && (!res.data.success)) {
        alert(res.data.error_msg)
    }
    return res;
}
export default {
    get: (url, params) => {
        return axios.get(url, {
            params: params
        }).then((response) => {
           return checkResponse(response)
        }, (res) => {
            return checkErr(res)
        });
    },
    post: (url, data) => {
        return axios.post(url, {
            data: data
        }).then((response) => {
            return checkResponse(response);
        }, (res) => {
            return checkErr(res)
        });
    }
}
