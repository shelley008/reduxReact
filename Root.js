import React from 'react'

import {Provider} from 'react-redux'
import store from './src/reducers/store'
import App from './App'

export default class Root extends  React.Component {
    render(){
        return(
            <Provider store={store}>
                  <App />
            </Provider>
        )
    }
}