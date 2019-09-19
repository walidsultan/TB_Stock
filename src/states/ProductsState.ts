import ProductContract from "../contracts/productContract";
export default class ProductsState {
    products:ProductContract[] = [];
    isLoading:boolean= true;
}