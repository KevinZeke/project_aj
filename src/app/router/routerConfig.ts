import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {TestHomeComponent} from "../@test/test-home/test-home.component";
import {TestProductComponent} from "../@test/test-product/test-product.component";
import {Code404Component} from "../component/code404/code404.component";
import {TestProductDescComponent} from "../@test/test-product-desc/test-product-desc.component";
import {TestSellerInfoComponent} from "../@test/test-seller-info/test-seller-info.component";
import {TestAuxChatComponent} from "../@test/test-aux-chat/test-aux-chat.component";
import {LoginGuard} from "../@test/test-guard/LoginGuard";
import {LeaveGuard} from "../@test/test-guard/LeaveGuard";
import {ResolveGuard} from "../@test/test-guard/ResolveGuard";
import {ProductDetailComponent} from "../component/product-detail/product-detail.component";
import {HomeComponent} from "../component/home/home.component";
import {ProductDetailGuard} from "../guard/ProductDetailGuard";


const TEST_ROUTES: Routes = [
    {path: '', redirectTo: '/home', pathMatch: "full"},
    {path: 'home', component: HomeComponent},
    {
        path: 'detail/:pId',
        component: ProductDetailComponent,
        resolve: {product: ProductDetailGuard}
    },
    {path: '**', component: Code404Component}
    /*测试路由*/
    /*
        {path: 'home', component: TestHomeComponent},
    {
        path: 'testProduct/:productId',
        component: TestProductComponent,
        children: [
            {path: '', component: TestProductDescComponent},
            {path: 'auxChat', component: TestAuxChatComponent, outlet: 'aux'},
            {path: 'seller/:sellerId', component: TestSellerInfoComponent}
        ]
    },
    {
        path: 'can',
        component: TestHomeComponent,
        outlet: 'test-guard',
        // canActivate: [LoginGuard],
        resolve: {productPromise: ResolveGuard}
    },
    {path: 'de', component: TestHomeComponent, outlet: 'test-guard', canDeactivate: [LeaveGuard]},
    */
];

@NgModule({
    imports: [RouterModule.forRoot(TEST_ROUTES)],
    exports: [RouterModule],
    providers: [
        ProductDetailGuard
        /*LoginGuard,
        LeaveGuard,
        ResolveGuard*/
    ]
})

export class AppRoutingModule {
}