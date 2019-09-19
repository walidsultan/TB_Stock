import { PageView } from "../enums/pageView";
import { Category } from "../enums/category";
import ProductContract from "../contracts/productContract";

export default class RouterState {
    pageView: PageView = PageView.Welcome;
    category:Category= Category.Men;
    productDetails:ProductContract= new ProductContract();
}