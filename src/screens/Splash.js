import React, { useState } from 'react';
import { Alert, View, StyleSheet, Image, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import HomeButton from '../reuse/Buttons';
import { TextInput, Appbar } from 'react-native-paper';
import { abs } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons'
import GlobalHead from '../screens/Header';

function Splash(props) {


    const [text, setText] = React.useState('');

    return (





        <View style={styles.container}>
            <Image style={{ width: 200, height: 200}} source={require('../../images/blood.png')} />

        </View>


    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'



    },










});
// BF322D
export default Splash