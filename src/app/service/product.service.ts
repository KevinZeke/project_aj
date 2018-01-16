import {Injectable,EventEmitter} from '@angular/core';
import {Http} from '@angular/http';
import {Result} from "../dto/Result";
import {Comment} from "../dto/Comment";
import {Observable} from "rxjs";
import ConstVariable from "../const/ConstVariable";
import "rxjs/Rx";

@Injectable()
export class ProductService {

    public searchEvent:EventEmitter<any> = new EventEmitter();

    constructor(private http: Http) {
    }

    private apiGet(url: string, options: object = null): Observable<Result<any>> {
        return this.http.get(url, options).map(response => response.json())
    }

    public getList(url: string = ConstVariable.PRODUCT_LIST): Observable<Result<any>> {
        return this.apiGet(url);
    }

    public getById(options = null, url: string = ConstVariable.PRODUCT_DETAIL): Observable<Result<any>> {
        return this.apiGet(url, options);
    }

    public addComment(comment: Comment): Promise<Result<any>> {
        /*console.log(comment);
        return new Promise((resolve, reject) => {

        });*/
        return null;
    }

    public getCategories(url: string = ConstVariable.CATEGORIES): Observable<Result<any>> {
        return this.apiGet(url);
    }
}
