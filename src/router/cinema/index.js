export default {
    path:"/cinema",
    component:()=>import("views/cinema"),
    name:"cinema",
    meta:{
        tabBar:true,
        auth:false
    }
}