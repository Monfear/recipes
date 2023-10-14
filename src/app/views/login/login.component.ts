import { Component } from "@angular/core";
import { setViewTitle } from "src/app/functions/setViewTitle";

import { AuthService } from "src/app/services/auth.service";
import { ModalService } from "src/app/services/modal.service";

@Component({
    selector: 'app-login-view',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginViewComponent {
    private title: string = 'login';

    constructor(protected authService: AuthService, protected modalService: ModalService) {
        setViewTitle(this.title);
    };
};