import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: 'controls-checkbox',
    templateUrl: './control-checkbox.component.html',
    styleUrls: ['./control-checkbox.component.scss']
})

export class ControlCheckboxComponent {
    @Input() alias: string;
    @Input() control: FormControl<boolean | null>;

    constructor() {
        // pass
    };
};