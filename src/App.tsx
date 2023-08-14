import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Screens/Home';
import ProjectCard from './Components/ProjectCard';
import ColourChanger from './Screens/ColorChanger';
import Dicee from './Screens/Dicee';
import Calculator from './Screens/Calculator';
import Password from './Screens/Password';
import Tictactoe from './Screens/Tictactoe';

export type RootStackParamList = {
  Home: undefined;
  ProjectCard: undefined;
  ColorChanger: undefined;
  Dicee: undefined;
  Calculator: undefined;
  Password: undefined;
  Tictactoe: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProjectCard" component={ProjectCard} />
        <Stack.Screen name="ColorChanger" component={ColourChanger} />
        <Stack.Screen name="Dicee" component={Dicee} />
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="Tictactoe" component={Tictactoe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
