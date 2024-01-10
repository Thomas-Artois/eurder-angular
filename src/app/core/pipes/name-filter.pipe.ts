import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../model/Item";

@Pipe({
  name: 'nameFilter',
  standalone: true
})
export class NameFilterPipe implements PipeTransform {

  transform(items: Item[], filter: string): Item[]  {
    if (!items || !filter) {
      return items;
    }

    const filterString = filter.toLowerCase();
    return items.filter(item => item.name.toLowerCase().startsWith(filterString));
  }

}
