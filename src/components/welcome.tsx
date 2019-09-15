import React from 'react';
import {Text, View, Image, StyleProp, ImageStyle, TouchableHighlight, Alert } from 'react-native';
import WelcomeStyles from '../styles/welcomeStyles';
import { Category } from '../enums/category';
import WelcomeInterface from '../interfaces/WelcomeInterface';
import WelcomeState from '../states/WelcomeState';
import { PageView } from '../enums/pageView';

export default class Welcome extends React.Component <WelcomeInterface, WelcomeState>{


    onCategoryClick(category:Category){
       this.props.onChangeView(PageView.Products,category);
    }

    render() {

      return (
        <View  style={WelcomeStyles.body}>
           <Text style={WelcomeStyles.title}>T&B Stock</Text>
           <View style={WelcomeStyles.buttonsContainer}>
                <View style={WelcomeStyles.button}>
                    <TouchableHighlight onPress={() => { this.onCategoryClick(Category.Men); }} style={WelcomeStyles.buttonHighlight} underlayColor="#ddd">
                        <Text style={WelcomeStyles.buttonText}>Men</Text>
                    </TouchableHighlight>
                </View>
                <View style={WelcomeStyles.button}>
                    <TouchableHighlight onPress={() => { this.onCategoryClick(Category.Women); }} style={WelcomeStyles.buttonHighlight} underlayColor="#ddd">
                        <Text style={WelcomeStyles.buttonText}>Women</Text>
                    </TouchableHighlight>
                </View>
                <View style={WelcomeStyles.button}>
                    <TouchableHighlight onPress={() => { this.onCategoryClick(Category.Kids); }} style={WelcomeStyles.buttonHighlight} underlayColor="#ddd">
                        <Text style={WelcomeStyles.buttonText}>Kids</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
      );
    }
  }