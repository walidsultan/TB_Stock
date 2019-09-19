import { Category } from "../enums/category";
import ProductContract from "../contracts/productContract";
import { PageView } from "../enums/pageView";

export default interface ProductsInterface {
    productsCategory:Category;
    onChangeView(pageView:PageView,product:ProductContract):any;   
}