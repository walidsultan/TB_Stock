import { PageView } from "../enums/pageView";
import { Department } from "../enums/department";

export default interface WelcomeInterface {
    onChangeView(pageView:PageView,department:Department):any;   
}