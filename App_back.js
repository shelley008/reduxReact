import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'

import * as types from './src/action/actionTypes'

//设置初始数据
const initialState = {
    cart:[
          {
              name:'shelley',
              age:10
          },
          {
              name:'huahua',
              age:20
          }
    ]
}


//创建 reducer
const productsReducer = function(state=[],action){
   return state;
}
const carReducer = function(state=initialState,action){
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
  products:productsReducer,
  shopping:carReducer
}
const rootReducer = combineReducers(allReducers)
let store = createStore(rootReducer)


console.log('state change----')
console.log(store.getState())

//通过store注册listener
const storeListener = store.subscribe(function(){
  console.log('state change----')
  console.log(store.getState())
})


//定义action
function addToCart(name,age){
  return{
    type:types.ADD_TO_CART,
    payload:{name,age}
  }
}

//改变store中的数据
store.dispatch(addToCart('明122',666))
store.dispatch(addToCart('n',888))



export default class App extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){

  }

  componentDidMount(){

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome 000---111-1</Text>
         <Text style={styles.welcome}>Welcome 000--2222-1</Text>
      <Text style={styles.welcome}>Welcome 000--21222-1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
