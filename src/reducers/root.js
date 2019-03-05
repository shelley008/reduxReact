import {combineReducers} from "redux";
import {userInfo} from './userInfo';
import {globalInfo} from "./global";




const allReducer = {
    global: globalInfo,
    user: userInfo
}


const rootReducer = combineReducers(allReducer)
export default rootReducer