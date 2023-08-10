import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: 'controls-textarea',
    templateUrl: './control-textarea.component.html',
    styleUrls: ['./control-textarea.component.scss']
})

export class ControlTextareaComponent {
    @Input() alias: string;
    @Input() control: FormControl<string | null>;

    constructor() {
        // pass
    };
};