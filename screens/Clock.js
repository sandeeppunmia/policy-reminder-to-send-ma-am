import React, {Component} from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet, Alert, Modal, KeyboardAvoidingView,ScrollView} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { Calendar } from 'react-native-calendars';

export default class Clock extends Component{
   render(){
       return(
        <View>
             <Calendar/>
        </View>
       )
   }
}