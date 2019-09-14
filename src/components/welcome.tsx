import React from 'react';
import {Text, View, Image, StyleProp, ImageStyle } from 'react-native';
import WelcomeStyles from '../styles/welcomeStyles';

export default class Welcome extends React.Component {



    render() {

        let background: StyleProp<ImageStyle> = {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'stretch',
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            width: undefined,
            height: undefined
        }
        
      return (
        <View  style={WelcomeStyles.body}>
           <Image source={require('../../assets/images/21d1627b.png')} style={background} ></Image>
           <Text style={WelcomeStyles.title}>T&B Stock</Text>
           <View style={WelcomeStyles.buttonsContainer}>
            <View style={WelcomeStyles.button}>
                    <Text style={WelcomeStyles.buttonText}>Men</Text>
                </View>
                <View style={WelcomeStyles.button}>
                    <Text style={WelcomeStyles.buttonText}>Women</Text>
                </View>
                <View style={WelcomeStyles.button}>
                    <Text style={WelcomeStyles.buttonText}>Kids</Text>
                </View>
            </View>
        </View>
      );
    }
  }