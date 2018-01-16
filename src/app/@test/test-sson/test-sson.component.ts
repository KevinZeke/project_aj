import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-test-sson',
    templateUrl: './test-sson.component.html',
    styleUrls: ['./test-sson.component.css']
})
export class TestSsonComponent implements OnInit {

    @Input()
    private brotherInfo: any;

    constructor() {
    }

    ngOnInit() {
    }

}
