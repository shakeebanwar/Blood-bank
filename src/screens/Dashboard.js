import React, { useState } from 'react';
import { Alert, View, StyleSheet, Image, Text, ScrollView,ImageBackground } from 'react-native';
import HomeButton from '../reuse/Buttons';
import { TextInput,Appbar } from 'react-native-paper';
import { abs } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons'

function Dashboard(props) {


    const [text, setText] = React.useState('');

    return (





        <View style={styles.container}>
           
            <ImageBackground style={{ width:"100%",height:100 }} source={require('../../images/header2.png')} >
            <Icon name="chevron-back-outline" style={{color:'white',fontWeight:'bold',fontSize:30,position:"absolute",top:10,left:10}}/>
                <Text style={styles.headerheading}>Blood Request</Text>
            </ImageBackground>
            

            <View style={styles.mainViewRowDiv}>
                <View style={styles.mainViewRow}>

                    <View style={styles.Request}>
                        <Image style={{ width:100, height: 100 }} source={require('../../images/bloodrequest.png')} />
                    </View>
                    <View style={styles.Donor}>
                    <Image style={{ width: 110, height: 100 }} source={require('../../images/donorblood.png')} />

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
    headerheading:{
        textAlign:'center',color:"white",fontWeight:"bold",marginTop:20,fontSize:20
    }



});
// BF322D
export default Dashboard