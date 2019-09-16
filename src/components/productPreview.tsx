import React from 'react';
import {Text, View, Image, StyleProp, ImageStyle } from 'react-native';
import WelcomeStyles from '../styles/welcomeStyles';
import ProductsInterface from '../interfaces/ProductsInterface';
import ProductsState from '../states/ProductsState';
import { Category } from '../enums/category';
import ProductPreviewInterface from '../interfaces/ProductPreviewInterface';
import ProductPreviewState from '../states/ProductPreviewState';
import ProductPreviewStyles from '../styles/productPreviewStyles';

export default class ProductPreview extends React.Component<ProductPreviewInterface,ProductPreviewState> {

    render() {
      return (
        <View style={ProductPreviewStyles.productContainer} >
          <Text>{this.props.name}</Text>
        </View>
      );
    }
  }