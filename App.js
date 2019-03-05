import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,ScrollView} from 'react-native';
import {connect} from "react-redux";
import * as types from './src/action/actionTypes'

import axios from 'axios'

import {globalProfile} from './src/action/setGlobal'

class AppFn extends Component {
  constructor(props){
    super(props);
    this.title = "is home huahua is ok";
    this.domain = this.props.conf.domain;
    this.state = {
        user:this.props.conf.user
    }
  }

  componentDidMount(){
  }

  getElement(){
     let ele = [];
     let vm = this;
     if(this.props && this.props.conf.user.length > 0){
         this.props.conf.user.forEach( (item,index) => {
             let dom = (
                 <View key={index}>
                     <Text>name:{item.name}</Text>
                     <Text>tel:{item.tel}</Text>
                 </View>
             )
             ele.push(dom)
         })
         return ele
     }
  }

  //改变store中的值
  setGlobal = ()=>{
      console.log('改变store中的值-------1----------')
      let datas = {name:'huaisgood',tel:66660000003}
      this.props.setInfo(datas)
  }

  //获取数据
    getDataF(){
      console.log('---get data----')
        let params = {
            account:'admin',
            password:'admin',
            deviceSN:'',
            deviceType:'Windows',
            domain:'local',
            tempToken:''
        }
        axios.put('http://172.24.0.138/api/rest/v2.0/login',params).then(res => {
            console.log(res)
            console.log ('ok---！')
        }).catch(err => {
            console.log ('用户名或密码错误！-----')
        })
    }

  render() {
    //const {domain} = this.props
    console.log(this.props.conf.user)

    return (
        <ScrollView>
          <View style={styles.container}>

          <TouchableOpacity style={{padding:10}} onPress={this.getDataF}>
              <Text style={{color:'#fff',fontSize:30,backgroundColor:'blue',padding:10,borderRadius:3}}>1get data</Text>
           </TouchableOpacity>

             <TouchableOpacity style={{padding:10}} onPress={this.setGlobal}>
                  <Text style={{color:'#fff',fontSize:30,backgroundColor:'blue',padding:10,borderRadius:3}}>button</Text>
             </TouchableOpacity>

            <Text style={styles.welcome}>test1-----0000-1</Text>
             <Text style={styles.welcome}>{this.title}</Text>
             <Text>name:{this.domain}</Text>
             {this.getElement()}
          </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state){
    return{
        conf:state.global
    }
}

function mapDispatchToProps(dispatch,ownProps){
    return {
        setInfo:(datas) => {
            dispatch(globalProfile(datas))
           //dispatch(globalProfile(datas))
           //dispatch({ type: types.ADD_TO_CART, data: datas })
        }
    }
}


const App = connect(mapStateToProps,mapDispatchToProps)(AppFn);
export default App;




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
