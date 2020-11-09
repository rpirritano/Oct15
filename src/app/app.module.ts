import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import { StoreModule } from '../app/store/store.module';
import { AdminModule } from '../app/admin/admin.module';
import { CommonModule } from '@angular/common';
import { EcommerceService } from './common/services/ecommerce.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        //NgbModule,
        AdminModule,
        StoreModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [EcommerceService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
