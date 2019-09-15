export default {
    path:"/search",
    component:()=>import("views/search"),
    name:"search",
    meta:{
        tabBar:true,
        auth:false
    },
}