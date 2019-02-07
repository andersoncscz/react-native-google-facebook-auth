import React, { Component } from 'react';

import { View, StyleSheet, Text } from 'react-native';
import FBLoginButton from '../Components/Login/FBLoginButton';

/*
    https://medium.com/reactbrasil/instalando-o-react-native-fbsdk-do-jeito-certo-9f0fada5be4
    https://developers.facebook.com/docs/react-native/getting-started
*/

import {
    LoginManager,
    AccessToken,
    GraphRequest, 
    GraphRequestManager
  } from 'react-native-fbsdk';

export default class LoginScreen extends Component {
    
    constructor(props) {
        super(props);
    }    
    


    fbLoginManager = () => {

        LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_birthday']).then(
            result => {
                if (result.isCancelled) {
                    alert('Login was cancelled');
                } 
                else {
                    AccessToken.getCurrentAccessToken().then(data => {
                        this.getFacebookUserInformation(data).then(
                            response => {
                                if (response)
                                    this.props.navigation.replace('Home', { user: response })
                            }).catch(error => {
                                console.log(error)
                            })
                        }
                    )                    
                }
            },
            error => {
                alert('Login failed with error: ' + error);
            }
        );         
    }



    getFacebookUserInformation = data => {
        
        const { accessToken } = data;
        const graphConfig = {
            accessToken,
            parameters: {
                fields: {
                    string: 'email, name, first_name, middle_name, last_name, picture'
                }
            }            
        }

        return new Promise((resolve, reject) => {

            const infoRequest = new GraphRequest(
                '/me', 
                graphConfig, 
                ((error, result) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(result)
                    }
                })
            )
            new GraphRequestManager().addRequest(infoRequest).start();
        })
    }    



    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Login with Social Networks SDKs</Text>
                <FBLoginButton 
                   tryLogin={this.fbLoginManager} />
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