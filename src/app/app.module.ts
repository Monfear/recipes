import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";
import { InterfaceModule } from "./modules/interface/interface.module";

import { AppComponent } from './app.component';
import { NavbarComponent } from "./layout/navbar/navbar.component";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],

    imports: [
        BrowserModule,
        AppRoutingModule,

        InterfaceModule
    ],

    providers: [],

    bootstrap: [
        AppComponent
    ],
})

export class AppModule {};
