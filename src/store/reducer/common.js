import {LOGIN,LOGOUT} from '../action/common'

// State：初始化数据
let initialState = {
    type:"男"
}

const reducer = function(state=initialState,{type}){
    
    switch(type){
        // 登录
        case "男":
            return {
                type:"男",
            }

        // 退出
        case "女":
            return {
                type:"女"
            }
        default:
            return state;
    }

}

export default reducer
