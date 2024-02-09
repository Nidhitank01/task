import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../Model/Employee.Model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:Employee[],search:string):Employee[]|any {
   
    const searchEmployee:Employee[]=[]
    if(!search){
      return value
    }
    else{
      for(let emp of value){
        if(emp.EmployeeName.includes(search)){
          searchEmployee.push(emp)
        }
      }
      return searchEmployee

    }
  }

}
