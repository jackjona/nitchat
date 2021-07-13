import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import RegisteScreen from './screens/RegisteScreen';
import ChatScreen from './screens/ChatScreen';

const Stack = createStackNavigator ();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerTitleAlign:'center'}}>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerStyle: {backgroundColor: '#DCDCDCDC',},headerTintColor: '#000',headerTitleStyle: {fontSize: 20,},}}/>
      <Stack.Screen name="Register" component={RegisteScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

