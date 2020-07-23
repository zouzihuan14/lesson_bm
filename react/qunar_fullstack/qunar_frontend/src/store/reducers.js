import {
    ACTION_SET_CITY_SELECTOR_VISIBLE
} from './actions'
export default{
    // 页面状态 改变对应数据的改变  分支上
    isCitySelectorVisible(state=false,action)
    {
        const { type , payload } = action
        switch(type){
            case ACTION_SET_CITY_SELECTOR_VISIBLE:
                return payload
            default:
    }
        return state
    },
    cityDate(state = null,action)
    {
        const { type , payload } = action
        switch(type){
            case SET_CITY_DATA:
                return payload
            default:
    }
    return state
    },
    // 完成这个reducer和相应的action并且在fetchCityData中处理和他相关的逻辑
    // isLoadingCityData
}