import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {resultCode} from "../../enum/resultCode";
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms"
import {FormErrorHandleService} from "../../service/form-error-handle.service";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    providers: [FormErrorHandleService]
})
export class SearchComponent implements OnInit {

    private categories = [];

    private searchForm: FormGroup;

    private date: string = new Date().toDateString();

    constructor(private productService: ProductService,
                private formBuilder: FormBuilder,
                private formErrorHandle: FormErrorHandleService) {
        this.getCategories(productService);
        this.initFormModel(formBuilder);
    }

    public titleValidator(titleCtrl: FormControl) {
        return null;
    }

    private initFormModel(formBuilder: FormBuilder): void {
        this.searchForm = formBuilder.group({
            productPrice: [0, [Validators.required, Validators.min(0)]],
            productTitle: ['', [Validators.required, Validators.minLength(2)]],
            productCategory: ['', [Validators.required]]
        })
    }

    private getCategories(productService: ProductService): void {
        productService.getCategories().subscribe(value => {
            if (value.code == resultCode.SUCCESS) {
                this.categories = value.data;
            } else {
                console.log(value.msg);
            }
        });
    }

    private onSubmit(): void {
        console.log(this.searchForm.valid)
        console.log(this.searchForm.get("productTitle").untouched)
        this.searchForm.get("productTitle").markAsTouched();
        console.log(this.searchForm.get("productTitle").touched)
        console.log(this.searchForm.get("productTitle").dirty)
        console.log(this.searchForm.get("productTitle").pristine)
        console.log(this.searchForm.getError('min', ['productPrice']));
        console.log(this.searchForm.getError('required', ['productTitle']));
        console.log(this.searchForm.hasError('required', ['productCategory']));
        console.log(this.searchForm.getError('minlength', ['productTitle']));
        this.productService.searchEvent.emit(this.searchForm.value);
    }

    ngOnInit() {
    }

}
