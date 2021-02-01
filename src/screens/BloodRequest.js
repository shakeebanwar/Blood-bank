import React, { useState } from 'react';
import { Alert, View, StyleSheet, Image, Text, ScrollView, ImageBackground, Picker } from 'react-native';
import HomeButton from '../reuse/Buttons';
import { TextInput, Appbar } from 'react-native-paper';
import { abs } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons'
import GlobalHead from '../screens/Header';
import DateTimePicker from '@react-native-community/datetimepicker';
import { createStore } from 'redux';
import axios from 'axios';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../screens/loader';

function BloodRequest(props) {


  
    
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(false);
    const [blood, setblood] = useState("O+");
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [gender, setgender] = useState('');
    const [bloodtype, setbloodtype] = useState('');
    const [address, setaddress] = useState('');
    const [messagetodoctor, setmessagetodoctor] = useState('');
    const [loader, setLoader] = useState(false);


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

    const createBloodRequest= async ()=>{
        setLoader(true)
        let pickerdate = date.getDate()
        let pickermonth = date.getMonth() +  1
        let pickerYear = date.getFullYear()
        let fulldate = `${pickerdate}/` +  `${pickermonth}/` + `${pickerYear}`
        // console.log("my date is ",fulldate)
        // console.log("my=====> ",date,firstname,lastname,gender,bloodtype,blood,gender,address,messagetodoctor)


        let jsonValue = await AsyncStorage.getItem('userauth')
        jsonValue = JSON.parse(jsonValue)
        var formdata = new FormData();
        formdata.append("id", jsonValue.data.id);
        formdata.append("Blood_for", bloodtype);
        formdata.append("First_Name", firstname);
        formdata.append("Last_Name", lastname);
        formdata.append("DOB", fulldate);
        formdata.append("Gender", gender);
        formdata.append("Bloodgroup", blood);
        formdata.append("Address", address);
        formdata.append("Message_to_Donor", messagetodoctor);

    
        axios.post("https://bloodbankapp.pythonanywhere.com/requestBlood",formdata)
        .then(response=>{

          
            
            if(response.data.status){
                setLoader(false)
                alert(response.data.message)
                //props.setdata(response.data)
                
                // props.navigation.navigate("Dashboard")
            }
            else{
                setLoader(false)
                alert(response.data.message)

            }
        })
        .catch(error => console.log('error', error));
           
        

        
    
    
    
    
    }







    return (





        <View style={styles.container}>



            <GlobalHead arrowstatus={true} headTitle={"Blood Request Form"} redirect={() => props.navigation.goBack()} />
            {loader && <Loader/> }
            <ScrollView>

                

                <View style={styles.PickerGender}>

                    <Text  style={{ color: 'grey', left: 3 }} onPress={() => showDatepicker()}>{date == false ? "Date of Birth" : `${date.getDate()}/` +  `${date.getMonth() +  1}/` + `${date.getFullYear()}`}</Text>

                  

                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={new Date()}
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
                        value={firstname}

                        onChangeText={text => setfirstname(text)}
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
                        value={lastname}

                        onChangeText={text => setlastname(text)}
                        theme={{
                            colors: {
                                primary: "red"
                            }
                        }}
                    />

                </View>


                <View style={styles.PickerGender}>



                    <Picker style={{ color: 'grey' }} selectedValue={gender} onValueChange={(itemValue, itemIndex) => setgender(itemValue)} >
                        <Picker.Item label="Select Gender" value="" />
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                    </Picker>



                </View>


                <View style={styles.PickerGender}>



                    <Picker style={{ color: 'grey' }} selectedValue={bloodtype} onValueChange={(itemValue, itemIndex) => setbloodtype(itemValue)} >
                        <Picker.Item label="Blood For" value="" />
                        <Picker.Item label="Self" value="Self" />
                        <Picker.Item label="Other" value="Other" />
                    </Picker>



                </View>



                <View style={styles.PickerBlood}>


                    <Picker style={{ color: 'grey' }} selectedValue={blood} onValueChange={(itemValue, itemIndex) => setblood(itemValue)}>
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
                        value={address}

                        onChangeText={text => setaddress(text)}
                        theme={{
                            colors: {
                                primary: "red"
                            }
                        }}
                    />

                </View>


                <View style={styles.buttonDiv}>
                    <TextInput underlineColor="red" selectionColor="red" style={{ backgroundColor: 'transparent' }}
                        label="Message to Doctor"
                        value={messagetodoctor}

                        onChangeText={text => setmessagetodoctor(text)}
                        theme={{
                            colors: {
                                primary: "red"
                            }
                        }}
                    />

                </View>

                <View style={[styles.buttonDiv, { marginTop: 20 }]}>

                    <HomeButton name={"Submit Request"} redirect={() => createBloodRequest()} buttonActiveStatus ={loader} />

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

const mapStateToProps=(state)=> ({

   
    userauthdata:state.app.userlogin
    
  })
export default connect(mapStateToProps,null)(BloodRequest)