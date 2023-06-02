import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allBooks:any[],searchKey:string,propertyName:string): any[] {

    const result:any=[]
    if(!allBooks || searchKey=="" || propertyName==""){
      return allBooks
    }
    allBooks.forEach((item:any)=>
    {
      if(item[propertyName].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }
    })
    return result;
  }

}
