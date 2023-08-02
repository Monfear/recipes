import { Component, Input } from "@angular/core";

@Component({
    selector: 'interface-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
    @Input() additionalClass: string;
    @Input() additionalStyles: Object;

    constructor() {
        // pass
    };
};