import { StyleSheet } from 'react-native';

const ProductsStyles = StyleSheet.create({
 productsContainer:{
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent:'space-between',
    paddingRight:5
 },
 activityLoader:{
  alignSelf:'center'
 },
 activityLoaderContainer:{
  flex:1,
  justifyContent:'center'
 }
});

export default ProductsStyles;