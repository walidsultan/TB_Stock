import { PageView } from "../enums/pageView";
import { Department } from "../enums/department";
import ProductContract from "../contracts/productContract";

export default class RouterState {
    pageView: PageView = PageView.Welcome;
    department:Department= Department.Men;
    productDetails:ProductContract= new ProductContract();
}