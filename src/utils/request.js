import axios from 'axios'

import { Toast } from 'antd-mobile';

axios.defaults.withCredentials=true;

const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000*200, //1m request timeout
  headers:{
    platform:'juooo-zly'
  },
  withCredentials: true,
  crossDomain:true 
  
});

export default service
service.interceptors.request.use(config => {
  // config.headers['token'] = getToken()
  return config
}, error => {
  Promise.reject(error)
});


service.interceptors.response.use(
  response => {

    if(response.data.error===403){
      // removeToken();
      // router.currentRoute.path!='/login'?router.replace({path:"/login",query:{redirect:router.currentRoute.fullPath}}):null;//去登录; 
      response.data.data={};
      return response;
    }else{
      return response;
    }   

  },
  error => {
    return Promise.reject(error)
  }
)



let api = "";//跨域配置的api
if(process.env.NODE_ENV === "development") {
    api = "/api"
}



export function post(url,data,{isLoading=false,text="加载中..."}={}){
  return new Promise((resolve,reject)=>{
    if(isLoading) Toast.loading(text, 0);
    service({
      url: api + url,
      method:'POST',
      data:data,
      headers:{}
    }).then((res)=>{
      resolve(res.data);
      if(isLoading) Toast.hide();
    }).catch(err=>{
      reject(err);
      Toast.fail(err.message, 2)
    })
  })
}

export function get(url,params,{isLoading=false,text="加载中..."}={}){
  return new Promise((resolve,reject)=>{
    if(isLoading) Toast.loading(text, 0);
    service({
      url:api + url,
      method:'GET',
      params:params,
      headers:{}      
    }).then((res)=>{
      resolve(res.data);
      if(isLoading) Toast.hide();
    }).catch(err=>{
      reject(err);
      Toast.fail(err.message, 2);
    })
  })
}
