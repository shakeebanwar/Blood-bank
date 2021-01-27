import React, { useState } from 'react';
import { Alert, View, StyleSheet, Image, Text, ScrollView,ImageBackground, TouchableOpacity } from 'react-native';
import HomeButton from '../reuse/Buttons';
import { TextInput,Appbar } from 'react-native-paper';
import { abs } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons'
import GlobalHead from '../screens/Header';

function Dashboard(props) {


    const [text, setText] = React.useState('');

    return (





        <View style={styles.container}>
           
            <GlobalHead arrowstatus={false} headTitle={"Blood Request"} redirect={()=>props.navigation.goBack()}/>
            

            <View style={styles.mainViewRowDiv}>
                <View style={styles.mainViewRow}>


                    <View style={styles.Request}>
                    <TouchableOpacity onPress={()=>props.navigation.navigate("BloodRequest")}>
                        <Image  style={{ width:100, height: 100 }} source={require('../../images/bloodrequest.png')} />
                    </TouchableOpacity>
                    </View>
                    
                    <View style={styles.Donor}>
                    <TouchableOpacity onPress={()=>props.navigation.navigate("BloodRequest")}>
                    <Image style={{ width: 110, height: 100 }} source={require('../../images/donorblood.png')} />
                    </TouchableOpacity>
                    </View>



                </View>
            </View>


            <View style={styles.mainView}>
                <Image
                    style={styles.mainImage}
                    source={require('../../images/home1.png')} />



            </View>





        </View>








    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,



    },
    mainImage: {


        height: 280,
        width: 220,
      
    },
    mainViewRow: {
        width: "100%",
        flexDirection: 'row',
       justifyContent:"space-around"
   
       


    },
    mainViewRowDiv: {

       
        marginTop:"10%",
        padding:15


    },
    mainView: {

        alignSelf: 'center',
        position:"absolute",
        bottom:0
        // height:"50%"


    },
    Request:{

        width:"45%",
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:4,
        elevation:1,
        height:150,
        justifyContent:'center'

        
    },
    Donor:{

        width:"45%",
        alignItems:'center',
        borderRadius:4,
        backgroundColor:'white',
        elevation:1,
        justifyContent:'center',
        height:150,

        
    },
    



});
// BF322D
export default Dashboard