import { Component } from "@angular/core";
import { DomService } from "src/app/services/dom.service";

@Component({
    selector: 'interface-hamburger',
    templateUrl: './hamburger.component.html',
    styleUrls: ['./hamburger.component.scss']
})

export class HamburgerComponent {
    protected ifActive: boolean = false;

    constructor(protected domService: DomService) {
        this.ifActive = false;
    };

    protected toggle(): void {
        if (this.domService.ifNavActive) {
            this.domService.closeNav();
            this.ifActive = false;
        } else {
            this.domService.openNav();
            this.ifActive = true;
        };
    };
}