import React from 'react';
import {Text, View, Image, StyleProp, ImageStyle, ScrollView, ActivityIndicator } from 'react-native';
import WelcomeStyles from '../styles/welcomeStyles';
import ProductsInterface from '../interfaces/ProductsInterface';
import ProductsState from '../states/ProductsState';
import { Department } from '../enums/department';
import productPreview from './productPreview';
import ProductPreview from './productPreview';
import ProductsStyles from '../styles/productsStyles';

export default class Products extends React.Component<ProductsInterface,ProductsState> {

        constructor(props: any) {
          super(props);

        this.state= new ProductsState();

        this.loadProducts();
      }


    getProductsTitle(department:Department){
      switch(department){
        case Department.Men:
          return "Men";
        case Department.Ladies:
          return "Women";
        case Department.Kids:
          return "Kids";
      }
    }

    getProductsSection(){

      let products=null;
       
        if( this.state && this.state.products){
            products = this.state.products.map((productInfo,i)=>(<ProductPreview  key={i} 
              product={productInfo}
              onChangeView= {(e,w)=>this.props.onChangeView(e,w)}
              ></ProductPreview> ) )
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
          
           <Text>Showing products for {this.getProductsTitle(this.props.productsDepartment)}</Text>

          {productView}

        </View>
      );
    }


      async loadProducts() {
        try {
            const response = await fetch('http://walidsultan.net/TBStockApi/api/Products/Department/' +this.props.productsDepartment, {
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