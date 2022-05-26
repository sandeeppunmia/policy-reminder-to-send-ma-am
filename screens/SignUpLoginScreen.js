import React, {Component} from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet, Alert, Modal, KeyboardAvoidingView,ScrollView} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class SignUpLoginScreen extends Component{
  constructor(){
    super();
    this.state={
      emailId:'',
      pin:'',
      confirmPin:'',
      isModalVisible:'false',
      name:'',
      contact:''
    }
  }

  nextScreen=async()=>{
    this.props.navigation.navigate('Clock')
  }

  userSignUp=(emailId,pin,confirmPin)=>{
    if(pin !== confirmPin){
      return Alert.alert("Pin doesn't match\n Check your pin");
    }
    else{
      firebase.auth().createUserWithEmailAndPassword(emailId,pin)
    .then(()=>{
      db.collection('users').add({
        name:this.state.name,
        contact:this.state.contact,
        emailId:this.state.emailId
      })
      return Alert.alert('User Added Successfully','',[{text:'Ok',onPress:()=>this.setState({'isModalVisible':false})}]);
    })
    .catch(function(error){
      var errorCode = error.code
      var errorMessage = error.message
      return Alert.alert(errorMessage)
    })
    }
  }

  userLogin=(emailId,pin)=>{
    firebase.auth().signInWithEmailAndPassword(emailId,pin)
    .then((response)=>{
        return Alert.alert('Succesfully Loginned')
    })
    this.nextScreen()
    .catch (function(error){
        var errorCode = error.code
        var errorMessage=error.message
        return Alert.alert(errorMessage)
    })
  }

  showModal=()=>{
    return(
      <Modal
        animationType='fade'
        transparent={true}
        visible={this.state.isModalVisible}
      >
      <View style={styles.modalContainer}>
        <ScrollView style={{width:'100%'}}>
          <KeyboardAvoidingView style={styles.keyboardAvoidingViewStyle}>
            <Text 
              style={styles.modalTitle}>
              Registration
            </Text>

            <TextInput style={styles.formTextInput}
            placeholder={"Name"}
            maxLength={35}
            onChangeText={(text)=>{
              this.setState({
                name:text
              })
            }}
            />

            <TextInput style={styles.formTextInput}
            placeholder={"Contact"}
            maxLength={10}
            keyboardType={'numeric'}
            onChangeText={(text)=>{
              this.setState({
                contact:text
              })
            }}
            />

            <TextInput style={styles.formTextInput}
            placeholder={"Email Address"}
            keyboardType={'email-address'}
            onChangeText={(text)=>{
              this.setState({
                emailId:text
              })
            }}
            />

            <TextInput style={styles.formTextInput}
            placeholder={"6-digit Pin"}
            maxLength={6}
            keyboardType={'numeric'}
            secureTextEntry={true}
            onChangeText={(text)=>{
              this.setState({
                pin:text
              })
            }}
            />

            <TextInput style={styles.formTextInput}
            placeholder={"Confirm Pin"}
            maxLength={6}
            keyboardType={'numeric'}
            secureTextEntry={true}
            onChangeText={(text)=>{
              this.setState({
                confirmPin:text
              })
            }}
            />

            <View style={styles.modalButton}>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={()=>{
                  this.userSignUp(this.state.emailId,this.state.pin,this.state.confirmPin)
                }}>
                <Text style={styles.registerButtonText}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.modalButton}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={()=>{
                  this.setState({
                    'isModalVisible':'false'
                  })
                }}>
                <Text style={{color:'ff5722'}}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>

          </KeyboardAvoidingView>
        </ScrollView>
      </View>
      </Modal>
    )
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={{justifyContent:'center',alignItems:'center'}}></View>
        {
          this.showModal()
        }
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.title}>POLICY REMINDER</Text>
        </View>
        <View>
          <TextInput
            style={styles.loginBox}
            placeholder="abc@example.com"
            keyboardType='email-address'
            onChangeText={(text)=>{
              this.setState({
                emailId:text
              })
            }
          }/>

          <TextInput
            style={styles.loginBox}
            placeholder="Enter your 6-digit pin"
            keyboardType={'numeric'}
            maxLength={6}
            secureTextEntry={true}
            onChangeText={(text)=>{
              this.setState({
                pin:text
              })
            }}
          />

          <TouchableOpacity
            style={[styles.button,{marginBottom:20,marginTop:20}]}
            onPress={()=>{
              this.userLogin(this.state.emailId,this.state.pin)
          }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={()=>{
              this.setState({isModalVisible:true})
            }}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

        </View>
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
        fontSize:65,
        fontWeight:"300",
        paddingBottom:30,
        color:'#000000',
        alignItems:'center'
    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:'#ff9800',
        shadowColor:'#000',
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.30,
        shadowRadius:10.32,
        elevation:16
    },
    loginBox:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        borderColor:'#ff8a65', 
        fontSize:15,
        margin:10,
        paddingLeft:10
    },
    buttonText:{
        color:'#ffff',
        fontWeight:'200',
        fontSize:20
    },
    /*buttonContainer:{
        flex:1,
        alignItems:'center'
    },*/
    keyboardAvoidingViewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modalTitle:{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:30,
        color:'#ff5722',
        margin:50
    },
    modalContainer:{
        flex:1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffff',
        marginRight:30,
        marginLeft:30,
        marginTop:80,
        marginBottom:80
    },
    formTextInput:{
        width:'75%',
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
    },
    registerButton:{
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:30
    },
    registerButtonText:{
        color:'#ff5722',
        fontSize:15,
        fontWeight:'bold'
    },
    cancelButton:{
        width:200,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5
    }
})