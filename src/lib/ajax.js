import axios from "axios";


axios.defaults.baseURL = "https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd";
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const get =(url,params)=>{
    return new Promise((resolve,reject)=>{
        axios.get(url,{ params })
        .then(res =>resolve(res.data) )
        .catch( err => reject(err))
    })
}

export const post = (url,data={})=>{
    return new Promise((resolve,reject)=>{
        axios.post(url,data)
        .then(res =>resolve(res.data) )
        .catch( err => reject(err))
    });
}
