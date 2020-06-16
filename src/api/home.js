// import { Component } from "react";

import * as HttpUtils from "@/utils/request";
import * as Api from "@/api/constant";

// console.log("哈哈哈哈哈哈",Api.GET_CALSSIFY_HOME);
console.log("http----",HttpUtils);

export function get_classify_home(params){
    return new Promise((resolve,reject)=>{
        HttpUtils.get(Api.GET_CALSSIFY_HOME,params,{isLoading:true}).then(res=>{
            resolve(res);
        })
    })
    
}