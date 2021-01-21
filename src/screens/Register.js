import React, { useState } from 'react';
import { Alert, View, StyleSheet, Image, Text, ScrollView, Picker,TouchableOpacity} from 'react-native';
import HomeButton from '../reuse/Buttons';
import { TextInput } from 'react-native-paper';


function home(props) {


    const [text, setText] = React.useState('');
    const [selectedValue, setSelectedValue] = useState("male");
    const [bloodselectedValue, bloodsetSelectedValue] = useState("O+");

    return (




        <View>

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
                            label="UserName"
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
                            label="FullName"
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
                            label="PhoneNumber"
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
                            label="Password"
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

                        
                            
                        <Picker  style={{color: 'grey'}}selectedValue={selectedValue} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} >
                            <Picker.Item  label="Select Gender" value="" />
                            <Picker.Item  label="Male" value="Male" />
                            <Picker.Item  label="Female" value="Female" />
                        </Picker>
                      
                        

                    </View>


                    <View style={styles.PickerBlood}>


                        <Picker style={{color: 'grey'}} selectedValue={selectedValue} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
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

                        <HomeButton name={"Create An Account"} redirect={()=>props.navigation.navigate("Dashboard")}/>

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