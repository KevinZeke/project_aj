import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from "../../dto/Product";
import {Result} from "../../dto/Result";
import {resultCode} from "../../enum/resultCode";
import {Common} from "../../util/Common";
import {ProductService} from "../../service/product.service";
import {FormControl} from '@angular/forms';
import "rxjs/Rx"
import {ModalService} from "../../service/modal.service";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    private products: Array<Product> = [];

    private keyWord: string = "";

    private titleFilter: FormControl = new FormControl();


    private toDetail(pId) {
        console.log(pId);
        this.router.navigate(['/detail', pId]);
    }

    constructor(private router: Router,
                private productService: ProductService,
                private modalService: ModalService) {
        this.titleFilter.valueChanges
            .debounceTime(500)
            .subscribe(value => this.keyWord = value);
        this.productService.searchEvent.subscribe(console.log);
    }

    private getList() {
        this.productService.getList()
            .subscribe((res: Result<Array<Product>>) => {
                    if (res.code != resultCode.SUCCESS) {
                        Common.error(res);
                    } else {
                        this.products = res.data;
                    }
                },
                (err) => {
                    console.log(err);
                    this.modalService.pop({title: "网络获取失败", message: "请检查您的网络设置"});
                })
    }

    ngOnInit() {
        this.getList();
    }

}

