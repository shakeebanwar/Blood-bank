import React, { useState } from 'react';
import { Alert, View, StyleSheet, Image, Text, ScrollView, ImageBackground, Picker } from 'react-native';
import HomeButton from '../reuse/Buttons';
import { TextInput, Appbar } from 'react-native-paper';
import { abs } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons'
import GlobalHead from '../screens/Header';
import DateTimePicker from '@react-native-community/datetimepicker';

function BloodRequest(props) {


    const [text, setText] = React.useState('');
    const [selectedValue, setSelectedValue] = useState("male");
    const [bloodselectedValue, bloodsetSelectedValue] = useState("O+");
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');

    };



    return (





        <View style={styles.container}>



            <GlobalHead arrowstatus={true} headTitle={"Donor Form"} redirect={() => props.navigation.goBack()} />
            <ScrollView>

                

                <View style={styles.PickerGender}>

                    <Text style={{ color: 'grey', left: 3 }} onPress={() => showDatepicker()}>Date of Birth</Text>

                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>


                <View style={styles.buttonDiv}>
                    <TextInput underlineColor="red" selectionColor="red" style={{ backgroundColor: 'transparent' }}
                        label="First Name"
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
                        label="Last Name"
                        value={text}

                        onChangeText={text => setText(text)}
                        theme={{
                            colors: {
                                primary: "red"
                            }
                        }}
                    />

                </View>


                <View style={styles.PickerGender}>



                    <Picker style={{ color: 'grey' }} selectedValue={selectedValue} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} >
                        <Picker.Item label="Select Gender" value="" />
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                    </Picker>



                </View>


                



                <View style={styles.PickerBlood}>


                    <Picker style={{ color: 'grey' }} selectedValue={selectedValue} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        <Picker.Item label="Blood Group" value="" />
                        <Picker.Item label="O-" value="O-" />
                        <Picker.Item label="O+" value="O+" />
                        <Picker.Item label="A+" value="A+" />
                        <Picker.Item label="A-" value="A-" />
                        <Picker.Item label="B+" value="B+" />
                        <Picker.Item label="B-" value="B-" />
                        <Picker.Item label="AB+" value="AB+" />
                        <Picker.Item label="AB-" value="AB-" />
                    </Picker>

                </View>


                <View style={styles.buttonDiv}>
                    <TextInput underlineColor="red" selectionColor="red" style={{ backgroundColor: 'transparent' }}
                        label="Address"
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
                        label="Place to Doctor"
                        value={text}

                        onChangeText={text => setText(text)}
                        theme={{
                            colors: {
                                primary: "red"
                            }
                        }}
                    />

                </View>

                <View style={[styles.buttonDiv, { marginTop: 20 }]}>

                    <HomeButton name={"Donate"} redirect={() => props.navigation.navigate("BloodRequestDashboard")} />

                </View>

            </ScrollView>
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
    PickerBlood: {
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'red'
    },

    PickerGender: {
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'red'
    },
    bottomText: {

        fontSize: 12,
        opacity: 0.5,
        fontWeight: "bold"

    },
    bottomDiv: {

        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10,
        width: "100%"


    },

    ForgetView: {

        flexDirection: 'row',
        justifyContent: 'center',
    }









});
// BF322D
export default BloodRequest