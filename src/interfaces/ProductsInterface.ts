import { Department } from "../enums/department";
import ProductContract from "../contracts/productContract";
import { PageView } from "../enums/pageView";

export default interface ProductsInterface {
    productsDepartment:Department;
    onChangeView(pageView:PageView,product:ProductContract):any;   
}