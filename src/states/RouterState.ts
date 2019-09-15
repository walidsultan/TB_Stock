import { PageView } from "../enums/pageView";
import { Category } from "../enums/category";

export default class RouterState {
    pageView: PageView = PageView.Welcome;
    category:Category= Category.Men;
}