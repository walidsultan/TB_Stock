import React from 'react';
import {Text, View, Image, StyleProp, ImageStyle, TouchableHighlight, Alert } from 'react-native';
import WelcomeStyles from '../styles/welcomeStyles';
import { Department } from '../enums/department';
import WelcomeInterface from '../interfaces/WelcomeInterface';
import WelcomeState from '../states/WelcomeState';
import { PageView } from '../enums/pageView';

export default class Welcome extends React.Component <WelcomeInterface, WelcomeState>{


    onDepartmentClick(department:Department){
       this.props.onChangeView(PageView.Products,department);
    }

    render() {

      return (
        <View  style={WelcomeStyles.body}>
           <Text style={WelcomeStyles.title}>T&B Stock</Text>
           <View style={WelcomeStyles.buttonsContainer}>
                <View style={WelcomeStyles.button}>
                    <TouchableHighlight onPress={() => { this.onDepartmentClick(Department.Men); }} style={WelcomeStyles.buttonHighlight} underlayColor="#ddd">
                        <Text style={WelcomeStyles.buttonText}>Men</Text>
                    </TouchableHighlight>
                </View>
                <View style={WelcomeStyles.button}>
                    <TouchableHighlight onPress={() => { this.onDepartmentClick(Department.Ladies); }} style={WelcomeStyles.buttonHighlight} underlayColor="#ddd">
                        <Text style={WelcomeStyles.buttonText}>Ladies</Text>
                    </TouchableHighlight>
                </View>
                <View style={WelcomeStyles.button}>
                    <TouchableHighlight onPress={() => { this.onDepartmentClick(Department.Kids); }} style={WelcomeStyles.buttonHighlight} underlayColor="#ddd">
                        <Text style={WelcomeStyles.buttonText}>Kids</Text>
                    </TouchableHighlight>
                </View>
                 <View style={WelcomeStyles.button}>
                    <TouchableHighlight onPress={() => { this.onDepartmentClick(Department.MensAccessories); }} style={WelcomeStyles.buttonHighlight} underlayColor="#ddd">
                        <Text style={WelcomeStyles.buttonText}>Accessories</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
      );
    }
  }