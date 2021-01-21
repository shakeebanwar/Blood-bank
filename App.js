


import React from 'react';
import {
  
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AppNavigation from './src/config/navigation';

const App= () => {
  return (
   
      <AppNavigation />
   
  
  );
};



export default App;