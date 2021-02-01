import React, { useState ,useEffect} from 'react';
import { Alert, View, StyleSheet, Image, Text, ScrollView, ImageBackground, Picker,FlatList } from 'react-native';
import HomeButton from '../reuse/Buttons';
import { TextInput, Appbar } from 'react-native-paper';
import { abs } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons'
import GlobalHead from '../screens/Header';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


function MyBloodRequestDashboard(props) {



    const [allbloodrequest, setallbloodrequest] = React.useState({});


      useEffect(async()=>{

        let jsonValue = await AsyncStorage.getItem('userauth')
        jsonValue = JSON.parse(jsonValue)
        console.log("id====>",jsonValue.data.id)
        axios.get(`http://bloodbankapp.pythonanywhere.com/requestBlood?id=${jsonValue.data.id}`)

        .then(response=>{

            console.log("data ",response.data)
            setallbloodrequest(response.data)
            
            
            
            
        })
        .catch(error => console.log('error', error));



        },[])

        console.log("data ",allbloodrequest)

    return (





        <View style={styles.container}>

        

            <GlobalHead arrowstatus={true} headTitle={"My Blood Request"} redirect={() => props.navigation.goBack()} />
         
            <ScrollView>
            <FlatList 
            data={allbloodrequest.data}
            
            renderItem={()=>{

                return <View style={{  padding: 15, width: "90%", alignSelf: 'center', marginTop: "5%", borderRadius: 15, borderColor: 'grey', borderWidth: .5 }}>
                <View style={{ padding: 5, flexDirection: "row" }}>
                    <View style={{ elevation: 10, height: 50, width: 50, backgroundColor: "#BF322D", borderRadius: 100 / 2, justifyContent: 'center' }}>

                        <Text style={{ color: "white", fontWeight: 'bold', textAlign: 'center', fontSize: 20 }}>O+</Text>
                    </View>

                    <View style={{ padding: 8 }}>

                        <Text style={{ fontWeight: "bold" }}>Mohammad Shakeeb</Text>
                    </View>
                </View>

                <View style={{ height: 1, width: "100%", backgroundColor: "silver", alignSelf: 'center', marginTop: 5, borderRadius: 5 }}></View>
                <View style={{ marginTop: 10, left: 15 }}>
                    <View style={{ flexDirection: 'row',paddingVertical:5 }}>
                        <Text style={{fontWeight:'bold'}}>Mobile</Text>
                        <Text style={{ marginStart: 20 ,fontWeight:'bold'}}>03482102017</Text>
                    </View>

                    <View style={{ flexDirection: 'row' ,paddingVertical:5,width:"100%" }}>
                        <Text style={{fontWeight:'bold',with:"30%"}}>Address</Text>
                        <Text style={{ marginStart: 20 , fontWeight:'bold',width:"70%"}} numberOfLines={2}>Nazimabad no#3 Goal market 10/1 Fatima manzil</Text>
                    </View>

                    <View style={{ flexDirection: 'row',paddingVertical:5 }}>
                        <Text style={{fontWeight:'bold'}}>Message</Text>
                        <Text style={{ marginStart: 20 , fontWeight:'bold' }}>Plz Donate Blood</Text>
                    </View>


                </View>

                <View style={{marginTop:15,alignItems:"center"}}>

                    <HomeButton name={"Donate"} redirect={() => props.navigation.navigate("Dashboard")} WIDTH={"90%"} HEIGHT={35}/>
                </View>



            </View>
            }}
            
            />

</ScrollView>
         
        </View>


    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,



    },
});
// BF322D
export default MyBloodRequestDashboard



