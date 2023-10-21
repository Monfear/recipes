import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

import { LogoComponent } from "./components/logo/logo.component";
import { ButtonComponent } from "./components/button/button.component";
import { HeadingComponent } from "./components/heading/heading.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { SubheadingComponent } from "./components/subheading/subheading.component";
import { HamburgerComponent } from "./components/hamburger/hamburger.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],

    declarations: [
        LogoComponent,
        ButtonComponent,
        HeadingComponent,
        SubheadingComponent,
        SpinnerComponent,
        HamburgerComponent,
    ],

    exports: [
        LogoComponent,
        ButtonComponent,
        HeadingComponent,
        SubheadingComponent,
        SpinnerComponent,
        HamburgerComponent,
    ],
})

export class InterfaceModule {
    constructor() {
        // pass
    };
};