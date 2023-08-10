import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { ControlInputComponent } from "./components/control-input/control-input.component";
import { ControlTextareaComponent } from "./components/control-textarea/control-textarea.component";
import { ControlSelectComponent } from "./components/control-select/control-select.component";
import { ControlCheckboxComponent } from "./components/control-checkbox/control-checkbox.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],

    declarations: [
        ControlInputComponent,
        ControlTextareaComponent,
        ControlSelectComponent,
        ControlCheckboxComponent,
    ],

    exports: [
        ControlInputComponent,
        ControlTextareaComponent,
        ControlSelectComponent,
        ControlCheckboxComponent,
    ],
})

export class ControlsModule {
    constructor() {
        // pass
    };
};