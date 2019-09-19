import { Category } from "../enums/category";

export default class ProductContract  {
    Id:number=0;
    Name:string ='';
    Code:string ='';
    ImagePath:string ='';
    Price:number = 0;
    CategoryId: Category = Category.Men;
}