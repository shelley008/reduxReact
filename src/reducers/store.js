import {applyMiddleware, createStore} from 'redux'
import rootReducer from './root'



function configStore(){
    const store = createStore(rootReducer)
    return store
}


const store = configStore()
export default store








console.log('state change----')
console.log(store.getState())

//通过store注册listener
const storeListener = store.subscribe(function(){
    console.log('state change-111---')
    console.log(store.getState())
})
storeListener()