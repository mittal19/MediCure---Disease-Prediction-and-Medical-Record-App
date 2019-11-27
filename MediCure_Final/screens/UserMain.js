import React,{Component} from 'react';
import {  Picker,SafeAreaView,  StyleSheet, ScrollView,  View, TextInput, TouchableOpacity,Text, Image, StatusBar,} from 'react-native';
import {  LearnMoreLinks,Colors,  DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import { createAppContainer } from 'react-navigation';  
import { createStackNavigator} from 'react-navigation-stack';  
import * as firebase from 'firebase';
import RNPicker from "rn-modal-picker";
import Toast from 'react-native-simple-toast';

var email='';

export default class UserMain extends Component {
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

  constructor(props) {
    super(props);
      global.result = new Array();
      global.clicked=0;
    this.state = {
      dataSource: [
        {
          id: 1,
          name: 'back_pain'
        },
        {
          id: 2,
          name: 'constipation'
        },
        {
          id: 3,
          name: 'abdominal_pain'
        },
        {
          id: 4,
          name: 'diarrhoea'
        },
        {
          id: 5,
          name: 'mild_fever'
        },
        {
          id: 6,
          name: 'yellow_urine'
        },
        {
          id: 7,
          name: 'yellowing_of_eyes'
        },
        {
          id: 8,
          name: 'acute_liver_failure'
        },
        {
          id: 9,
          name: 'fluid_overload'
        },
        {
          id: 10,
          name: 'swelling_of_stomach'
        },
        {
          id: 11,
          name: 'swelled_lymph_nodes'
        },
        {
          id: 12,
          name: 'malaise'
        },
        {
          id: 13,
          name: 'blurred_and_distorted_vision'
        },
        {
          id: 14,
          name: 'phlegm'
        },
        {
          id: 15,
          name: 'throat_irritation'
        },
        {
          id: 16,
          name: 'redness_of_eyes'
        },
        {
          id: 17,
          name: 'sinus_pressure'
        },
        {
          id: 18,
          name: 'runny_nose'
        },
        {
          id: 19,
          name: 'congestion'
        },
        {
          id: 20,
          name: 'chest_pain'
        },
        {
          id: 21,
          name: 'weakness_in_limbs'
        },
        {
          id: 22,
          name: 'fast_heart_rate'
        },
        {
          id: 23,
          name: 'pain_during_bowel_movements'
        },
        {
          id: 24,
          name: 'pain_in_anal_region'
        },
        {
          id: 25,
          name: 'bloody_stool'
        },
        {
          id: 26,
          name: 'irritation_in_anus'
        },
        {
          id: 27,
          name: 'neck_pain'
        },
        {
          id: 28,
          name: 'dizziness'
        },
        {
          id: 29,
          name: 'cramps'
        },
        {
          id: 30,
          name: 'bruising'
        },
        {
          id: 31,
          name: 'obesity'
        },
        {
          id: 32,
          name: 'swollen_legs'
        },
        {
          id: 33,
          name: 'swollen_blood_vessels'
        },
        {
          id: 34,
          name: 'puffy_face_and_eyes'
        },
        {
          id: 35,
          name: 'enlarged_thyroid'
        },
        {
          id: 36,
          name: 'brittle_nails'
        },
        {
          id: 37,
          name: 'swollen_extremeties'
        },
        {
          id: 38,
          name: 'excessive_hunger'
        },
        {
          id: 39,
          name: 'extra_marital_contacts'
        },
        {
          id: 40,
          name: 'drying_and_tingling_lips'
        },
        {
          id: 41,
          name: 'slurred_speech'
        },
        {
          id: 42,
          name: 'knee_pain'
        },
        {
          id: 43,
          name: 'hip_joint_pain'
        },
        {
          id: 44,
          name: 'muscle_weakness'
        },
        {
          id: 45,
          name: 'stiff_neck'
        },
        {
          id: 46,
          name: 'swelling_joints'
        },
        {
          id: 47,
          name: 'movement_stiffness'
        },
        {
          id: 48,
          name: 'spinning_movements'
        },
        {
          id: 49,
          name: 'loss_of_balance'
        },
        {
          id: 50,
          name: 'unsteadiness'
        },
        {
          id: 51,
          name: 'weakness_of_one_body_side'
        },
        {
          id: 52,
          name: 'loss_of_smell'
        },
        {
          id: 53,
          name: 'bladder_discomfort'
        },
        {
          id: 54,
          name: 'foul_smell_of urine'},
        {
          id: 55,
          name: 'continuous_feel_of_urine'
        },
        {
          id: 56,
          name: 'passage_of_gases'
        },
        {
          id: 57,
          name: 'internal_itching'
        },
        {
          id: 58,
          name: 'toxic_look_(typhos)'
        },
        {
          id: 59,
          name: 'depression'
        },
        {
          id: 60,
          name: 'irritability'
        },
        {
          id: 61,
          name: 'muscle_pain'
        },
        {
          id: 62,
          name: 'altered_sensorium'
        },
        {
          id: 63,
           name: 'red_spots_over_body'
         },
        {
          id: 64,
          name: 'belly_pain'
        },
        {
          id: 65,
          name: 'abnormal_menstruation'
        },
        {
          id: 66,
          name: 'dischromic _patches'
        },
        {
          id: 67,
          name: 'watering_from_eyes'
        },
        {
          id: 68,
          name: 'increased_appetite'
        },
        {
          id: 69,
          name: 'polyuria'
        },
        {
          id: 70,
          name: 'family_history'
        },
        {
          id: 71,
          name: 'mucoid_sputum'
        },
        {
          id: 72,
          name: 'rusty_sputum'
        },
        {
          id: 73,
          name: 'lack_of_concentration'
        },
        {
          id: 74,
          name: 'visual_disturbances'
        },
        {
          id: 75,
          name: 'receiving_blood_transfusion'
        },
        {
          id: 76,
          name: 'receiving_unsterile_injections'
        },
        {
          id: 78,
          name: 'coma'
        },
        {
          id: 79,
          name: 'stomach_bleeding'
        },
        {
          id: 80,
          name: 'distention_of_abdomen'
        },
        {
          id: 81,
          name: 'history_of_alcohol_consumption'
        },
        {
          id: 82,
          name: 'fluid_overload'
        },
        {
          id: 83,
          name: 'blood_in_sputum'
        },
        {
          id: 84,
          name: 'prominent_veins_on_calf'
        },
        {
          id: 85,
          name: 'palpitations'
        },
        {
          id: 86,
          name: 'painful_walking'
        },
        {
          id: 87,
          name: 'pus_filled_pimples'
        },
        {
          id: 88,
          name: 'blackheads'
        },
        {
          id: 89,
          name: 'scurring'
        },
        {
          id: 90,
          name: 'skin_peeling'
        },
        {
          id: 91,
          name: 'silver_like_dusting'
        },
        {
          id: 92,
          name: 'small_dents_in_nails'
        },
        {
          id: 93,
          name: 'inflammatory_nails'
        },
        {
          id: 94,
          name: 'blister'
        },
        {
          id: 95,
          name: 'red_sore_around_nose'
        },
        {
          id: 96,
          name:  'yellow_crust_ooze'
        }
      ],
      placeHolderText: " Select Symptoms",
      symp1:'-1',
      symp2:'-1',
      symp3:'-1',
      symp4:'-1',
      symp5:'-1',
      d1: '                             ',
      d2: '                             ',
      d3: '                             '
    };

    global.symptoms2=['back_pain','constipation','abdominal_pain','diarrhoea','mild_fever','yellow_urine',
'yellowing_of_eyes','acute_liver_failure','fluid_overload','swelling_of_stomach',
'swelled_lymph_nodes','malaise','blurred_and_distorted_vision','phlegm','throat_irritation',
'redness_of_eyes','sinus_pressure','runny_nose','congestion','chest_pain','weakness_in_limbs',
'fast_heart_rate','pain_during_bowel_movements','pain_in_anal_region','bloody_stool',
'irritation_in_anus','neck_pain','dizziness','cramps','bruising','obesity','swollen_legs',
'swollen_blood_vessels','puffy_face_and_eyes','enlarged_thyroid','brittle_nails',
'swollen_extremeties','excessive_hunger','extra_marital_contacts','drying_and_tingling_lips',
'slurred_speech','knee_pain','hip_joint_pain','muscle_weakness','stiff_neck','swelling_joints',
'movement_stiffness','spinning_movements','loss_of_balance','unsteadiness',
'weakness_of_one_body_side','loss_of_smell','bladder_discomfort','foul_smell_of urine',
'continuous_feel_of_urine','passage_of_gases','internal_itching','toxic_look_(typhos)',
'depression','irritability','muscle_pain','altered_sensorium','red_spots_over_body','belly_pain',
'abnormal_menstruation','dischromic _patches','watering_from_eyes','increased_appetite','polyuria','family_history','mucoid_sputum',
'rusty_sputum','lack_of_concentration','visual_disturbances','receiving_blood_transfusion',
'receiving_unsterile_injections','coma','stomach_bleeding','distention_of_abdomen',
'history_of_alcohol_consumption','fluid_overload','blood_in_sputum','prominent_veins_on_calf',
'palpitations','painful_walking','pus_filled_pimples','blackheads','scurring','skin_peeling',
'silver_like_dusting','small_dents_in_nails','inflammatory_nails','blister','red_sore_around_nose',
'yellow_crust_ooze'];

 global.disease=['Fungal infection','Allergy','GERD','Chronic cholestasis','Drug Reaction',
'Peptic ulcer diseae','AIDS','Diabetes','Gastroenteritis','Bronchial Asthma','Hypertension',
' Migraine','Cervical spondylosis',
'Paralysis (brain hemorrhage)','Jaundice','Malaria','Chicken pox','Dengue','Typhoid','hepatitis A',
'Hepatitis B','Hepatitis C','Hepatitis D','Hepatitis E','Alcoholic hepatitis','Tuberculosis',
'Common Cold','Pneumonia','Dimorphic hemmorhoids(piles)',
'Heartattack','Varicoseveins','Hypothyroidism','Hyperthyroidism','Hypoglycemia','Osteoarthristis',
'Arthritis','(vertigo) Paroymsal  Positional Vertigo','Acne','Urinary tract infection','Psoriasis',
'Impetigo'];

  }

  _selectedValue1(index, item) {
    this.setState({ symp1: item.name });
  }
  _selectedValue2(index, item) {
    this.setState({ symp2: item.name });
  }
  _selectedValue3(index, item) {
    this.setState({ symp3: item.name });
  }
  _selectedValue4(index, item) {
    this.setState({ symp4: item.name });
  }
  _selectedValue5(index, item) {
    this.setState({ symp5: item.name });
  }
  clickHandler = () => {
    /*this.props.navigation.push('UserRecord',{ 
            firebase
        }
      );*/
    var database=firebase.database();
    var ref=database.ref('patient'); 
    ref.on('value',this.gotData,this.errData);
    var ans=result.find(result=>result.email==email);
    if(ans==undefined)
    {
      console.log('usernotfound');
      Toast.show('Patient medical record not found');
    }
    else
    {  
      Toast.show('Patient found');
      console.log(ans);
      var diseases=Object.values(ans);
      console.log(diseases[2]);
      var copy=diseases[2];
      console.log(copy);
      /*if(clicked==0)
      {
        
        clicked=1;
      }*/
     // copy.shift();
      //this.props.navigation.push('DocMain2',{ans});
      alert(diseases[2]);
    }

  };

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


  submit=(symp1,symp2,symp3,symp4,symp5)=>
  {
    if(symp1==-1&&symp2==-1&&symp3==-1)
    {
      Toast.show('Select atleast 3 symptoms');
      return;
    }
    //console.log(symp1);
    /* console.log(JSON.stringify({
      'symptoms' : [[1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    }));*/
    //console.log(disease);
    console.log(symptoms2.length);
    var symptoms=[[]];
   // symptoms[0].push(22);
    //console.log(symp1);
    var s1=symptoms2.indexOf(symp1);
    var s2=symptoms2.indexOf(symp2);
    var s3=symptoms2.indexOf(symp3);
    var s4=symptoms2.indexOf(symp4);
    var s5=symptoms2.indexOf(symp5);
    console.log(s1+' '+s2+' '+s3+' '+s4+' '+s5);
    //console.log(symptoms2.length);
    for(var i=0;i<symptoms2.length;i++)
    {
      if(i==s1)
      {
        symptoms[0].push(1);
      }
      else if(i==s2)
      {
        symptoms[0].push(1);
      }
      else if(i==s3)
      {
        symptoms[0].push(1);
      }
      else if(i==s4)
      {
        symptoms[0].push(1);
      }
      else if(i==s5)
      {
        symptoms[0].push(1);
      }
      else
      {
        symptoms[0].push(0);
      }
    }
    //console.log(symptoms);
    //console.log(symptoms[0].length);
    Toast.show('Loading',Toast.LONG);
    Toast.show('Loading',Toast.LONG);
    fetch('https://minor-projec.herokuapp.com/', {
    method: 'POST',
    body: JSON.stringify({
      'symptoms' : symptoms
   }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    } 
  })
  .then(response => response.json())
  .then(
    json => {
      //console.log(json)
      JSON.stringify(json); 
      var a=json[0];
      var b=json[1];
      var c=json[2];
      //console.log(a+" "+b+" "+c);
      this.setState({d1:disease[a]});
      this.setState({d2:disease[b]});
      this.setState({d3:disease[c]});
     console.log(this.state.d1+','+this.state.d2+','+this.state.d3);
      
    }
    ).
  catch(function(error)
  {
    console.log('errorin'+error.message);
    throw error;
  });

  }

  render() {
  
  const firebase=this.props.navigation.getParam('firebase');
  email = this.props.navigation.getParam('email', 'null');  
    return (
      <View style={Styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0E0B33" />
        <Text style={{color:'white',paddingBottom:20,fontSize:30}}>
        Enter Symptoms
        </Text>
        <RNPicker
          dataSource={this.state.dataSource}
          dummyDataSource={this.state.dataSource}
          defaultValue={false}
          pickerTitle={""}
          showSearchBar={true}
          disablePicker={false}
          changeAnimation={"none"}
          searchBarPlaceHolder={"Search Symptom"}
          showPickerTitle={true}
          searchBarContainerStyle={this.props.searchBarContainerStyle}
          pickerStyle={Styles.pickerStyle}
          pickerItemTextStyle={Styles.listTextViewStyle}
          selectedLabel={this.state.symp1}
          placeHolderLabel={this.state.placeHolderText}
          selectLabelTextStyle={Styles.selectLabelTextStyle}
          placeHolderTextStyle={Styles.placeHolderTextStyle}
          dropDownImageStyle={Styles.dropDownImageStyle}
          dropDownImage={require("./assets/ic_drop_down.png")}
          selectedValue={(index, item) => this._selectedValue1(index, item)}
        />
        <RNPicker
          dataSource={this.state.dataSource}
          dummyDataSource={this.state.dataSource}
          defaultValue={false}
          pickerTitle={""}
          showSearchBar={true}
          disablePicker={false}
          changeAnimation={"none"}
          searchBarPlaceHolder={"Search Symptom"}
          showPickerTitle={true}
          searchBarContainerStyle={this.props.searchBarContainerStyle}
          pickerStyle={Styles.pickerStyle}
          pickerItemTextStyle={Styles.listTextViewStyle}
          selectedLabel={this.state.symp2}
          placeHolderLabel={this.state.placeHolderText}
          selectLabelTextStyle={Styles.selectLabelTextStyle}
          placeHolderTextStyle={Styles.placeHolderTextStyle}
          dropDownImageStyle={Styles.dropDownImageStyle}
          dropDownImage={require("./assets/ic_drop_down.png")}
          selectedValue={(index, item) => this._selectedValue2(index, item)}
        />
        <RNPicker
          dataSource={this.state.dataSource}
          dummyDataSource={this.state.dataSource}
          defaultValue={false}
          pickerTitle={""}
          showSearchBar={true}
          disablePicker={false}
          changeAnimation={"none"}
          searchBarPlaceHolder={"Search Symptom"}
          showPickerTitle={true}
          searchBarContainerStyle={this.props.searchBarContainerStyle}
          pickerStyle={Styles.pickerStyle}
          pickerItemTextStyle={Styles.listTextViewStyle}
          selectedLabel={this.state.symp3}
          placeHolderLabel={this.state.placeHolderText}
          selectLabelTextStyle={Styles.selectLabelTextStyle}
          placeHolderTextStyle={Styles.placeHolderTextStyle}
          dropDownImageStyle={Styles.dropDownImageStyle}
          dropDownImage={require("./assets/ic_drop_down.png")}
          selectedValue={(index, item) => this._selectedValue3(index, item)}
        />
        <RNPicker
          dataSource={this.state.dataSource}
          dummyDataSource={this.state.dataSource}
          defaultValue={false}
          pickerTitle={""}
          showSearchBar={true}
          disablePicker={false}
          changeAnimation={"none"}
          searchBarPlaceHolder={"Search Symptom"}
          showPickerTitle={true}
          searchBarContainerStyle={this.props.searchBarContainerStyle}
          pickerStyle={Styles.pickerStyle}
          pickerItemTextStyle={Styles.listTextViewStyle}
          selectedLabel={this.state.symp4}
          placeHolderLabel={this.state.placeHolderText}
          selectLabelTextStyle={Styles.selectLabelTextStyle}
          placeHolderTextStyle={Styles.placeHolderTextStyle}
          dropDownImageStyle={Styles.dropDownImageStyle}
          dropDownImage={require("./assets/ic_drop_down.png")}
          selectedValue={(index, item) => this._selectedValue4(index, item)}
        />
        <RNPicker
          dataSource={this.state.dataSource}
          dummyDataSource={this.state.dataSource}
          defaultValue={false}
          pickerTitle={""}
          showSearchBar={true}
          disablePicker={false}
          changeAnimation={"none"}
          searchBarPlaceHolder={"Search Symptom"}
          showPickerTitle={true}
          searchBarContainerStyle={this.props.searchBarContainerStyle}
          pickerStyle={Styles.pickerStyle}
          pickerItemTextStyle={Styles.listTextViewStyle}
          selectedLabel={this.state.symp5}
          placeHolderLabel={this.state.placeHolderText}
          selectLabelTextStyle={Styles.selectLabelTextStyle}
          placeHolderTextStyle={Styles.placeHolderTextStyle}
          dropDownImageStyle={Styles.dropDownImageStyle}
          dropDownImage={require("./assets/ic_drop_down.png")}
          selectedValue={(index, item) => this._selectedValue5(index, item)}
        />
        <TouchableOpacity style={Styles.button} onPress={()=> this.submit(this.state.symp1,this.state.symp2,this.state.symp3,this.state.symp4,this.state.symp5)}>
            <Text style={Styles.buttontext}>submit</Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
        <Text style={{color:'white',padding:10,fontSize:20}}>Prediction1: {this.state.d1}</Text>
        <Text style={{color:'white',padding:10,fontSize:20}}>Prediction2: {this.state.d2}</Text>
        <Text style={{color:'white',padding:10,fontSize:20,marginBottom:75}}>Prediction3: {this.state.d3}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.clickHandler}
          style={Styles.TouchableOpacityStyle}>
          <Image
            source={{uri:'https://icon-library.net/images/paper-icon/paper-icon-4.jpg'}}
            style={Styles.FloatingButtonStyle}
          />
        </TouchableOpacity>

      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor:'#23204f',
    flex: 1,
    justifyContent :'center',
    alignItems: 'center',
  },

  searchBarContainerStyle: {
    marginBottom: 10,
    flexDirection: "row",
    height: 60,
    shadowOpacity: 1.0,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1
    },
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 10,
    elevation: 3,
    marginLeft: 10,
    marginRight: 10
  },

  selectLabelTextStyle: {
    color: "#000",
    fontSize:18,
    textAlign: "left",
    width: "99%",
    padding: 10,
    flexDirection: "row"
  },
  placeHolderTextStyle: {
    color: "#D3D3D3",
    padding: 13,
    textAlign: "left",
    width: "99%",
    flexDirection: "row"
  },
  dropDownImageStyle: {
    marginLeft: 10,
    width: 10,
    height: 10,
    alignSelf: "center"
  },
  listTextViewStyle: {
    color: "#000",
    borderRadius:1,
    borderWidth:1,
    padding:10,
    flex: 0.9,
    textAlign: "left"
  },
  pickerStyle: {
    marginLeft: 18,
    elevation:0,
    paddingRight: 25,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 6,
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 1,
      height: 1
    },
    borderWidth:1,
    shadowRadius: 10,
    backgroundColor: "#1f1c52",
    shadowColor: "#d3d3d3",
    borderRadius: 5,
    flexDirection: "row"
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    marginTop:40,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    backgroundColor:'#ffffff',
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
  button: {
      marginTop:20,
      width:300,
      backgroundColor:'#0E0B33',
      borderRadius :10,
      height: 42,
      justifyContent: 'center',
    },
    buttontext:{
      fontSize:16,
      fontWeight: '500',
      color:'#ffffff',
      textAlign:'center',
    },
});