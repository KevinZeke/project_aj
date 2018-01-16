import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
    selector: 'app-test-product',
    templateUrl: './test-product.component.html',
    styleUrls: ['./test-product.component.css']
})
export class TestProductComponent implements OnInit {

    private snapshotProductId: number;

    private subscribeProductId: number;

    constructor(private router: ActivatedRoute) {
    }

    ngOnInit() {
        this.snapshotProductId = this.router.snapshot.params['productId'];
        this.router.params.subscribe(param => this.subscribeProductId = param.productId);
    }

}
