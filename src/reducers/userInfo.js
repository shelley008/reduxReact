import * as types from '../action/actionTypes'

//设置初始数据
const users = {
    copyRight:'admin',
    base:{
        tel:13455434567,
        name:'shelley',
        adress:'Bj'
    }
}


export function userInfo (state=users,action){
    return state;
}
