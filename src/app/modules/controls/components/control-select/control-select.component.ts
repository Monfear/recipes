import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: 'controls-select',
    templateUrl: './control-select.component.html',
    styleUrls: ['./control-select.component.scss']
})

export class ControlSelectComponent {
    @Input() alias: string;
    @Input() control: FormControl<string | null>;
    @Input() prompt: string;
    @Input() options: string[];

    constructor() {
        // pass
    };
};