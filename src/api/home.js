import * as HttpUtils from "@/utils/request";
import * as Api from "@/api/constant";

export function get_classify_home(params){
    return new Promise((resolve,reject)=>{
        HttpUtils.get(Api.GET_CALSSIFY_HOME,params,{isLoading:true}).then(res=>{
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