import {Component, OnInit} from '@angular/core';
import {Response, Http} from '@angular/http';
import {Observable} from 'rxjs'
import {ProductService} from "../../service/product.service";
import 'rxjs/Rx';
import {WebSocketService} from "../../service/web-socket.service";
import ConstVariable from "../../const/ConstVariable";

@Component({
    selector: 'app-test-http',
    templateUrl: './test-http.component.html',
    styleUrls: ['./test-http.component.css'],
    providers: [WebSocketService]
})
export class TestHttpComponent implements OnInit {

    private dataSource: Observable<Response>;

    constructor(private pro: ProductService, private http: Http, private ws: WebSocketService) {
        this.dataSource = http.get(ConstVariable.PRODUCT_LIST).map(response => response.json())
        this.dataSource.subscribe(response => console.log(response));
    }

    ngOnInit() {
        this.ws.createObservableSocket("ws://localhost:8081")
            .subscribe(
                value => console.log(value),
                err => console.log(err),
                () => console.log("end")
            );
    }

    public send() {
        this.ws.sendMessage("hello form javascript, dude");
    }

}
