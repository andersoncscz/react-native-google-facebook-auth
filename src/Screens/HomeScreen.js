import React, { Component } from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';
import { FACEBOOK } from '../Helpers/FacebookLoginHelper';
import { GOOGLE } from '../Helpers/GoogleLoginHelper';

const PROFILE_PIC_DIMENSION = 400;
const urlProfilePicStart = 'https://graph.facebook.com/';
const urlProfilePicEnd = '/picture?type=large&redirect=true&width=' + PROFILE_PIC_DIMENSION + '&height=' + PROFILE_PIC_DIMENSION + '';

export default class Screens extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        let user = {
            id: null,
            name: null,
            email: null,
            user_birthday: null,
            userUrlProfilePicture: null
        };

        const { userInfo } = this.props.navigation.state.params;
        const { isLoggedWith } = userInfo;

        if (isLoggedWith === FACEBOOK) {
            user.id = userInfo.id;
            user.name = userInfo.name;
            user.email = userInfo.email;
            user.userUrlProfilePicture = urlProfilePicStart + userInfo.id + urlProfilePicEnd;
        }
        
        if (isLoggedWith === GOOGLE) {
            user.id = userInfo.user.id;
            user.name = userInfo.user.name;
            user.email = userInfo.user.email;
            user.userUrlProfilePicture = userInfo.user.photo;        
        }
            


        return (
            <View style={styles.container}> 
                <Text style={styles.label}> { user.name } </Text>
                <Image
                    style={styles.avatarImage}
                    source={{uri: user.userUrlProfilePicture}} />
                <Text style={styles.label}> { user.email } </Text>
                <Text style={styles.label}> { user.user_birthday } </Text>
            </View>
        );
    }
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
    },

    label: {
        fontWeight: 'bold',
        fontSize: 18,
        padding: 20
    },

    avatarImage: {
        height: 90,
        borderRadius: 100,
        aspectRatio: 1,
    },    

});