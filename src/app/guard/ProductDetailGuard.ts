import {ActivatedRouteSnapshot, Resolve, Router} from "@angular/router"
import {Injectable} from "@angular/core"
import {Result} from "../dto/Result";
import {Product} from "../dto/Product";
import {ProductService} from "../service/product.service";
import {Observable} from "rxjs";


@Injectable()
export class ProductDetailGuard implements Resolve<any> {

    constructor(private router: Router, private productService: ProductService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<Result<Product>> | Result<Product> {
        if (route.params["pId"]) {
            return this.productService.getById({
                params: {pId: route.params["pId"]}
            });
        } else {
            console.log("未获得商品参数{pId}");
            this.router.navigate(['/']);
            return null;
        }
    }

}
