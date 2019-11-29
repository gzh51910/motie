import axios from 'axios';

// 创建axios实例
const nsg = axios.create({
    baseURL: 'https://app2.motie.com/'
});

// 二次封装(简化操作,维护方便)
async function get(path,params,config={}){
  let {data} = await nsg.get(path,{
    ...config,
    params
  });

  return data;
}

function post(path,data,config={}){
  return nsg.post(path,data,config);
}

export default {
  get,
  post
}