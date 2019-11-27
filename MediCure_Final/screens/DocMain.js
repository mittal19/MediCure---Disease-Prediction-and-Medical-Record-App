import React,{Component} from 'react';
import { SafeAreaView, FlatList,StyleSheet, ScrollView, View,Text,StatusBar, TouchableOpacity, TextInput} from 'react-native';
import Toast from 'react-native-simple-toast';
import * as firebase from 'firebase';

export default class DocMain extends Component{
  static navigationOptions = {
    title: 'MediCure',
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
  constructor(){
    super();
    global.result = new Array();
    global.ans='';
    global.found=false;
    global.clicked=0;
    this.state={
      search: '', 
      upddise:''
    };
  }

  searchuser=(search)=>
  {
    clicked=0;
   // console.log(this.state.dataSource);
   //console.log(this.state.search);
   const tosearch =search;
  // console.log(tosearch);
    var database=firebase.database();
    var ref=database.ref('patient'); 
    ref.on('value',this.gotData,this.errData);
   // console.log(result);
   // var temp1=result[0].name;
    //console.log(temp1);
    //var tempdl:'9876543212345';
  //  console.log(result.findIndex(obj => obj.dlno == tempdl));
    /*let arr=[];
    arr.push(result);
    console.log(arr.map(function(e)
      {
        return e.dlno;
      }).indexOf('9876543212345'));
    */ // console.log("in");
      //console.log(JSON.stringify(dlno));

    ans=result.find(result=>result.dlno==tosearch);
    if(ans==undefined)
    {
      console.log('usernotfound');
      Toast.show('Patient is not registered');
    }
    else
    {  
      Toast.show('Patient found');
      console.log('userfound');
      found=true;
    }
  }

  viewpatient=(search)=>{

    if(found==true)
    {
      
    if(ans==undefined)
    {
      console.log('usernotfound');
      Toast.show('Patient is not registered');
    }
    else
    {  
      Toast.show('Loading');
      console.log('userfound');
      console.log(ans);
      var disease=Object.values(ans);
      console.log(disease[2]);
      var copy=disease[2];
      console.log(copy);
      /*if(clicked==0)
      {
        copy.shift();
        clicked=1;
      }*/
      //this.props.navigation.push('DocMain2',{ans});
      alert(disease[2]);
      }
    }
    else
    {
      Toast.show('Search for Patient first');
    }
  }

  updatedisease=(upddise)=>
  {
    if(found==true)
    {
      console.log('updating');
      if(ans==undefined)
      {
        console.log('usernotfound');
        Toast.show('Patient is not registered');
      }
      else if(upddise=='')
      {
        Toast.show('Enter disease to update');
      }
      else
      {
        //console.log(ans);
        var diseases =Object.values(ans);
        //console.log(diseases);
        var n=diseases[0];
        var eml=diseases[1];
        console.log(diseases[2]);
        var dno=diseases[3];
        //console.log(n+" "+eml+" "+diseases[2]+" "+dno);
        diseases[2].push(upddise);
        //console.log(n+" "+eml+" "+diseases[2]+" "+dno);
        var temp2='patient';
        var temp3=temp2.concat("/" , dno);
        try{
          firebase.database().ref(temp3).remove();

          firebase.database().ref(temp3).set(
          {
            name:n,
            dlno:dno,
            email:eml,
            disease:diseases[2]
          }
          ).then(()=> {
              console.log('update done');
              Toast.show('Record Updated');
              
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
    }
    else
    {
      Toast.show('Search for Patient first');
    }
  }

  /*componentWillMount(){
   var database=firebase.database();
    var ref=database.ref('patient'); 
    ref.on('value',this.gotData,this.errData);
  }*/
  gotData(data)
  {
    try{//console.log(state.search);
   //console.log(data);
   var patientlist=data.val();
   var keys=Object.keys(patientlist);
   //console.log(keys);
  
  for(var i=0;i<keys.length;i++)
   {
    var k=keys[i];
    var dlno=patientlist[k].dlno;
    //console.log(this.state.search);
    //var dlnostring=JSON.stringify(dlno);
    /*if(dlnostring==this.state.search)
    {
      alert('found');
      break;
    }*/
    var name=patientlist[k].name;
    var email=patientlist[k].email;
    
    var disease=patientlist[k].disease;
    const obj = {'name':name, 'email':email,'disease':disease,'dlno':dlno};
    result.push(obj);
    //res[i]=dlno+' '+email+' '+name+' '+disease;
    //console.log(result);
    //console.log(obj);
   }
 }
   catch{console.log('errror');
    }
  }
  errData(err){
    console.log('error');
    console.log(err);
  }


  render() {
    const firebase=this.props.navigation.getParam('firebase');
    //const userpass=this.props.navigation.getParam('password','some default value');
    //const { search } = this.state;
    /*var rootRef = firebase.database().ref('MediRec/doctors');
    var usersRef = rootRef.child("users");
    console.log(usersRef.isEqual(rootRef.child("users")));  // true
    */return (
      <View style={styles.container}>
                     <StatusBar barStyle="light-content" backgroundColor="#0E0B33" />

          <TextInput  
            style={styles.inputbox}  
            placeholder="Enter patient's Driving License Number"  
            placeholderTextColor= 'rgba(192,192,192,50)'  
            underlineColorAndroid = 'rgba(192,192,192,50)'
            onChangeText={(search)=>this.setState({search})}
          />
          <TouchableOpacity style={styles.button} onPress={()=> this.searchuser(this.state.search)}>
            <Text style={styles.buttontext}>Search Patient</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=> this.viewpatient(this.state.search)}>
            <Text style={styles.buttontext}>View patient's Medical History</Text>
          </TouchableOpacity>
          <TextInput  
            style={styles.inputbox}  
            placeholder="Enter disease to update Patient Record"  
            placeholderTextColor= 'rgba(192,192,192,50)'  
            underlineColorAndroid = 'rgba(192,192,192,50)'
            onChangeText={(upddise)=>this.setState({upddise})}
          />
          <TouchableOpacity style={styles.button} onPress={()=> this.updatedisease(this.state.upddise)}>
            <Text style={styles.buttontext}>Update patient record</Text>
          </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#23204f',
    flex: 1,
    justifyContent :'center',
    alignItems: 'center',
  },
  inputbox:{
      width: 300,
      //marginTop: 35,
      padding:19,
      height: 60,
      fontSize:15,
      //backgroundColor: 'rgba(255,255,255,0.3)',
      color: 'white',
      //borderBottomWidth: 1,
       // borderBottomColor: 'gray',
  },
  button:{
    marginTop:15,
    width:200,
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
});
