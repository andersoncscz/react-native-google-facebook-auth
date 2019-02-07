import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity , Text, Image } from 'react-native';

import {
  LoginManager,
  AccessToken,
  GraphRequest, 
  GraphRequestManager
} from 'react-native-fbsdk';

const fbImageButton = require('../../Images/fbImageButton1.png');
const googleImageButton = require('../../Images/googleImageButton1.png');

export default class FBLoginButton extends Component {
    
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <View>
                <TouchableOpacity 
                    style={[styles.button, styles.fbButton]}
                    onPress={this.props.tryLogin}>
                        <Image
                            style={styles.imageButton}
                            source={fbImageButton} />                    
                        <Text style={styles.textButton}>SIGN IN WITH FACEBOOK</Text>
                </TouchableOpacity>                  

                <TouchableOpacity 
                    style={[styles.button, styles.googleButton]}
                    onPress={()=>alert('Not implemented yet.')}>
                        <Image
                            style={styles.imageButton}
                            source={googleImageButton} />                    
                        <Text style={styles.textButton}>SIGN IN WITH GOOGLE+</Text>
                </TouchableOpacity>  

            </View>            
        );
    }
}



const styles = StyleSheet.create({

    textButton: {
        flex: 1,
        color: '#fff',
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingRight: 28
    },

    imageButton: {
        width: 35,
        height: 35,
        alignSelf: 'flex-start',
        marginLeft: 5,
    },

    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
        margin: 5
    },    

    fbButton: {
        backgroundColor: '#3F51B5',
    },

    googleButton: {
        backgroundColor: '#F44336',
    }    
});

module.exports = FBLoginButton;