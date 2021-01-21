import React, { Component } from 'react';
import { Alert, View, StyleSheet, Image, Text } from 'react-native';
import { Button } from 'react-native-paper';



function buttons({name,redirect}) {

    return (
        <Button  style={styles.buttonDiv}mode="contained" onPress={()=>redirect()}>
        {name}
      </Button>

    )
}


const styles = StyleSheet.create({
    
    buttonDiv:{

        justifyContent: 'center',
        backgroundColor:'#BF322D',
        padding:"2%"
      
    },
});




export default buttons;