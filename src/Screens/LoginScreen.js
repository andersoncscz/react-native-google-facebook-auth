import React, { Component } from 'react';

import { View, StyleSheet, Text } from 'react-native';
import FBLoginButton from '../Components/Login/FBLoginButton';
import GoogleLoginButton from '../Components/Login/GoogleLoginButton';


/*
    FACEBOOK APIs:

    https://medium.com/reactbrasil/instalando-o-react-native-fbsdk-do-jeito-certo-9f0fada5be4
    https://developers.facebook.com/docs/react-native/getting-started
    https://developers.facebook.com/docs/graph-api/


    Google APIs:
    https://github.com/react-native-community/react-native-google-signin
*/

import { fbLoginManager, FACEBOOK } from '../Helpers/FacebookLoginHelper';
import { googleSignIn, GOOGLE } from '../Helpers/GoogleLoginHelper';





export default class LoginScreen extends Component {
    
    constructor(props) {
        super(props);
    }     



    tryLogin = socialNetwork => {
        switch (socialNetwork) {
            case GOOGLE:
                return this.loginWithGoogle;
            case FACEBOOK:
                return this.loginWithFacebook;

            default:
                return null;
        }
    }



    loginWithFacebook = () => {
        fbLoginManager().then(response => {
            if (response) {
                const userInfo = {...response, ...{ isLoggedWith: FACEBOOK } }
                this.navigateToHome(userInfo);    
            }
        })
    }



    loginWithGoogle = () => {
        googleSignIn().then(response => {
            if (response) {
                const userInfo = {...response, ...{ isLoggedWith: GOOGLE } }
                this.navigateToHome(userInfo);                    
            }
        })
    }



    navigateToHome = userLoggedIn => {
        const { navigation } = this.props;
        navigation.replace('Home', { userInfo: userLoggedIn });
    }



    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.label}>Login with Social Networks SDKs</Text>
                
                <FBLoginButton 
                   tryLogin={this.tryLogin(FACEBOOK)} />      

                <GoogleLoginButton
                    tryLogin={this.tryLogin(GOOGLE)} />
                   
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
        fontSize: 18,
        fontWeight: 'normal',
        marginBottom: 48,
        alignSelf: 'center',
        textAlign: 'center'
    },
});