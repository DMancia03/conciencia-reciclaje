import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import StepsScreen from "./src/screens/StepsScreen";

const App = () => {
  const steps = [
    { step: 1, description: 'Separa los materiales reciclables del resto de la basura.' },
    { step: 2, description: 'Lava los envases antes de reciclarlos.'},
    { step: 3, description: 'Identifica los contenedores de reciclaje de tu área.' },
    { step: 4, description: 'Coloca los materiales reciclables en los contenedores correspondientes.' },
  ];

  const Stack = createStackNavigator();

  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Pasos de Reciclaje">
        {(props) => <StepsScreen {...props} steps={steps} />}
      </Stack.Screen>
    </Stack.Navigator>
    <StatusBar backgroundColor="#3b7c2e" translucent />
  </NavigationContainer>
  );
};

export default App;
