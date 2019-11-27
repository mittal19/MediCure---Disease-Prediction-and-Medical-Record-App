/*import React,{Component} from 'react';
import { SafeAreaView, FlatList,StyleSheet, ScrollView, View,Text,StatusBar, TouchableOpacity, TextInput} from 'react-native';
import Toast from 'react-native-simple-toast';
import * as firebase from 'firebase';
import ListView from 'deprecated-react-native-listview';

//const diseases=''
var d='';
var productArray = [];
export default class DocMain2 extends Component{
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
    var dataSource = new ListView.DataSource({rowHasChanged: (r1,r2)=> r1.guid!=r2.guid});
    this.state={
      datasource: dataSource.cloneWithRows(productArray),
      isLoading:true
    };
  }
  componentDidMount(){
    this.getTheData(){
    productArray = d;
    console.log(productArray);
    this.setState = ({
      datasource:this.state.dataSource.cloneWithRows(productArray),
      isLoading:false
    })
  }.bind(this)
    

/*  renderRow(d)
  {
    return (
      <View>
        <Text>{d}</Text>
      </View>
      );
  }
*/

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight underlayColor='#dddddd' style={{height:44}}>
        <View>
        <Text style={{fontSize: 20, color: '#000000'}} numberOfLines={1}>{rowData.display_string}</Text>
        <View style={{height: 1, backgroundColor: '#dddddd'}}/>
        </View>
      </TouchableHighlight>
    );
  }

  render() {

    console.log('inside docmain2');
    const details=this.props.navigation.getParam('ans','some default value');
    console.log(details);
    var disease=Object.values(details);
    console.log(disease);
    d=disease[2];
    console.log(d);
    var currentView = (this.state.isLoading)?<View/>:<ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} enableEmptySections={true}/>
 
    return(
      <View style={styles.container}>
          <Text>FD</Text>
          {currentView}
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
*/