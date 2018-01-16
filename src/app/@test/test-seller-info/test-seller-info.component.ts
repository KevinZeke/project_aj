import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
    selector: 'app-test-seller-info',
    templateUrl: './test-seller-info.component.html',
    styleUrls: ['./test-seller-info.component.css']
})
export class TestSellerInfoComponent implements OnInit {

    private sellerId: number;

    constructor(private router: ActivatedRoute) {
    }

    ngOnInit() {
        this.sellerId = this.router.snapshot.params.sellerId;
    }

}
