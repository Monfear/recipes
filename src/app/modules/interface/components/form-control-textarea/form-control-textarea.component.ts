import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: 'interface-form-control-textarea',
    templateUrl: './form-control-textarea.component.html',
    styleUrls: ['./form-control-textarea.component.scss']
})

export class FormControlTextareaComponent {
    @Input() alias: string;
    @Input() control: FormControl<string | null>;

    constructor() {
        // pass
    };
};