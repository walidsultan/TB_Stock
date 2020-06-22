import { Department } from "../enums/department";
import { PageView } from "../enums/pageView";
import ProductContract from "../contracts/productContract";

export default interface ProductPreviewInterface {
    // name:string;
    // department:Department;
    // imagePath:string;
    // price:number;
    // code:string;

    product:ProductContract;
    onChangeView(pageView:PageView,product:ProductContract):any;  
}