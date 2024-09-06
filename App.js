import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import StepsScreen from "./src/screens/StepsScreen";
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const App = () => {
  const steps = [
    { step: 1, description: 'Separa los materiales reciclables del resto de la basura.' },
    { step: 2, description: 'Lava los envases antes de reciclarlos.'},
    { step: 3, description: 'Identifica los contenedores de reciclaje de tu área.' },
    { step: 4, description: 'Coloca los materiales reciclables en los contenedores correspondientes.' },
  ];

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const primaryColor = '#97da85';
  const secondColor = '#3b7c2e';

  return (
  <NavigationContainer>
    <Tab.Navigator 
      screenOptions={{
        tabBarActiveBackgroundColor: secondColor,
        tabBarActiveTintColor: primaryColor,
        tabBarInactiveBackgroundColor: primaryColor,
        tabBarInactiveTintColor: secondColor,
      }}>
      <Tab.Screen 
        name="inicio" 
        component={HomeScreen}
        options={{
          title: 'Inicio',
          headerStyle: {
            backgroundColor: secondColor,
          },
          headerTitleStyle: {
            color: primaryColor,
          },
          tabBarIcon: ({ color }) => <Icon  name="home" color={color} size={26} />,
        }} />
      <Tab.Screen 
        name="proyectos" 
        component={DetailsScreen}
        options={{
          title: 'Proyectos',
          headerStyle: {
            backgroundColor: secondColor,
          },
          headerTitleStyle: {
            color: primaryColor,
          },
          tabBarIcon: ({ color }) => <Icon  name="book" color={color} size={26} />,
          
        }} />
    </Tab.Navigator>
    {/**
     * <Stack.Navigator>
      <Stack.Screen name="Pasos de Reciclaje">
        {(props) => <StepsScreen {...props} steps={steps} />}
      </Stack.Screen>
    </Stack.Navigator>
     */}
    <StatusBar backgroundColor={secondColor} translucent />
  </NavigationContainer>
  );
};

export default App;
