let api = "";
if(process.env.NODE_ENV === "development") {
    api = "/api"
}
export const GET_CALSSIFY_HOME = api + "/home/index/getClassifyHome";