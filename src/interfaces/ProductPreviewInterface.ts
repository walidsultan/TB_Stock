import { Category } from "../enums/category";

export default interface ProductPreviewInterface {
    name:string;
    category:Category;
    imagePath:string;
    price:number;
    code:string;
}