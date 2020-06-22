import { Department } from "../enums/department";

export default class ProductContract  {
    Id:number=0;
    Name:string ='';
    Code:string ='';
    ImagePath:string ='';
    Price:number = 0;
    DepartmentId: Department = Department.Men;
}