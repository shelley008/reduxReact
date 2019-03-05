import * as types from '../action/actionTypes'

//设置初始数据
const initGlobal = {
    domain:'中心区--shelley-',
    conf:{
        id:110,
        confName:'全国大会',
        roomNum:123456789,
        startTime:'3月12日中午'
    },
    user:[
        {name:'shelley',tel:123456789},
        {name:'zhg',tel:1111111111},
    ]
}


export function globalInfo (state=initGlobal,action){
    switch(action.type){
        case types.ADD_TO_CART:
            return {
                ...state,
                user:[
                    ...state.user,action.data
                ]
            }
        default:
            return state
    }
}
