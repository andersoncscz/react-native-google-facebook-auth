import React, { Component } from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

const PROFILE_PIC_DIMENSION = 400;
const urlProfilePicStart = 'https://graph.facebook.com/';
const urlProfilePicEnd = '/picture?type=large&redirect=true&width=' + PROFILE_PIC_DIMENSION + '&height=' + PROFILE_PIC_DIMENSION + '';

export default class Screens extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        const { name, email, id, user_birthday } = this.props.navigation.state.params.user;
        const userUrlProfilePicture = urlProfilePicStart + id + urlProfilePicEnd;
        return (
            <View style={styles.container}> 
                <Text style={styles.label}> { name } </Text>
                <Image
                    style={styles.avatarImage}
                    source={{uri: userUrlProfilePicture}} />
                <Text style={styles.label}> { email } </Text>
                <Text style={styles.label}> { user_birthday } </Text>
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