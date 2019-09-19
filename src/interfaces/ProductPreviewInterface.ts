import { Category } from "../enums/category";
import { PageView } from "../enums/pageView";
import ProductContract from "../contracts/productContract";

export default interface ProductPreviewInterface {
    // name:string;
    // category:Category;
    // imagePath:string;
    // price:number;
    // code:string;

    product:ProductContract;
    onChangeView(pageView:PageView,product:ProductContract):any;  
}