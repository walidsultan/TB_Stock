import { PageView } from "../enums/pageView";
import { Category } from "../enums/category";

export default interface WelcomeInterface {
    onChangeView(pageView:PageView,category:Category):any;   
}