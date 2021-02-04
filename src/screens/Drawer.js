import React, { useState } from 'react';
import { Alert, View, StyleSheet, Image, ScrollView, ImageBackground, Picker, Dimensions } from 'react-native';
import HomeButton from '../reuse/Buttons';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';


const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

function SideDrawer(props) {

    const [cDarkTheme, setcDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setcDarkTheme(!cDarkTheme);
    }

    return (





        <View style={styles.container}>

            <DrawerContentScrollView>
                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 2 * vh }}>
                        <Avatar.Image size={50} source={require('../../images/demo.jpeg')} />

                        <View style={{ marginLeft: 15 }}>
                            <Title style={styles.title}>Shakeeb Anwar</Title>
                            <Caption style={styles.caption}>HnhTech</Caption>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>200</Paragraph>
                            <Caption style={styles.caption}>Following</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>1K</Paragraph>
                            <Caption style={styles.caption}>Followers</Caption>
                        </View>
                    </View>

                </View>

                {/* Drawer Section */}
                <Drawer.Section>

                    <DrawerItem
                        icon={() => (<Icon name="home-outline" style={{ fontSize: 2.8 * vh, color: 'grey' }}></Icon>)}
                        label="Home"
                        onPress={() => { props.navigation.navigate('home') }}

                    />

                    <DrawerItem
                        icon={() => (<Icon name="wallet-outline" style={{ fontSize: 2.8 * vh, color: 'grey' }}></Icon>)}
                        label="Profile"
                        onPress={() => { props.navigation.navigate('Wallet') }}

                    />

                  



                    <DrawerItem
                        icon={() => (<Icon name="key-outline" style={{ fontSize: 2.8 * vh, color: 'grey' }}></Icon>)}
                        label="Profile"
                        onPress={() => { props.navigation.navigate('Profile') }}

                    />

                    <DrawerItem
                        icon={() => (<Icon name="settings-outline" style={{ fontSize: 2.8 * vh, color: 'grey' }}></Icon>)}
                        label="Setting"
                        onPress={() => { props.navigation.navigate('Profile') }}

                    />


                </Drawer.Section>

                <Drawer.Section title="Choose Preferences">
                    <TouchableRipple onPress={() => { toggleTheme() }}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={cDarkTheme} />
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={() => (<Icon name="exit-outline" style={{ fontSize: 2.8 * vh, color: 'grey' }}></Icon>)}
                    label="Sign Out"
                    onPress={() => { signOut() }}
                />
            </Drawer.Section>
        </View>


    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,



    },
    userInfoSection: {
        paddingLeft: 3 * vh,
    },

    title: {
        fontSize: 3 * vh,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },

    row: {
        marginTop: 2 * vh,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 1 * vh
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 1.5 * vh,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 1 * vw,
    },
    drawerSection: {
        marginTop: 1.5 * vh,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },




});


export default SideDrawer

