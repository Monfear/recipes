import { Component, Input } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
    selector: 'controls-input',
    templateUrl: './control-input.component.html',
    styleUrls: ['./control-input.component.scss']
})

export class ControlInputComponent {
    @Input() alias: string;
    @Input() control: FormControl<string | null>;

    constructor() {
        // pass
    };

    ngOnInit() {
        // console.log(this.control);
    }
};