import {ADD_TO_CART} from '../action/cart'

// State：初始化数据
let initialState = {
    username:""
}

const reducer = function(state=initialState,{type,username}){

    switch(type){
        // 添加到购物车
        case "setusername":
            state = {
                username
            }
            return state
        default:
            return state;
    }
}

export default reducer
