import React, {Component} from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet, Alert, Modal, KeyboardAvoidingView,ScrollView} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import DropDownPicker from 'react-native-dropdown-picker';
import Calendar from 'react-native-calendar-select';

export default class PolicyDetails extends Component{
   
    constructor(){
        super();
        this.state={
            policyNo:'',
            planName:'',
            dateOfCommencement:'',
            premiumAmount:'',
            premiumType:'',
            nextPremiumDueDate:'',
            previewValue:'Yearly',
            dropdownHeight:40,
            startDate: new Date(2022, 26, 5),  
            endDate: new Date(2023, 31, 12)
        };
    }
   
    render(){
        
       return(
        <View style={styles.container}>
            <ScrollView style={{width:'100%'}}>
                <View>
                <Text style={styles.title}>Add Policies</Text>
                </View>

                <View>
                       <KeyboardAvoidingView style={styles.keyboardAvoidingViewStyle}>

                        <View style={{flexDirection:'row'}}>
                       <Text style={styles.textStyling}>Policy Number :</Text>
                       <TextInput style={styles.formTextInput}
                        placeholder={"Policy Number"}
                        maxLength={15}
                        onChangeText={()=>{
                        
                        }}
                        />
                        </View>

                        <View style={{flexDirection:'row'}}>
                        <Text style={[styles.textStyling,{paddingLeft:40}]}>Plan Name :</Text>
                            <TextInput 
                            style={styles.formTextInput}
                            placeholder="Plan Name"
                            onChangeText={()=>{
                                
                            }}>
                        </TextInput>
                        </View>
                        
                        <View style={{flexDirection:'row'}}>
                            
                        </View>

                        <View style={{flexDirection:'row'}}>
                        <Text style={[styles.textStyling,{paddingLeft:20}]}>Premium Amt :</Text>
                            <TextInput 
                            style={styles.formTextInput}
                            placeholder="Premium Amount"
                            onChangeText={()=>{
                                
                            }}>
                        </TextInput>
                        </View>

                        

                       
                       </KeyboardAvoidingView> 
                </View>
            </ScrollView>
        </View>
       )
   }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#6495ED',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:45,
        fontWeight:"250",
        color:'crimson',
        alignItems:'center',
        marginLeft:100,
        marginTop:20
    },
    textStyling:{
        fontSize:25,
        color:'black',
        marginTop:20
    },
    keyboardAvoidingViewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    formTextInput:{
        width:'50%',
        height:35,
        borderColor:'#000000',
        borderRadius:10,
        borderWidth:1,
        marginTop:15,
        padding:10,
        marginLeft:20
    },
})
/*
<CalendarPicker 
                                onDateChange={this.onDateChange}
                            />
                            <View>
                            <Text>Selected Date:{ startDate }</Text>
                            </View>
 */

/*
 <DropDownPicker 
                        items={[
                            {label:"Yearly",value:"Yearly"},
                            {label:"Half-Yearly",value:"Half-Yearly"},
                            {label:"Quaterly",value:"Quaterly"}
                        ]}
                        defaultValue={this.state.previewValue}
                        containerStyle={{
                            height: 40,
                            borderRadius: RFValue(20),
                            marginBottom: RFValue(20),
                            marginHorizontal: RFValue(10)
                        }}
                        onOpen={() => {
                            this.setState({ dropdownHeight: 170 });
                        }}
                        onClose={() => {
                            this.setState({ dropdownHeight: 40 });
                        }}
                        style={{ backgroundColor: "transparent" }}
                          itemStyle={{
                            justifyContent: "flex-start"
                          }}
                          dropDownStyle={{
                            backgroundColor: "#ff7f50"
                          }}
                          labelStyle={{
                            color:"white"
                          }}
                          arrowStyle={{
                              color:"white"
                          }}
                          onChangeItem={item =>
                            this.setState({
                              previewValue: item.value
                            })
                          }
                        />

 */