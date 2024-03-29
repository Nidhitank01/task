import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../Model/Employee.Model';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:Employee[],sortString:string):Employee[]|any  {
    let  SortList:Employee[]=[]

    if(!sortString || sortString==='reset'){
    }
    else{

     value.filter((emp,i)=>{
      if(emp.Position===sortString){
        value.unshift(emp)
        value.splice(i+1,1)
      }
     })
     return value
    }
  }

}
