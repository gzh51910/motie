/**
 * 定义用于创建action的方法
 */
export const ADD_TO_CART = '';


function add(goods){
    return {
        type:ADD_TO_CART,
        payload:goods
    }
}

 

//  default导出，方便使用bindActionCreators
export default {
    add,
}