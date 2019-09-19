import React from 'react';
import {Text, View, Image, StyleProp, ImageStyle, ActivityIndicator } from 'react-native';
import WelcomeStyles from '../styles/welcomeStyles';
import ProductPreviewInterface from '../interfaces/ProductPreviewInterface';
import ProductPreviewState from '../states/ProductPreviewState';
import ProductPreviewStyles from '../styles/productPreviewStyles';

export default class ProductPreview extends React.Component<ProductPreviewInterface,ProductPreviewState> {

  constructor(props: any) {
    super(props);
 
    this.state=new ProductPreviewState();
  }

    render() {

      return (
        <View style={ProductPreviewStyles.productContainer} >
          <Image  source={{uri:'http://walidsultan.net/tbstock_images/'+ this.props.category +'/'+ this.props.imagePath}}
                     style={{ width: 175, height: 200 }}  ></Image>
          
          <View style={ProductPreviewStyles.priceAndCode}>
              <View>
                <Text>{this.props.name}</Text>
                <Text style={ProductPreviewStyles.price}>LE{this.props.price} </Text>
              </View>
              <Text style={ProductPreviewStyles.code}>{this.props.code} </Text>
          </View>
        </View>
      );
    }
  }