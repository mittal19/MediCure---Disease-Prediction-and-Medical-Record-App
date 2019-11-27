/*import React,{Component} from 'react';
import {  SafeAreaView,  StyleSheet, ScrollView,  View, TextInput, TouchableOpacity,Text, Image, StatusBar,} from 'react-native';
import {  LearnMoreLinks,Colors,  DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import { createAppContainer } from 'react-navigation';  
import { createStackNavigator} from 'react-navigation-stack';  
import * as firebase from 'firebase';

export default class UserRecord extends Component{
  
  static navigationOptions = {
    title: 'MediRec',
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#120e40',
    },
    //headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color:'white'
    },
    //header:null
  };

  clickHandler = () => {
    this.props.navigation.pop();
  };

  render() {
    const firebase=this.props.navigation.getParam('firebase');
   return(
      <View style={styles.MainContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.clickHandler}
          style={styles.TouchableOpacityStyle}>
          <Image
            source={{uri:'https://cdn.iconscout.com/icon/premium/png-256-thumb/patient-67-733426.png'}}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
 
  TouchableOpacityStyle: {
    position: 'absolute',
    marginTop:40,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    backgroundColor:'#23204f',
    bottom: 20,
    borderRadius:20,

  },
 
  FloatingButtonStyle: {
    marginTop:8,
    resizeMode: 'contain',
    width: 55,
    height: 55,
    //backgroundColor:'black'
  },
});

*/