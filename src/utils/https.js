import axios from "axios"
import qs from "qs"
import Loading from "components/loading/index.js"
let loading = Loading();
// 封装axios
const server = axios.create({
    // baseURL:"",
    timeout:5000,
    withCredentials:true
})

// 拦截器
server.interceptors.request.use((config)=>{
    if(config.method.toUpperCase() == "GET"){
        // config.params = {...config.data}
    }else if(config.method.toUpperCase() == "POST"){
        config.headers["content-type"] = "appliaciton/x-www-form-urlencoded";
        // config.data = qs.stringify(config.data)
    }
    loading.handleMount();
    return config;
},(err)=>{
    Promise.reject(err);
})




server.interceptors.response.use((res)=>{
    if(res.statusText == "OK"){
        loading.handleDestory();
        return res.data
    }
},(err)=>{
    Promise.reject(err);
})

export default (method,url,data={})=>{
    if(method.toUpperCase() == "GET"){
        return server.get(url,{
            params:data
        })
    }else if(method.toUpperCase() == "POST"){
        return server.post(url,data);
    }
}
