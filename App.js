


import React ,{useState,useEffect} from 'react';
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
import Splash from './src/screens/Splash';

// const App= () => {

//   const [ScreenTrue,setScreenTrue] = useState(true);

//   useEffect(()=>{

//     setTimeout(()=>{

//       setScreenTrue(false)
//     },3000)
//   },[])
//   return (

//     ScreenTrue ? <Splash/> : <AppNavigation />
   
      
   
  
//   );
// };



const App= () => {

  
  return (

   <AppNavigation />
   
      
   
  
  );
};




export default App;