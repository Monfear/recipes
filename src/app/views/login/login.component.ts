import { Component } from "@angular/core";
import { setViewTitle } from "src/app/functions/setViewTitle";

import { AuthService } from "src/app/services/auth.service";
import { DomService } from "src/app/services/dom.service";

@Component({
    selector: 'app-login-view',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginViewComponent {
    private title: string = 'login';

    constructor(protected authService: AuthService, protected domService: DomService) {
        setViewTitle(this.title);
    };
};