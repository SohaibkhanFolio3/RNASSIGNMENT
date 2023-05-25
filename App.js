import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/stack/stack';


const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
