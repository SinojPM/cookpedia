import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(allrecipes:any[],searchKey:string): any[] {
    const result:any = []
    
    if(!allrecipes || searchKey==""){
      return allrecipes
    }
    allrecipes.forEach(item=>{
      if(item.name.toLowerCase().includes(searchKey.toLowerCase()))
        result.push(item)
    })


    return result;
  }

}
