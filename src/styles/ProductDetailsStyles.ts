import { StyleSheet } from 'react-native';

const ProductDetailsStyles = StyleSheet.create({
  container:{
    padding:10
  },
  name:{
    fontSize:25
  },
  priceAndCode:{
    flexDirection:"row",
    justifyContent: 'space-between'
  },
  price:{
    color:'#1c6311',
    fontSize:20
  },
  code:{
    borderWidth:1,
    alignSelf: 'flex-end',
    paddingLeft:5,
    paddingTop:2,
    marginRight:5
  },
  thumbnailsContainer:{
    flexDirection:'row'

  },
  thumbnailsActivityLoaderContainer:{
    
  },
  thumbnailsActivityLoader:{
    
  },
  thumbnailImage:{
     width: 42, 
     height: 48 
  },
  thumbnailHighlight:{
     width: 44, 
     height: 50 ,
     marginRight:10,
     marginTop:10,
     borderWidth:1,
     borderColor:'#000'
  }
});

export default ProductDetailsStyles;