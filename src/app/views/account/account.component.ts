import { Component } from "@angular/core";
import { setViewTitle } from "src/app/functions/setViewTitle";

@Component({
    selector: 'app-account-view',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})

export class AccountViewComponent {
    private title: string = 'account';

    constructor() {
        setViewTitle(this.title);
    };
};