import * as React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, FontAwesome, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons/";
import { StatusBar } from 'expo-status-bar';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import Cart from '../screens/Cart';

import Colors from '../styles/Colors';
import { BtnIcon } from '../components/common/Btn/BtnIcon';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../../types';


// Creating navigation  
const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const Navigation = () => {
    return (
        <NavigationContainer >
            <StatusBar style="light" />
            <RootNavigator />
        </NavigationContainer>
    );
  }

const RootNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
            animationEnabled: false,
            headerTitleAlign: 'center',
            headerTintColor: Colors.white,
            headerStyle: {
                backgroundColor: Colors.background[300],
                height: 90,
            },
            headerTitleStyle: {
                color: Colors.white,
                fontWeight: 'bold',
            },     
        }}
      >
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={Cart} options={{ title:"Carrinho" }} />
      </Stack.Navigator>
    );
  }

const BottomTabNavigator: React.FC = () => {
    
    const cartButton = ( navigation ) => (
        <BtnIcon accessibilityLabel="Carrinho" onPress={() => navigation.navigate("Cart")} size={24} />
    )
    
    return (
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
                    options={({navigation}: RootTabScreenProps<'Home'> ) => ({
                        title: "Eventos",
                        tabBarLabel: "Home",
                        tabBarIcon: ({ size, color }) => ( 
                            <Feather name="home" size={size} color={color} /> 
                        ),
                         headerRight: () => cartButton(navigation)
                    })}
                />

                <Tab.Screen 
                    name="Register"
                    component={ Register }
                    options={{
                        title: "Cadastrar",
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
                        title: "Perfil",
                        tabBarLabel: "Perfil",
                        tabBarIcon: ({ size, color }) => ( 
                            <FontAwesome name="user-circle" size={size} color={color} /> 
                        )
                    }}
                />        

            </Tab.Navigator>
    
    )
}

export default Navigation;