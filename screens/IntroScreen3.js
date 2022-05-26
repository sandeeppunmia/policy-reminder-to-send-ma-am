import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default class IntroScreen2 extends Component{
 
nextIntroScreen=async()=>{
  this.props.navigation.navigate('SignUpLoginScreen')
}

    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Image 
                    style={styles.img1}
                    source={require('../assets/images/safe_data_storage.jpg')} />
                </View>
                <View>
                  <Text style={styles.title}>Safe Data Storage</Text>
                  <Text style={styles.text}>Your data will be safe from dangers.</Text>
                
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
      paddingTop:15,
      paddingBottom:25,
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