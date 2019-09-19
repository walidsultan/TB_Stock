import React from 'react';
import {Text, View, Image, StyleProp, ImageStyle, ScrollView, ActivityIndicator } from 'react-native';
import WelcomeStyles from '../styles/welcomeStyles';
import ProductsInterface from '../interfaces/ProductsInterface';
import ProductsState from '../states/ProductsState';
import { Category } from '../enums/category';
import productPreview from './productPreview';
import ProductPreview from './productPreview';
import ProductsStyles from '../styles/productsStyles';

export default class Products extends React.Component<ProductsInterface,ProductsState> {

        constructor(props: any) {
          super(props);

        this.state= new ProductsState();

        this.loadProducts();
      }


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

    getProductsSection(){

      let products=null;
       
        if( this.state && this.state.products){
            products = this.state.products.map((productInfo,i)=>(<ProductPreview  key={i} 
              name={productInfo.Name} 
              category={this.props.productsCategory} 
              imagePath={productInfo.ImagePath} 
              price={productInfo.Price} 
              code={productInfo.Code} ></ProductPreview> ) )
        }
      return products;
    }

    getProductsView(){
      if(this.state.isLoading){
        return <View style={ProductsStyles.activityLoaderContainer}>
                <ActivityIndicator size="large" color='#1341ad' style={ProductsStyles.activityLoader}></ActivityIndicator>
            </View>
      }else
      {
          return <ScrollView >
                  <View style={ProductsStyles.productsContainer}>
                    {this.getProductsSection()}
                </View>
                </ScrollView>
      }

    }

    render() {

      let productView= this.getProductsView();
      return (
        <View  style={WelcomeStyles.body}>
          
           <Text>Showing products for {this.getProductsTitle(this.props.productsCategory)}</Text>

          {productView}

        </View>
      );
    }


      async loadProducts() {
        try {
            const response = await fetch('http://walidsultan.net/TBStockApi/api/Products/Category/' +this.props.productsCategory, {
                method: 'GET'
            });
            const products = await response.json();
            let newState = Object.assign(this.state, { products: products, isLoading:false});
            this.setState(newState);
        }
        catch (error) {
            console.error(error);
        }
    }
  }