import React, { useState } from 'react';
import { Alert, View, StyleSheet, Image, Text,ScrollView } from 'react-native';
import HomeButton from '../reuse/Buttons';
import { TextInput } from 'react-native-paper';


function home(props) {


    const [text, setText] = React.useState('');

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


<View style={styles.ForgetView}>

    <Text style={styles.bottomText}>Forget Password?</Text>



</View>


<View style={[styles.buttonDiv, {marginTop: 20}]}>

    <HomeButton name={"Login"} />

</View>


<View style={styles.bottomDiv}>

    <Text style={styles.bottomText}>Do You have an Account?</Text>
    <Text style={[styles.bottomText, { color: '#BF322D', opacity: 1, fontWeight: 'bold', marginStart: 5 }]} onPress={()=>props.navigation.navigate("Register")}>Register</Text>


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

        margin:10, 
        

    },
    bottomText: {

        fontSize: 12,
        opacity: 0.5,
        fontWeight:"bold"

    },
    bottomDiv: {

        flexDirection: 'row',
        justifyContent: 'center',
        bottom: 10,
        width: "100%",
        marginTop:15


    },

    ForgetView:{

        flexDirection: 'row',
        justifyContent: 'center',
    }
});
// BF322D
export default home