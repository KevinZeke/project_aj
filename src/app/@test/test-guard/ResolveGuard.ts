import {Resolve} from "@angular/router"
import {Product} from "../../dto/Product";
import {Result} from "../../dto/Result";

export class ResolveGuard implements Resolve<Result<Array<Product>>> {
    resolve(): any {
    }
}