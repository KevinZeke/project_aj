import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http'
import {AppRoutingModule} from './router/routerConfig';
import {AppComponent} from './app.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {FooterComponent} from './component/footer/footer.component';
import {SearchComponent} from './component/search/search.component';
import {CarouselComponent} from './component/carousel/carousel.component';
import {ProductsComponent} from './component/products/products.component';
import {StarsComponent} from './component/stars/stars.component';
import {Code404Component} from './component/code404/code404.component';
import {ProductDetailComponent} from './component/product-detail/product-detail.component';
import {HomeComponent} from './component/home/home.component';
import {ProductService} from "./service/product.service";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {FilterPipe} from './pipe/filter.pipe';
import {ModalComponent} from './component/modal/modal.component';
import {ModalService} from "./service/modal.service";
import {FormWarningComponent} from './component/form-warning/form-warning.component';
// import {TestHomeComponent} from './@test/test-home/test-home.component';
// import {TestProductComponent} from './@test/test-product/test-product.component';
// import {TestProductDescComponent} from './@test/test-product-desc/test-product-desc.component';
// import {TestSellerInfoComponent} from './@test/test-seller-info/test-seller-info.component';
// import {TestAuxChatComponent} from './@test/test-aux-chat/test-aux-chat.component';
// import { TestFatherComponent } from './@test/test-father/test-father.component';
// import { TestSonComponent } from './@test/test-son/test-son.component';
// import { TestSsonComponent } from './@test/test-sson/test-sson.component';
// import { TestLifeComponent } from './@test/test-life/test-life.component';
// import { TestLife2Component } from './@test/test-life-2/test-life-2.component';
// import { TestTemplateFormComponent } from './@test/test-template-form/test-template-form.component';
// import { TestReactiveFormComponent } from './@test/test-reactive-form/test-reactive-form.component';
// import { TestObserveComponent } from './@test/test-observe/test-observe.component';
// import { TestHttpComponent } from './@test/test-http/test-http.component'


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        SearchComponent,
        CarouselComponent,
        ProductsComponent,
        StarsComponent,
        Code404Component,
        ProductDetailComponent,
        HomeComponent,
        FilterPipe,
        ModalComponent,
        FormWarningComponent,
        // TestHomeComponent,
        // TestProductComponent,
        // TestProductDescComponent,
        // TestSellerInfoComponent,
        // TestAuxChatComponent,
        // TestFatherComponent,
        // TestSonComponent,
        // TestSsonComponent,
        // TestLifeComponent,
        // TestLife2Component,
        // TestTemplateFormComponent,
        // TestReactiveFormComponent,
        // TestObserveComponent,
        // TestHttpComponent
    ],
    imports: [
        BrowserModule, AppRoutingModule, BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [
        ProductService, ModalService
    ],
    bootstrap: [AppComponent]
})


export class AppModule {
}
