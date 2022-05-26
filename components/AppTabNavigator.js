import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Dashboard from '../screens/Dashboard';
import PolicyDetails from '../screens/PolicyDetailsScreen';
import Clock from '../screens/Clock';
import Documents from '../screens/Documents';
import Calculator from '../screens/Calculator';



export const AppTabNavigator = createBottomTabNavigator({
    PolicyDetailsScreen:{
        screen:PolicyDetails,
        navigationOptions:{
            tabBarIcon:<Image source={require("../assets/images/policy_details_icon.png")} style={{width:30,height:30}}/>,
            tabBarLabel:"Policy Details"
        }
    },
    Clock:{
        screen:Clock,
        navigationOptions:{
            tabBarIcon:<Image source={require("../assets/images/clock_icon.jpg")} style={{width:30,height:30}}/>,
            tabBarLabel:"Clock"
        }
    },
    Dashboard:{
        screen:Dashboard,
        navigationOptions:{
            tabBarIcon:<Image source={require("../assets/images/dashboard_icon.png")} style={{width:30,height:30}}/>,
            tabBarLabel:"Dashboard"
        }
    },
    Calculator:{
        screen:Calculator,
        navigationOptions:{
            tabBarIcon:<Image source={require("../assets/images/calculator_icon.png")} style={{width:30,height:30}}/>,
            tabBarLabel:"Calculator"
        }
    },
    Documents:{
        screen:Documents,
        navigationOptions:{
            tabBarIcon:<Image source={require("../assets/images/documents_icon.png")} style={{width:30,height:30}}/>,
            tabBarLabel:"Documents"
        }
    }
})