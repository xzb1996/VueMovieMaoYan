import http from "utils/https.js"
//正在热映
export const movie_now_api = (cityId=10)=>http("get","/api/movieOnInfoList",{cityId:cityId})
//即将上映
export const movie_coming_api = (cityId=10)=>http("get","/api/movieComingList",{cityId:cityId})
//城市列表
export const city_api = ()=>http("get","/api/cityList")
//详情页面
export const detail_api = (movieId)=>http("get","/api/detailmovie",{movieId:movieId})
//搜索接口
export const search_api = (cityId,kw)=>http("get","/api/searchList",{cityId:cityId,kw:kw})