export default {
    path:"/mine",
    component:()=>import("views/mine"),
    name:"mine",
    meta:{
        tabBar:false,
        auth:true
    }
}