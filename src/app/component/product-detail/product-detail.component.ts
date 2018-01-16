import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {resultCode} from "../../enum/resultCode";
import {Product} from "../../dto/Product";
import {Common} from "../../util/Common";
import {ProductService} from "../../service/product.service";
import {Comment} from "../../dto/Comment";

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

    private product: Product;

    private toggleComment = true;

    private commentContent: string;

    private commentRating: number = 0;

    constructor(private route: ActivatedRoute, private productService: ProductService) {
    }

    ngOnInit() {
        let productInfo = this.route.snapshot.data["product"];
        if (productInfo) {
            if (productInfo.code == resultCode.SUCCESS) {
                Common.info(productInfo);
                this.product = productInfo.data;
            } else {
                Common.error(productInfo);
            }
        } else {
            //TODO
        }
    }

    private toggleAddComment(): void {
        this.toggleComment = !this.toggleComment;
    }

    private addComment(): void {
        let comment: Comment = new Comment(
            this.product.pId,
            0,
            '匿名用户',
            this.commentContent,
            Common.curDate(),
            this.commentRating);
        this.productService.addComment(comment);
        this.refreshDetail(comment);
    }

    private refreshDetail(comment: Comment): void {
        this.product.comments.unshift(comment);
        this.commentContent = "";
        this.commentRating = 0;
        this.toggleComment = true;
    }

    private getCommentRating(rating) {
        console.log(rating);
        this.commentRating = rating;
    }

}
