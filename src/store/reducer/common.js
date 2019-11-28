import {LOGIN,LOGOUT} from '../action/common'

// State：初始化数据
let initialState = {
    user:{}
}

const reducer = function(state=initialState,{type}){
    
    switch(type){
        // 登录
        case LOGIN:
            return {
                ...state,
            }

        // 退出
        case LOGOUT:
            return {
                ...state,
            }
        default:
            return state;
    }

}

export default reducer
