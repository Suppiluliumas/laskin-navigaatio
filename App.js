import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import { useState, useTransition, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Platform,
} from "react-native";
import Calculator from "./Calculator";
import History from "./History";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();


export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Calculator" component={Calculator}/>
      <Stack.Screen name="History" component={History}/>
    </Stack.Navigator>
  </NavigationContainer>    
  );
}
