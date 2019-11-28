import {ADD_TO_CART} from '../action/cart'

// State：初始化数据
let initialState = {
    goodslist:[]
}

const reducer = function(state=initialState,{type}){

    switch(type){
        // 添加到购物车
        case ADD_TO_CART:
            state = {
                ...state,
                goodslist:[...state.goodslist]
            }
            return state
        default:
            return state;
    }
}

export default reducer
