import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
const fbImageButton = require('../../Images/fbImageButton1.png');

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
            </View>            
        );
    }
}

module.exports = FBLoginButton;