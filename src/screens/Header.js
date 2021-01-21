import React, { Component } from 'react';
import { Alert, View, StyleSheet, Image, Text ,ImageBackground,TouchableOpacity} from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'


function GloabalHeader({arrowstatus,headTitle,redirect}) {
   

    return (

        
            
        <ImageBackground style={{ width:"100%",height:100, flexDirection: "row", justifyContent: "center" }} source={require('../../images/header2.png')} >
            {arrowstatus ? 
            <TouchableOpacity onPress={()=>redirect()} style={{position: "absolute", left: 15, top: 10}}>

            <Icon  name="chevron-back-outline" style={{color:'white',fontWeight:'bold',fontSize:30}}/>

            </TouchableOpacity>

                : null

            }
                <Text style={styles.headerheading}>{headTitle}</Text>
            </ImageBackground>

    )
}


const styles = StyleSheet.create({
    
    buttonDiv:{

        justifyContent: 'center',
        backgroundColor:'#BF322D',
        padding:"2%"
      
    },
    headerheading:{
        textAlign:'center',color:"white",fontWeight:"bold",marginTop:20,fontSize:20
    }
});




export default GloabalHeader;