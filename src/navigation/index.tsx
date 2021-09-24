import * as React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather, FontAwesome, MaterialCommunityIcons   } from "@expo/vector-icons/";

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import Colors from '../styles/Colors';
import { StatusBar } from 'expo-status-bar';

// Creating navigation  
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation: React.FC = () => {
    return (
       <NavigationContainer >
            <StatusBar style="light" />
            
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: Colors.background[300],
                        height: 90,
                    },
                    headerTitleStyle: {
                        color: Colors.white,
                        fontWeight: 'bold', 
                    },

                    tabBarStyle: {
                        backgroundColor: Colors.background[200],
                        height: 75,
                        
                    },
                    tabBarLabelStyle: {
                        fontWeight: 'bold',
                        marginBottom: 8,
                    },
                    tabBarActiveTintColor: Colors.secondary,
                    tabBarHideOnKeyboard: true,
                    
                }}
            >
                <Tab.Screen 
                    name="Home"
                    component={ Home }
                    options={{
                        tabBarLabel: "Eventos",
                        tabBarIcon: ({ size, color }) => ( 
                            <Feather name="home" size={size} color={color} /> 
                        )
                    }}
                />

                <Tab.Screen 
                    name="Register"
                    component={ Register }
                    options={{
                        tabBarLabel: "Cadastrar",
                        tabBarIcon: ({ size, color }) => ( 
                            <MaterialCommunityIcons name="ticket" size={size} color={color} />
                        )
                        
                    }}
                />

                <Tab.Screen 
                    name="Profile"
                    component={ Profile }
                    options={{
                        tabBarLabel: "Perfil",
                        tabBarIcon: ({ size, color }) => ( 
                            <FontAwesome name="user-circle" size={size} color={color} /> 
                        )
                    }}
                />        

            </Tab.Navigator>
       </NavigationContainer >
    )
}

export default Navigation;