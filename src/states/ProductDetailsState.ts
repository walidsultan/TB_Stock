import ProductDetailContract from "../contracts/productDetailContract";


export default class ProductDetailsState {
    productDetails:ProductDetailContract[] = [];
    isLoading:boolean= true;
    displayedImagePath:string='';
}