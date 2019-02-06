import React, { Component } from 'react';

import { View, StyleSheet, Text } from 'react-native';
import FBLoginButton from './Components/Login/FBLoginButton';

/*
    https://medium.com/reactbrasil/instalando-o-react-native-fbsdk-do-jeito-certo-9f0fada5be4
    https://developers.facebook.com/docs/react-native/getting-started
*/

export default class FacebookLoginApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Login with Social Networks SDKs</Text>
                <FBLoginButton />
            </View>
        )
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column', 
        justifyContent: 'center', 
        padding: 18,
        backgroundColor: '#F5FCFF',
    },

    label: {
        fontSize: 28,
        fontWeight: 'normal',
        marginBottom: 48,
        alignSelf: 'center',
        textAlign: 'center'
      },

});