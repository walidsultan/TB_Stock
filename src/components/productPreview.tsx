import React from 'react';
import {Text, View, Image, StyleProp, ImageStyle, ActivityIndicator, TouchableHighlight, Alert } from 'react-native';
import WelcomeStyles from '../styles/welcomeStyles';
import ProductPreviewInterface from '../interfaces/ProductPreviewInterface';
import ProductPreviewState from '../states/ProductPreviewState';
import ProductPreviewStyles from '../styles/productPreviewStyles';
import { PageView } from '../enums/pageView';
import ProductContract from '../contracts/productContract';

export default class ProductPreview extends React.Component<ProductPreviewInterface,ProductPreviewState> {

  constructor(props: any) {
    super(props);
 
    this.state=new ProductPreviewState();
  }

    render() {

      return (
        <View style={ProductPreviewStyles.productContainer} >
           <TouchableHighlight onPress={() => { this.onProductClick(); }} style={WelcomeStyles.buttonHighlight} underlayColor="#ddd">
            <Image  source={{uri:'http://walidsultan.net/tbstock_images/'+ this.props.product.DepartmentId +'/'+this.props.product.Code +'/'+ this.props.product.ImagePath}}
                      style={{ width: 175, height: 200 }}  ></Image>
          </TouchableHighlight>
          
          <View style={ProductPreviewStyles.priceAndCode}>
              <View>
                <Text>{this.props.product.Name}</Text>
                <View>
                <Text style={ProductPreviewStyles.price}>LE{this.props.product.Price} </Text>
                </View>
              </View>
          </View>
        </View>
      );
    }

    onProductClick(){
       let product= new ProductContract()
      this.props.onChangeView(PageView.ProductDetails,this.props.product)
    }
  }