import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import FootballScreen from '../components/football';
import HomeScreen from '../components/homescreen';
import SeriesScreen from '../components/cricket';
import MatchDetails from '../components/matchdetails';
import CricketDetails from '../components/cricketdetails';
// import SplashScreen from '../components/splashScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Football" component={FootballScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Series" component={SeriesScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MatchDetails" component={MatchDetails} options={{ headerShown: false }} />
      <Stack.Screen name="CricketDetails" component={CricketDetails} options={{ headerShown: false }} />
      
    </Stack.Navigator>
  );
};

export default AppNavigator;
