import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { LogoComponent } from "./components/logo/logo.component";
import { ButtonComponent } from "./components/button/button.component";

@NgModule({
    imports: [
        CommonModule
    ],

    declarations: [
        LogoComponent,
        ButtonComponent
    ],

    exports: [
        LogoComponent,
        ButtonComponent
    ],
})

export class InterfaceModule {
    constructor() {
        // pass
    };
};