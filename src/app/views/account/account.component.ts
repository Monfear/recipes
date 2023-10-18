import { Component } from "@angular/core";
import { setViewTitle } from "src/app/functions/setViewTitle";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: 'app-account-view',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})

export class AccountViewComponent {
    private title: string = 'account';

    constructor(protected authService: AuthService) {
        setViewTitle(this.title);
    };
};