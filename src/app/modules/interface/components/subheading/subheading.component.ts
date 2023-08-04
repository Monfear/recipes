import { Component, Input } from '@angular/core';

@Component({
    selector: 'interface-subheading',
    templateUrl: './subheading.component.html',
    styleUrls: ['./subheading.component.scss']
})

export class SubheadingComponent {
    @Input() additionalClass: string;
    @Input() additionalStyles: Object;

    constructor() {
        // pass
    };
};