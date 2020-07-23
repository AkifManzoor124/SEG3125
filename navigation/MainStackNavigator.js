import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainActivity from '../screens/MainActivity'
import CustomizeRules from '../screens/CustomizeRules'
import Settings from '../screens/Settings'
import StartGame from '../screens/StartGame'
import RulesWiki from '../screens/RulesWiki'
import AddMember from '../screens/AddMember'
import AboutTheDevelopers from '../screens/AboutTheDevelopers'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainActivity" component={MainActivity}
      options={{headerShown: false}}/> 
      <Stack.Screen name="StartGame" component={StartGame} />
      <Stack.Screen name="CustomizeRules" component={CustomizeRules} />
      <Stack.Screen name="AddMember" component={AddMember} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Root">
        <Drawer.Screen name="Main Activity" component={Root} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Rules Wiki" component={RulesWiki} />
        <Drawer.Screen name="About The Developers" component={AboutTheDevelopers} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}