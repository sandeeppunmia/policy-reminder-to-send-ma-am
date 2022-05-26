import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Button} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import IntroScreen2 from './IntroScreen2';

export default class IntroScreen1 extends Component{

nextIntroScreen=async()=>{
  this.props.navigation.navigate('IntroScreen2')
}

    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Image 
                    style={styles.img1}
                    source={require('../assets/images/clock.jpg')} />  
                </View>
                <View>
                  <Text style={styles.title}>Legitimate Reminders</Text>
                  <Text style={styles.text}>View proper reminders before any policy renewal due date</Text>
                
                  <TouchableOpacity style={styles.button}
                  onPress={()=>{
                   this.nextIntroScreen();
                  }}>
                  <Text style={styles.buttonText}>NEXT</Text>
                  </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#ffffff",
    },
    img1:{
      width:50,
      height:450,
      paddingLeft:420
    },
    title:{
      fontFamily:'Georgia',
      fontSize:RFValue(33),
      fontWeight:"250",
      paddingBottom:30,
      paddingLeft:20,
      width:375,
      color:'black',
    },
    text:{
      fontFamily:'Georgia',
      fontSize:RFValue(20),
      fontWeight:"250",
      paddingBottom:0,
      paddingLeft:20,
      width:375,
      color:'black',
    },
    button:{
        width:120,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'black',
        shadowColor:'#000',
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.30,
        shadowRadius:10.32,
        elevation:16,
        marginTop:100,
        marginLeft:280
    },
    buttonText:{
      fontFamily:'bold',
      color:'#ffff',
      fontWeight:'250',
      fontSize:RFValue(20),
    }
})