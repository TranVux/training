import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import {NavigationScreen} from './src/screens/NavigationScreen';

function App(): JSX.Element {
  return (
    // <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
      <StatusBar backgroundColor="#0055D4" />
      <NavigationScreen />
    </NavigationContainer>
    // </SafeAreaView>
  );
}

export default App;
