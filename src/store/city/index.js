import {city_api} from "api/index"
const state = {
    cityHot:JSON.parse(sessionStorage.getItem("cityHot"))||[],
    cityList:JSON.parse(sessionStorage.getItem("cityList"))||[],
    cityName: sessionStorage.getItem("cityName")||"北京",
    cityId:sessionStorage.getItem("cityId")||10
}
const actions = {
    async handleGetCityAction({commit}){
        let data = await city_api();    
        commit("handleGetCityMutation",data.data.cities)
    }
}
const mutations = {
    handleToggleCity(state,params){
        state.cityName = params.cityName;
        state.cityId = params.cityId;
        sessionStorage.setItem("cityName",params.cityName);
        sessionStorage.setItem("cityId",params.cityId)
    },
    handleGetCityMutation(state,params){
       let cityList = [],cityHot=[]

        /*
            热门城市
            [{
                cityId:"",
                cityName:""
            }]
        */
        //热门城市
        for(var i=0;i<params.length;i++){
            if(params[i].isHot){
                cityHot.push({cityId:params[i].id,cityName:params[i].nm})
            }
        }

        /*
            城市列表
            [{index:A,list:[{cityId:"",cityName:""},{cityId:"",cityName:""},{cityId:"",cityName:""}]}]

            []
        */
        
        for(var i=0;i<params.length;i++){
            var letterFirst = params[i].py.substr(0,1).toUpperCase();
            if(isCityList(letterFirst)){
                for(var k=0;k<cityList.length;k++){
                    if(letterFirst == cityList[k].index){
                        cityList[k].list.push({cityId:params[i].id,cityName:params[i].nm});
                        break;
                    }
                }
            }else{
                cityList.push({index:letterFirst,list:[{cityId:params[i].id,cityName:params[i].nm}]})
            }
        }


        //判断当前标识是否在cityList当中
        function isCityList(letterFirst){
            var bStop = false;
            for(var i=0;i<cityList.length;i++){
                if(cityList[i].index == letterFirst){
                    bStop = true;
                    break;
                }
            }

            return bStop;//存在为true 不存在未false
        }

       //排序
       cityList.sort((item1,item2)=>{
            if(item1.index>item2.index){
                return 1;
            }else{
                return -1;
            }
       })


      state.cityList = cityList;
      state.cityHot = cityHot;
      sessionStorage.setItem("cityList",JSON.stringify(cityList))
      sessionStorage.setItem("cityHot",JSON.stringify(cityHot))

    }
}


export default {
    state,
    mutations,
    actions,
    namespaced:true
}