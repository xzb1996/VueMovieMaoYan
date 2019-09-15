import Vue from "vue";
import VueRouter from "vue-router"

import movie from "./movie"
import cinema from "./cinema"
import mine from "./mine"
import cityList from "./cityList"
import search from "./search"
import detail from "./detail"

Vue.use(VueRouter)


export default new VueRouter({
    routes:[
        {
            path:"/",
            redirect:"/movie"
        },
        movie,
        cinema,
        mine,
        cityList,
        search,
        detail
    ]
})