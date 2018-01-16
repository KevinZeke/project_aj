import {Pipe, PipeTransform} from '@angular/core';
import {Product} from "../dto/Product";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(products: Array<Product>, query: { key: string, value: any }): any {
        if (!query || !query.key) return products;
        return products.filter(product => product[query.key].indexOf(query.value) >= 0);
    }

}
