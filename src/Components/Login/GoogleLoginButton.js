import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
const googleImageButton = require('../../Images/googleImageButton1.png');

export default class GoogleLoginButton extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <View>
                <TouchableOpacity 
                    style={[styles.button, styles.googleButton]}
                    onPress={this.props.tryLogin}>
                        <Image
                            style={styles.imageButton}
                            source={googleImageButton} />                    
                        <Text style={styles.textButton}>SIGN IN WITH GOOGLE+</Text>
                </TouchableOpacity>                
            </View>
        )
    }
}
