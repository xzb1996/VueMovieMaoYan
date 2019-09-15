export default {
    path:"/detail/:id/:name",
    component:()=>import("views/detail"),
    name:"detail",
    meta:{
        tabBar:false,
        auth:false
    },
    props:true
}