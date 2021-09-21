import * as React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather, FontAwesome, MaterialCommunityIcons   } from "@expo/vector-icons/";

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import Colors from '../styles/Colors';
import  Header  from '../components/Header';
import { SafeAreaView } from 'react-native';

// Creating navigation  
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation: React.FC = () => {
    return (
       <NavigationContainer >
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: Colors.background[300],
                        height: 75,
                    },
                    headerTitleStyle: {
                        color: Colors.text.light,
                        fontWeight: 'bold', 
                    },

                    tabBarStyle: {
                        width: "100%",
                        height: 75,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        backgroundColor: Colors.background[200]
                    },
                    tabBarLabelStyle: {
                        fontWeight: 'bold',
                        
                    },
                    tabBarActiveTintColor: Colors.secondary
                }}
            >
                <Tab.Screen 
                    name="Home"
                    component={ Home }
                    options={{
                        title: "Eventos",
                        tabBarIcon: ({ size, color }) => ( 
                            <Feather name="home" size={size} color={color} /> 
                        )
                    }}
                />

                <Tab.Screen 
                    name="Register"
                    component={ Register }
                    options={{
                        title: "Cadastrar",
                        tabBarIcon: ({ size, color }) => ( 
                            <MaterialCommunityIcons name="ticket" size={size} color={color} />
                        )
                        
                    }}
                />

                <Tab.Screen 
                    name="Profile"
                    component={ Profile }
                    options={{
                        title: "Perfil",
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