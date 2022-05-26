require("../lib/swisscalc.lib.format.js");
require("../lib/swisscalc.lib.operator.js");
require("../lib/swisscalc.lib.operatorCache.js");
require("../lib/swisscalc.lib.shuntingYard.js");
require("../lib/swisscalc.calc.calculator.js");
require("../lib/swisscalc.display.numericDisplay.js");
require("../lib/swisscalc.display.memoryDisplay.js");

import React, {Component} from 'react';
import {View,Text,StyleSheet,PanResponder, Dimensions} from 'react-native';
import {CalcButton,CalcDisplay} from '../components';

export default class Calculator extends React.Component{

    constructor(props){
        super(props);

        this.state={
            display:"0",
            orientation:"portrait"
        }

        //Initialize Calculator
        this.oc = global.swisscalc.lib.operatorCache;
        this.calc = new global.swisscalc.calc.calculator();
    
        //Initialize Pan Responder 
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => { },
            onPanResponderRelease: (evt, gestureState) => {
              if (Math.abs(gestureState.dx) >= 50) {
                this.onBackspacePress();
              }
            },
          })
    }


    //Used when a digit is pressed
    onDigitPress=(digit)=>{
        this.calc.addDigit(digit)
        this.setState({display: this.calc.getMainDisplay()})
    }

    onBinaryOperatorPress=(operator)=>{
        this.calc.addBinaryOperator(operator);
        this.setState({display: this.calc.getMainDisplay()})
    }

    onUnaryOperatorPressed=(operator)=>{
        this.calc.addUnaryOperator(operator);
        this.setState({display:this.calc.getMainDisplay()})
    }

    onClearPress=()=>{
        this.calc.clear();
        this.setState({display:this.calc.getMainDisplay()})
    }

    onBackspacePress=()=>{
        this.calc.backspace();
        this.setState({display:this.calc.getMainDisplay()})
    }

    onPlusMinusPress=()=>{
        this.calc.negate();
        this.setState({display: this.calc.getMainDisplay()})
    }

    onEqualsPress=()=>{
        this.calc.equalsPressed();
        this.setState({ display: this.calc.getMainDisplay() });
    }

    renderPotrait=()=>{
        
    }

    render(){
        return(
                <View style={styles.container}>
                    <View style={styles.displayContainer} {...this.panResponder.panHandlers}>
                    <CalcDisplay display={this.state.display}/> 
                    </View>

                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonRow}>
                        <CalcButton onPress={()=>{this.onClearPress()}} title="C" color="white" backgroundColor="#dcc894" />
                        <CalcButton onPress={()=>{this.onPlusMinusPress()}} title="+/-" color="white" backgroundColor="#dcc894" />
                        <CalcButton onPress={()=>{this.onUnaryOperatorPressed(this.oc.PercentOperator)}} title="%" color="white" backgroundColor="#dcc894" />
                        <CalcButton onPress={()=>{this.onBinaryOperatorPress(this.oc.DivisionOperator)}} title="/" color="white" backgroundColor="#dca394" />
                        </View>

                        <View style={styles.buttonRow}>
                        <CalcButton onPress={()=>{this.onDigitPress("7")}} title="7" color="white" backgroundColor="#607dbb" />
                        <CalcButton onPress={()=>{this.onDigitPress("8")}} title="8" color="white" backgroundColor="#607dbb" />
                        <CalcButton onPress={()=>{this.onDigitPress("9")}} title="9" color="white" backgroundColor="#607dbb" />
                        <CalcButton onPress={()=>{this.onBinaryOperatorPress(this.oc.MultiplicationOperator)}} title="x" color="white" backgroundColor="#dca394" />
                        </View>

                        <View style={styles.buttonRow}>
                        <CalcButton onPress={()=>{this.onDigitPress("4")}} title="4" color="white" backgroundColor="#607dbb" />
                        <CalcButton onPress={()=>{this.onDigitPress("5")}} title="5" color="white" backgroundColor="#607dbb" />
                        <CalcButton onPress={()=>{this.onDigitPress("6")}} title="6" color="white" backgroundColor="#607dbb" />
                        <CalcButton onPress={()=>{this.onBinaryOperatorPress(this.oc.SubtractionOperator)}} title="-" color="white" backgroundColor="#dca394" />
                        </View>

                        <View style={styles.buttonRow}>
                        <CalcButton onPress={()=>{this.onDigitPress("1")}} title="1" color="white" backgroundColor="#607dbb" />
                        <CalcButton onPress={()=>{this.onDigitPress("2")}} title="2" color="white" backgroundColor="#607dbb" />
                        <CalcButton onPress={()=>{this.onDigitPress("3")}} title="3" color="white" backgroundColor="#607dbb" />
                        <CalcButton onPress={()=>{this.onBinaryOperatorPress(this.oc.AdditionOperator)}} title="+" color="white" backgroundColor="#dca394" />
                        </View>

                        <View style={styles.buttonRow}>
                        <CalcButton onPress={()=>{this.onDigitPress("0")}} title="0" color="white" backgroundColor="#607dbb" style={{flex:2}}/>
                        <CalcButton onPress={()=>{this.onDigitPress(".")}} title="." color="white" backgroundColor="#607dbb"/>
                        <CalcButton onPress={this.onEqualsPress} title="=" color="white" backgroundColor="#dca394" />
                        </View>
                    </View>
                    </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    },
    displayContainer:{
        flex:1,
        justifyContent:'flex-end'
    },
    buttonRow:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    buttonContainer:{
        paddingBottom:10
    }
})