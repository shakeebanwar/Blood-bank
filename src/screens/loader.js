import * as React from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Alert, View, StyleSheet, Image, Text, ScrollView, Picker,TouchableOpacity} from 'react-native';

const Loader = () => (
    <View style={{flex:1,justifyContent:'center',position:'absolute', top:0,left:0,right:0,bottom:0}}>
          <ActivityIndicator animating={true} color={Colors.red800} />

    </View>

);

export default Loader;