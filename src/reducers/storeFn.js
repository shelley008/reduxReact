
import {createStore,combineReducers} from 'redux'
import * as types from '../action/actionTypes'

//设置初始数据
const initGlobal = {
    cart:[
        {
            name:'shelley',
            age:10
        },
        {
            name:'huahua',
            age:20
        }
    ],
    name:'guihua'
}

const initShop = {
    pro:[1,2,3],
    info:{
        tel:13455434567,
        adress:'BJ'
    }
}


//创建 reducer
const shopReducer = function( state = initShop,action){
    return state;
}
const globalReducer = function(state=initGlobal,action){
    switch(action.type){
        case types.ADD_TO_CART:
            return {
                ...state,
                cart:[...state.cart,action.payload]
            }
        default:
            return state
    }
}
const allReducers = {
    global:globalReducer,
    shop:shopReducer
}
const rootReducer = combineReducers(allReducers)
const store = createStore(rootReducer)


console.log('state change----')
console.log(store.getState())

//通过store注册listener
const storeListener = store.subscribe(function(){
    console.log('state change-111---')
    console.log(store.getState())
})
storeListener()

//定义action
function addToCart(name,age){
    return{
        type:types.ADD_TO_CART,
        payload:{name,age}
    }
}

//改变store中的数据
store.dispatch(addToCart('明122',666))
store.dispatch(addToCart('n----2',888))

export default store