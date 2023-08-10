import { Component, Input } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
    selector: 'interface-form-control-input',
    templateUrl: './form-control-input.component.html',
    styleUrls: ['./form-control-input.component.scss']
})

export class FormControlInputComponent {
    @Input() alias: string;
    @Input() control: FormControl<string | null>;

    constructor() {
        // pass
    };

    ngOnInit() {
        // console.log(this.control);
    }
};