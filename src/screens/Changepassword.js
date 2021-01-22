import React, { useState } from 'react';
import { Alert, View, StyleSheet, Image, Text, ScrollView, ImageBackground } from 'react-native';
import HomeButton from '../reuse/Buttons';
import { TextInput, Appbar } from 'react-native-paper';
import { abs } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons'
import GlobalHead from '../screens/Header';

function ChangePassword(props) {


    const [text, setText] = React.useState('');

    return (





        <View style={styles.container}>

            <GlobalHead arrowstatus={true} headTitle={"Change Password"} redirect={() => props.navigation.goBack()} />


           



            <View style={styles.buttonDiv}>
                <TextInput underlineColor="red" selectionColor="red" style={{ backgroundColor: 'transparent' }}
                    label="Old Password"
                    value={text}
                    onChangeText={text => setText(text)}
                    theme={{
                        colors: {
                            primary: "red"
                        }
                    }}
                />


            </View>


            <View style={styles.buttonDiv}>
                <TextInput underlineColor="red" selectionColor="red" style={{ backgroundColor: 'transparent' }}
                    label="New Password"
                    value={text}

                    onChangeText={text => setText(text)}
                    theme={{
                        colors: {
                            primary: "red"
                        }
                    }}
                />

            </View>


            <View style={styles.buttonDiv}>
                <TextInput underlineColor="red" selectionColor="red" style={{ backgroundColor: 'transparent' }}
                    label="Confirm Password"
                    value={text}

                    onChangeText={text => setText(text)}
                    theme={{
                        colors: {
                            primary: "red"
                        }
                    }}
                />

            </View>




            <View style={[styles.buttonDiv]}>

                <HomeButton name={"Change Password"} />

            </View>


           









        </View>


















    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,



    },
   
    buttonDiv: {

        margin: 10,


    },
   
   
  





});
// BF322D
export default ChangePassword