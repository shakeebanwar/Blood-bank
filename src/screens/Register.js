import React, { useState } from 'react';
import { Alert, View, StyleSheet, Image, Text, ScrollView, Picker,TouchableOpacity} from 'react-native';
import HomeButton from '../reuse/Buttons';
import { TextInput } from 'react-native-paper';
import axios from 'axios';
import Loader from '../screens/loader';

function home(props) {


    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [fullname, setFullName] = React.useState('');
    const [Location, setLocation] = React.useState('');
    const [Phonenumber, setPhonenumber] = React.useState('');
    const [Password, setPassword] = React.useState('');
    const [selectedValue, setSelectedValue] = useState("male");
    const [bloodselectedValue, bloodsetSelectedValue] = useState("O+");
    const [loader, setLoader] = useState(false);
 

    console.log('my state is ',email,username,fullname,Location,Phonenumber,Password,selectedValue,bloodselectedValue)

    const createAccount = ()=>{

        setLoader(true)
        var formdata = new FormData();
        formdata.append("Full_Name", fullname);
        formdata.append("Email", email);
        formdata.append("Username", username);
        formdata.append("Location", Location);
        formdata.append("PhoneNumber", Phonenumber);
        formdata.append("Gender", selectedValue);
        formdata.append("Bloodgroup", bloodselectedValue);
        formdata.append("Password", Password);
        formdata.append("Sender_ID", "dCCqEA1dRbyN_9YmWCRDDD:APA91bGpyATcY7d-IH2ksllRzmWuOWk7fn1HsHD71kQWdaPiYxqHYCsbbqKdVL1pjoSf4wRtzzgoctlf0d6LXwNbC03b3f7g__tW2GSKaBIzdAvYpbXf-07bMYzCq5XWVfCxqppacAGL");
        formdata.append("Device_type", "android");
        formdata.append("latitude", "24.721");
        formdata.append("longitude", "24.721");
        console.log(formdata)

        var requestOptions = {
        method: 'POST',
        body: formdata,
    
        };

        axios.post("http://bloodbankapp.pythonanywhere.com/User_Signup",formdata)
        .then(response=>{

            if(response.data.status){
                setLoader(false)
                alert(response.data.message)
                props.navigation.navigate("home")
            }
            else{
                setLoader(false)
                alert(response.data.message)

            }
        })
        .catch(error => console.log('error', error));

        // fetch("http://bloodbankapp.pythonanywhere.com/User_Signup", requestOptions)
        // .then(response => response.json())
        // .then(result => {
            
        //     alert("save")

        // })
        // .catch(error => console.log('error', error));



        
    }

    return (




        <View>
            {loader && <Loader/> }
           
            <ScrollView>


                <View style={styles.container}>
                        
                
                    <View style={styles.logoDiv}>
                        <Image
                            style={{ width: 120, height: 120 }}
                            source={require('../../images/blood.png')} />



                    </View>



                    <View style={styles.buttonDiv}>
                        <TextInput underlineColor="red" selectionColor="red" style={{ backgroundColor: 'transparent' }}
                            label="Email"
                            value={email}
                            onChangeText={email => setEmail(email)}
                            theme={{
                                colors: {
                                    primary: "red"
                                }
                            }}
                        />


                    </View>


                    <View style={styles.buttonDiv}>
                        <TextInput underlineColor="red" selectionColor="red" style={{ backgroundColor: 'transparent' }}
                            label="UserName"
                            value={username}

                            onChangeText={username => setUsername(username)}
                            theme={{
                                colors: {
                                    primary: "red"
                                }
                            }}
                        />

                    </View>

                    <View style={styles.buttonDiv}>
                        <TextInput underlineColor="red" selectionColor="red" style={{ backgroundColor: 'transparent' }}
                            label="FullName"
                            value={fullname}

                            onChangeText={fullname => setFullName(fullname)}
                            theme={{
                                colors: {
                                    primary: "red"
                                }
                            }}
                        />

                    </View>

                    <View style={styles.buttonDiv}>
                        <TextInput underlineColor="red" selectionColor="red" style={{ backgroundColor: 'transparent' }}
                            label="Location"
                            value={Location}

                            onChangeText={Location => setLocation(Location)}
                            theme={{
                                colors: {
                                    primary: "red"
                                }
                            }}
                        />

                    </View>


                    <View style={styles.buttonDiv}>
                        <TextInput underlineColor="red" selectionColor="red" style={{ backgroundColor: 'transparent' }}
                            label="PhoneNumber"
                            value={Phonenumber}

                            onChangeText={Phonenumber => setPhonenumber(Phonenumber)}
                            theme={{
                                colors: {
                                    primary: "red"
                                }
                            }}
                        />

                    </View>


                    <View style={styles.buttonDiv}>
                        <TextInput underlineColor="red" selectionColor="red" style={{ backgroundColor: 'transparent' }}
                            label="Password"
                            value={Password}
                            secureTextEntry={true}
                            onChangeText={Password => setPassword(Password)}
                            theme={{
                                colors: {
                                    primary: "red"
                                }
                            }}
                        />

                    </View>


                    <View style={styles.PickerGender}>

                        
                            
                        <Picker  style={{color: 'grey'}}selectedValue={selectedValue} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} >
                            <Picker.Item  label="Select Gender" value="" />
                            <Picker.Item  label="Male" value="Male" />
                            <Picker.Item  label="Female" value="Female" />
                        </Picker>
                      
                        

                    </View>


                    <View style={styles.PickerBlood}>


                        <Picker style={{color: 'grey'}} selectedValue={bloodselectedValue} onValueChange={(itemValue, itemIndex) => bloodsetSelectedValue(itemValue)}>
                            <Picker.Item  label="Blood Group" value="" />
                            <Picker.Item  label="O-" value="O-" />
                            <Picker.Item  label="O+" value="O+" />
                            <Picker.Item  label="A+" value="A+" />
                            <Picker.Item  label="A-" value="A-" />
                            <Picker.Item  label="B+" value="B+" />
                            <Picker.Item  label="B-" value="B-" />
                            <Picker.Item  label="AB+" value="AB+" />
                            <Picker.Item  label="AB-" value="AB-" />
                        </Picker>

                    </View>

                    <View style={[styles.buttonDiv, { marginTop: 20 }]}>

                       <HomeButton name={"Create An Account"} redirect={()=>createAccount()} buttonActiveStatus ={loader}/>
                        
                        

                    </View>


                </View>


            </ScrollView>
        </View>




    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    logoDiv: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '10%',


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
export default home