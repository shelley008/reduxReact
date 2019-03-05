//定义action
import * as types from "./actionTypes";
import axios from 'axios'
let GlobalBaseURL = 'http://172.24.0.138/api/rest/v2.0'

doLoginRest = params => {
    return axios.put(GlobalBaseURL+'/login',params)
}


export function globalProfile(data){
    let params = {
        account:'admin',
        password:'admin',
        deviceSN:'',
        deviceType:'Windows',
        domain:'local',
        tempToken:''
    }
    let profile;
    doLoginRest(params).then(res => {
        console.log('---get data---------------')
        profile = res.data
        console.log(profile)

    }).catch(err => {
        console.log ('用户名或密码错误！')
    })

    return {
            'type':types.ADD_TO_CART,
            'data':data
    }
}