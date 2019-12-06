import axios from 'axios';

// 创建axios实例
const my = axios.create({
    baseURL: 'http://118.31.77.168:3006/'
});

function get(path,params,config={}){
    return my.get(path,{
        ...config,
        params
    })
}

function post(path,data={},config={}){
    return my.post(path,data,config)
}

function postdata(path,data){
    return axios.post(path,data)
}

export default {
    get,
    post
}