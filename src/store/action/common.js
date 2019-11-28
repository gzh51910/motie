
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

function login(){
    return {
        type:LOGIN,
    }
}

function logout(){
    return {
        type:LOGOUT
    }
}


//  default导出，方便使用bindActionCreators
 export default {
    login,
    logout
 }