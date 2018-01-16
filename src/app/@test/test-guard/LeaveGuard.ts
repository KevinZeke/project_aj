import {CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router"
import {TestHomeComponent} from "../test-home/test-home.component";

export class LeaveGuard implements CanDeactivate<TestHomeComponent> {
    canDeactivate() {
        return window.confirm("确定要离开吗");
    }

}