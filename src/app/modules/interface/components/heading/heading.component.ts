import { Component, Input } from "@angular/core";

@Component({
    selector: 'interface-heading',
    templateUrl: './heading.component.html',
    styleUrls: ['./heading.component.scss']
})

export class HeadingComponent {
    @Input() additionalClass: string;
    @Input() additionalStyles: Object;

    constructor() {
        // pass
    };
};