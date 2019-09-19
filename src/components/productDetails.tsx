import React from 'react';
import {Text, View, Image, StyleProp, ImageStyle, ActivityIndicator } from 'react-native';
import ProductDetailsInterface from '../interfaces/ProductDetailsInterface';
import ProductDetailsState from '../states/ProductDetailsState';
import ProductDetailsStyles from '../styles/ProductDetailsStyles';

export default class ProductDetails extends React.Component<ProductDetailsInterface,ProductDetailsState> {

  constructor(props: any) {
    super(props);
 
    this.state=new ProductDetailsState();
  }

    render() {

      return (
        <View style={ProductDetailsStyles.container} >
          <Text>{this.props.product.Name}</Text>
        </View>
      );
    }
  }