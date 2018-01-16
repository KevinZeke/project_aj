import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-stars',
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

    @Input()
    private rating: number = 0;

    @Output()
    private ratingChange: EventEmitter<number> = new EventEmitter();

    @Input()
    private control: boolean = false;

    private stars = new Array(5);

    constructor() {
    }

    private changeRating(curRating) {
        if (this.control) {
            this.rating = curRating;
            this.ratingChange.emit(this.rating);
        }
    }


    ngOnInit() {
    }

}
