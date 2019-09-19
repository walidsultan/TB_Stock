import React from 'react';
import {Text, View, Image, StyleProp, ImageStyle, ActivityIndicator, Dimensions, ScaledSize, TouchableHighlight } from 'react-native';
import ProductDetailsInterface from '../interfaces/ProductDetailsInterface';
import ProductDetailsState from '../states/ProductDetailsState';
import ProductDetailsStyles from '../styles/ProductDetailsStyles';
import ProductDetailContract from '../contracts/productDetailContract';

export default class ProductDetails extends React.Component<ProductDetailsInterface,ProductDetailsState> {


  dimensions:ScaledSize;

  constructor(props: any) {
    super(props);
 
    this.state= {displayedImagePath: this.props.product.ImagePath, productDetails:[],isLoading:true};
    this.dimensions= Dimensions.get('window');

    this.loadProductDetails();
  }

    render() {

      let imageWidth= this.dimensions.width - 20;
      let imageHeight= imageWidth * 8/7;

      let thumbnailsView=  this.getThumbnailsView();

      return (
        <View style={ProductDetailsStyles.container} >
         <Image  source={{uri:'http://walidsultan.net/tbstock_images/'+ this.props.product.CategoryId +'/'+ this.props.product.Id +'/'+ this.state.displayedImagePath}}
                      style={{ width: imageWidth, height: imageHeight }}  ></Image>

          <View style={ProductDetailsStyles.priceAndCode}>
              <View>
              <Text style={ ProductDetailsStyles.name}>{this.props.product.Name}</Text>
                <Text style={ProductDetailsStyles.price}>LE{this.props.product.Price} </Text>
              </View>
              <Text style={ProductDetailsStyles.code}>{this.props.product.Code} </Text>
          </View>     

          <View style={ProductDetailsStyles.thumbnailsContainer}>
            {thumbnailsView}
          </View>                 
          
        </View>
      );
    }

    private getThumbnailsView(){
      if(this.state.isLoading){
        return <View style={ProductDetailsStyles.thumbnailsActivityLoaderContainer}>
                <ActivityIndicator size="large" color='#1341ad' style={ProductDetailsStyles.thumbnailsActivityLoader}></ActivityIndicator>
            </View>
      }else
      {
          return this.getThumbnailsSection()
      }
    }

    private getThumbnailsSection(){
      let thumbnails=null;
       
      if( this.state && this.state.productDetails && this.state.productDetails.length>0){
        thumbnails = this.state.productDetails.map((productDetail,i)=>(this.getThumbnailView(i, productDetail) ) );
        let mainImage:ProductDetailContract ={Id:0, ProductId: this.props.product.Id, ImagePath: this.props.product.ImagePath };
        thumbnails.push(this.getThumbnailView(-1,mainImage ));
      }
    return thumbnails;

    }

    private getThumbnailView(i: number, productDetail:ProductDetailContract): JSX.Element {
      return <TouchableHighlight onPress={() => { this.onThumbnailClick(productDetail.ImagePath); }}  underlayColor="#ddd" key={'th'+i} style={ProductDetailsStyles.thumbnailHighlight}>
                <Image key={i} source={{ uri: 'http://walidsultan.net/tbstock_images/' + this.props.product.CategoryId + '/' + this.props.product.Id + '/' + productDetail.ImagePath }} style={ProductDetailsStyles.thumbnailImage} ></Image>
             </TouchableHighlight>
    }

    private onThumbnailClick(imagePath:string){
        let newState = Object.assign(this.state, { displayedImagePath: imagePath});
        this.setState(newState);
    }

    async loadProductDetails(){
      try {
        const response = await fetch('http://walidsultan.net/TBStockApi/api/Products/Product/' +this.props.product.Id, {
            method: 'GET'
        });
        const productDetails = await response.json();
        let newState = Object.assign(this.state, { productDetails: productDetails, isLoading:false});
        this.setState(newState);
      }
      catch (error) {
          console.error(error);
      }
    }
  }