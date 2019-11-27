import React, { Component } from 'react';
import { StyleSheet, Dimensions,View, StatusBar,TextInput,TouchableOpacity,Text, Image, Animated, Keyboard, KeyboardAvoidingView } from 'react-native';
import doct from './assets/doct.png';
import * as firebase from 'firebase';
import Toast from 'react-native-simple-toast';

const window = Dimensions.get('window');
const IMAGE_HEIGHT = window.width / 3;
const IMAGE_HEIGHT_SMALL = window.width /7;

class DocSignin extends Component {
  
  static navigationOptions = {
    title: 'MediCure',
    headerStyle: {
      backgroundColor: '#0E0B33',
    },
    //headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color:'white'
    },
   // header:null
  };

  constructor(props) {
    super(props)
    this.state=({
      name:'',
      docid:'',
      email:'',
      password:'',
      repassword:''
    })
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }

 signupUser=(name,docid,email,password,repassword)=>{
  try{
    if(this.state.name.length<1)
    {
      Toast.show('Enter Name');
      return;
    }
    else if(this.state.docid.length<6)
    {
      Toast.show('Invalid Driving License Number');
      return;
    }
    else if(this.state.email.length<1)
    {
      Toast.show('Enter Email');
      return;
    }
    else if(this.state.password.length<1)
    {
      Toast.show('Enter Password');
      return;
    }
    else if(this.state.password.length<6)
    {
      Toast.show('Password must be atleast 6 digits long');
      return;
    }
    else if(this.state.password!=this.state.repassword)
    {
      Toast.show('Password doesn\'t match!');
      return;
    }
    
    firebase.auth().createUserWithEmailAndPassword(email,password);
    

   /* var database=firebase.database();
    var ref=database.ref('scores1');
    var data={
      name:'sd',
      score:3
    }
    ref.push(data);
*/
 //var thisemail:this.state.email; 
    var temp1=this.state.docid;
    //console.log(temp1);
    var temp2='doctors';
    var temp3=temp2.concat("/" , temp1);
    
    firebase.database().ref(temp3).set(
    {
        name:this.state.name,
        docid:this.state.docid,
        email:this.state.email,
    }
    ).then(()=> {
      Toast.show('Account created');
    this.props.navigation.pop();
    }).catch((error)=>{
      console.log(error);
    });
  }
  catch(error)
  {
    alert("Could not connect to server at this moment!Please try again later.");
    console.log(error.toString());
  }
}

  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener(this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    console.log('d');
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
    }).start();
  };

  render() {
    const firebase=this.props.navigation.getParam('firebase');

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding">
                              <StatusBar barStyle="light-content" backgroundColor="#0E0B33" />

        <Animated.Image source={doct} style={[styles.logo, { height: this.imageHeight }]} />
        <Text style={{fontSize:20,marginBottom:10}}></Text>
          <TextInput
            placeholder="Enter Name"
            style={styles.input}
            placeholderTextColor= 'rgba(192,192,192,50)'  
            underlineColorAndroid = 'rgba(192,192,192,50)'
            onChangeText={(name)=>this.setState({name})}
          />
          <TextInput
            placeholder="Enter your Doctor\'s ID"
            style={styles.input}
            placeholderTextColor= 'rgba(192,192,192,50)'  
            underlineColorAndroid = 'rgba(192,192,192,50)'
            onChangeText={(docid)=>this.setState({docid})}
          />
          <TextInput
            placeholder="Enter Email"
            style={styles.input}
            placeholderTextColor= 'rgba(192,192,192,50)'  
            underlineColorAndroid = 'rgba(192,192,192,50)'
            onChangeText={(email)=>this.setState({email})}
          />
          <TextInput
            placeholder="Enter password"
            secureTextEntry={true}
            style={styles.input}
            placeholderTextColor= 'rgba(192,192,192,50)'  
            underlineColorAndroid = 'rgba(192,192,192,50)'
            onChangeText={(password)=>this.setState({password})}
          />
          <TextInput
            placeholder="Re-Enter password"
            secureTextEntry={true}
            style={styles.input}
            placeholderTextColor= 'rgba(192,192,192,50)'  
            underlineColorAndroid = 'rgba(192,192,192,50)'
            onChangeText={(repassword)=>this.setState({repassword})}
          />
         <TouchableOpacity style={styles.button} onPress={() => this.signupUser(this.state.name,this.state.docid,this.state.email,this.state.password,this.state.repassword) }>
            <Text style={styles.buttontext}>SignUP</Text>
          </TouchableOpacity>
           
      </KeyboardAvoidingView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#191640',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
      width: 300,
      //marginTop: 35,
      padding:19,
      height: 60,
      //backgroundColor: 'rgba(255,255,255,0.3)',
      color: 'white',
      //borderBottomWidth: 1,
       // borderBottomColor: 'gray',
  },
  logo: {
    padding:45,
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 55,
    /*padding:5,
    marginTop:10*/
  },
  button:{
    marginTop:15,
    width:300,
    marginBottom:2,
    backgroundColor:'#0E0B33',
    borderRadius :10,
    height: 42,
    justifyContent: 'center',
  },
  buttontext:{
    fontSize:18,
    fontWeight: '500',
    color:'#ffffff',
    textAlign:'center',
  },
  signuptext:{
    
      fontSize:18,
      color:'rgba(192,192,192,50)'
    },
  clicktext:{
    fontSize:20,
    color:'rgba(192,192,192,50)'
  },
});

export default DocSignin;