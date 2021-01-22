import React, { useState } from 'react';
import { Alert, View, StyleSheet, Image, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import HomeButton from '../reuse/Buttons';
import { TextInput, Appbar } from 'react-native-paper';
import { abs } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons'
import GlobalHead from '../screens/Header';

function ChangePassword(props) {


    const [text, setText] = React.useState('');

    return (





        <View style={styles.container}>

            <GlobalHead arrowstatus={true} headTitle={"Profile"} redirect={() => props.navigation.goBack()} />

            <View style={{ alignItems: "center", top: 5 }}>
                <Image style={{ width: 150, height: 150, borderRadius: 360, borderColor: '#BF322D', borderWidth: 2 }} source={require('../../images/demo.jpeg')} />
                <TouchableOpacity style={{ backgroundColor: "white", padding: 5, borderRadius: 50, bottom: 20, left: 30, borderColor: "lightgrey", borderWidth: 1 }}>

                    <Icon name="camera-outline" style={{ color: '#636363', fontWeight: 'bold', fontSize: 20 }} />

                </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", top: 5 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#636363', fontWeight: 'bold' }}>Shakeeb Anwar</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="location-outline" style={{ color: '#636363', fontWeight: 'bold', fontSize: 20 }} />
                    <Text style={{ fontSize: 15, color: '#636363' }}>Pakistan</Text>

                </View>

            </View>

            <View style={{margin:"4%",top:"4%"}}>
            <View>

            <Icon name="call-outline" style={{ color: '#636363', fontWeight: 'bold', fontSize: 20 }} />

            </View>

            </View>







        </View>


    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,



    },










});
// BF322D
export default ChangePassword