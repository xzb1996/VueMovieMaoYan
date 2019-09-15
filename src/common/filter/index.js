import Vue from "vue"

Vue.filter("ToImg",(path,info)=>{
  return path ? path.replace(/w\.h/,info) : "";
})
