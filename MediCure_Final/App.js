import React,{Component} from 'react';
import {  SafeAreaView,  StyleSheet, ScrollView,  View,  Text,  StatusBar,} from 'react-native';
import {  LearnMoreLinks,Colors,  DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import { createAppContainer } from 'react-navigation';  
import { createStackNavigator} from 'react-navigation-stack';  
import UserLogin from './screens/UserLogin';
import DocSignin from './screens/DocSignin';
import UserSignin from './screens/UserSignin';
import DocLogin from './screens/DocLogin';
import DocMain from './screens/DocMain';
import UserMain from './screens/UserMain';

const AppNavigator = createStackNavigator(  
    {  
        UserLogin: UserLogin,  
        DocSignin: DocSignin,
        DocMain: DocMain,
        DocLogin: DocLogin,
        UserSignin:UserSignin,
        UserMain:UserMain,
    },  
    {  
        initialRouteName: "UserLogin"  
    }  
);  

const AppContainer = createAppContainer(AppNavigator);  
export default class App extends Component{
  render() {
   return(
    <AppContainer />
    );
  }
}
