import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-test-son',
    templateUrl: './test-son.component.html',
    styleUrls: ['./test-son.component.css']
})
export class TestSonComponent implements OnInit {

    @Input()
    private fromFather: any;

    @Output()
    private toFather: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    private sendToFather(){
        this.toFather.emit(10086);
    }

    ngOnInit() {

    }

}
