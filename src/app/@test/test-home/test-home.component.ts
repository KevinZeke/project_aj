import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-test-home',
    templateUrl: './test-home.component.html',
    styleUrls: ['./test-home.component.css']
})
export class TestHomeComponent implements OnInit {

    private snapshotQueryInfo: object;
    private subscribeQueryInfo: object;

    constructor(private aRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.snapshotQueryInfo = this.aRoute.snapshot.queryParams;
        this.aRoute.queryParams.subscribe(query => this.subscribeQueryInfo = query);
        this.aRoute.data.subscribe(res => console.log(res));
    }

}
