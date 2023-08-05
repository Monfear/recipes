import { Component, Input } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
    selector: 'interface-form-control',
    templateUrl: './form-control.component.html',
    styleUrls: ['./form-control.component.scss']
})

export class FormControlComponent {
    @Input() control: FormControl<string | null> | FormControl<string[] | null>;
    @Input() alias: string;

    constructor() {
        // pass
    };

    ngOnInit() {
        // console.log(this.control);
    }
};