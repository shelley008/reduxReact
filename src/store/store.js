import {createStore} from 'redux';
import rootReducers from '../reducers/root'

function configStore(){
    const store = createStore(rootReducers)
    return store
}

const store = configStore();
export default store