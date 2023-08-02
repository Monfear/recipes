import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { LogoComponent } from "./components/logo/logo.component";
import { ButtonComponent } from "./components/button/button.component";
import { HeadingComponent } from "./components/heading/heading.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";

@NgModule({
    imports: [
        CommonModule
    ],

    declarations: [
        LogoComponent,
        ButtonComponent,
        HeadingComponent,
        SpinnerComponent,
    ],

    exports: [
        LogoComponent,
        ButtonComponent,
        HeadingComponent,
        SpinnerComponent,
    ],
})

export class InterfaceModule {
    constructor() {
        // pass
    };
};