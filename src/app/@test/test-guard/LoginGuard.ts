import {CanActivate} from "@angular/router"

export class LoginGuard implements CanActivate {
    canActivate() {
        console.log("未登录");
        return false;
    }

}