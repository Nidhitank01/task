import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../Model/Employee.Model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:Employee[],sortString:string):any {
    const SortList:Employee[]=[]
    if(!sortString){
      return value
    }
    else{
      for(const emp of value){
        if(emp.Position.includes(sortString)){
            SortList.push(emp)
        }
        else{
          alert(sortString+' Position is not found')
          return value
        }
      }
      return SortList
    }
  }

}
