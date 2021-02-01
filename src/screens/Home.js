import React, { useState } from 'react';
import { Alert, View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import HomeButton from '../reuse/Buttons';
import { TextInput } from 'react-native-paper';
import axios from 'axios';
import Loader from '../screens/loader';
import { connect } from 'react-redux';
import {set_data} from '../store/action'
import AsyncStorage from '@react-native-async-storage/async-storage';

function home(props) {


   
    const [username, setUsername] = React.useState('');
    const [password, setpassword] = React.useState('');
    const [loader, setLoader] = useState(false);
    

   

    const Login = ()=>{


        

    //    console.log("my global state is ",props.userauthdata)
        setLoader(true)
        var formdata = new FormData();
        formdata.append("Username", username);
        formdata.append("Password", password);
        formdata.append("Sender_ID", "dCCqEA1dRbyN_9YmWCRDDD:APA91bGpyATcY7d-IH2ksllRzmWuOWk7fn1HsHD71kQWdaPiYxqHYCsbbqKdVL1pjoSf4wRtzzgoctlf0d6LXwNbC03b3f7g__tW2GSKaBIzdAvYpbXf-07bMYzCq5XWVfCxqppacAGL");
        formdata.append("Device_type", "android");
        formdata.append("latitude", "24.721");
        formdata.append("longitude", "24.721");

      

        axios.post("http://bloodbankapp.pythonanywhere.com/Login",formdata)
        .then(async response=>{

            console.log("data ",response.data)
            
            if(response.data.status){
                setLoader(false)
                props.setdata(response.data)
                const userAuth = JSON.stringify(response.data)
                await AsyncStorage.setItem('userauth', userAuth)
                alert(response.data.message)
                props.navigation.navigate("Dashboard")
            }
            else{
                setLoader(false)
                alert(response.data.message)

            }
        })
        .catch(error => console.log('error', error));

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
                            label="User Name"
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
                            label="Password"
                            secureTextEntry={true}
                            value={password}

                            onChangeText={password => setpassword(password)}
                            theme={{
                                colors: {
                                    primary: "red"
                                }
                            }}
                        />

                    </View>


                    <View style={styles.ForgetView}>

                        <Text style={styles.bottomText}>Forget Password?</Text>



                    </View>


                    <View style={[styles.buttonDiv, { marginTop: 20 }]}>

                        <HomeButton name={"Login"} redirect={()=>Login()} buttonActiveStatus ={loader}/>

                    </View>


                    <View style={styles.bottomDiv}>

                        <Text style={styles.bottomText}>Do You have an Account?</Text>
                        <Text style={[styles.bottomText, { color: '#BF322D', opacity: 1, fontWeight: 'bold', marginStart: 5 }]} onPress={() => props.navigation.navigate("Register")}>Register</Text>


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
    bottomText: {

        fontSize: 12,
        opacity: 0.5,
        fontWeight: "bold"

    },
    bottomDiv: {

        flexDirection: 'row',
        justifyContent: 'center',
        bottom: 10,
        width: "100%",
        marginTop: 15


    },

    ForgetView: {

        flexDirection: 'row',
        justifyContent: 'center',
    }
});




const mapStateToProps=(state)=> ({

   
    userauthdata:state.app.userlogin
    
  })
  

const mapDispatchToProps = (dispatch)=> ({

        setdata : (data)=> dispatch(set_data(data))
    
  })
export default connect(mapStateToProps,mapDispatchToProps) (home)