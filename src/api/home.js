import * as HttpUtils from "@/utils/request";
import * as Api from "@/api/constant";

export function get_slide_classify_home(params){
    return new Promise((resolve,reject)=>{
        HttpUtils.get(Api.GET_SLIDE_CALSSIFY_HOME,params,{isLoading:true}).then(res=>{
            switch(res.code){
                case '200':
                    resolve(res.data)
                break;
                default:
                    reject(res.data)
                break;
            }
        })
    })
}

export function GET_HOT_RECOMMEND_LIST(params){
    return new Promise((resolve,reject)=>{
        HttpUtils.get(Api.GET_HOT_RECOMMEND_LIST,params,{isLoading:true}).then(res=>{
            switch(res.code){
                case '200':
                    resolve(res.data)
                break;
                default:
                    reject(res.data)
                break;
            }
        })
    })
}

export function get_tour_data(params){
    return new Promise((resolve,reject)=>{
        HttpUtils.get(Api.GET_TOUR_DATA,params,{isLoading:true}).then(res=>{
            switch(res.code){
                case '200':
                    resolve(res.data)
                break;
                default:
                    reject(res.data)
                break;
            }
        })
    })
}

export function GET_RECOMMEND_LIST(params){
    return new Promise((resolve,reject)=>{
        HttpUtils.get(Api.GET_RECOMMEND_LIST,params,{isLoading:true}).then(res=>{
            switch(res.code){
                case '200':
                    resolve(res.data)
                break;
                default:
                    reject(res.data)
                break;
            }
        })
    })
}

export function get_floor_list(params){
    return new Promise((resolve,reject)=>{
        HttpUtils.get(Api.GET_FLOOR_LIST,params,{isLoading:true}).then(res=>{
            switch(res.code){
                case '200':
                    resolve(res.data)
                break;
                default:
                    reject(res.data)
                break;
            }
        })
    })
}