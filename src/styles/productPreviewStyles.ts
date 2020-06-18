import { StyleSheet } from 'react-native';

const ProductPreviewStyles = StyleSheet.create({
    productContainer:{
       width:180,
      marginTop:10,
      marginBottom:10,
     // marginRight:20,
    },
    code:{
      borderWidth:1,
      alignSelf: 'flex-start',
      paddingLeft:5
    },
    price:{
       color:'#1c6311'
    },
    priceAndCode:{
      flexDirection:"row",
      justifyContent: 'space-between'
    }
 
});

export default ProductPreviewStyles;