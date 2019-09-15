export default {
    path:"/cityList",
    component:()=>import("views/cityList"),
    name:"cityList",
    meta:{
        tabBar:false,
        auth:false
    }
}