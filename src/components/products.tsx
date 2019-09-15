import React from 'react';
import {Text, View, Image, StyleProp, ImageStyle } from 'react-native';
import WelcomeStyles from '../styles/welcomeStyles';
import ProductsInterface from '../interfaces/ProductsInterface';
import ProductsState from '../states/ProductsState';
import { Category } from '../enums/category';

export default class Products extends React.Component<ProductsInterface,ProductsState> {


    getProductsTitle(category:Category){
      switch(category){
        case Category.Men:
          return "Men";
        case Category.Women:
          return "Women";
        case Category.Kids:
          return "Kids";
      }
    }

    render() {

      return (
        <View  style={WelcomeStyles.body}>
          
           <Text>Showing products for {this.getProductsTitle(this.props.productsCategory)}</Text>
        </View>
      );
    }
  }