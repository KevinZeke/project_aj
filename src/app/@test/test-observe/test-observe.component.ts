import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
    selector: 'app-test-observe',
    templateUrl: './test-observe.component.html',
    styleUrls: ['./test-observe.component.css']
})
export class TestObserveComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        let s = Observable.fromPromise(new Promise((resolve, reject) => {
            setTimeout(function () {
                try {
                    resolve('a');
                } catch (e) {
                    reject(e);
                }
            });
        }));
        s.subscribe({
            next(val) {
                console.log(val);
            },
            complete() {
                console.log(2);
            },
            error(e){
                console.log(e);
            }
        })
    }

}
