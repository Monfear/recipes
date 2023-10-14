import { Component } from "@angular/core";
import { setViewTitle } from "src/app/functions/setViewTitle";

import { AuthService } from "src/app/services/auth.service";
import { ModalService } from "src/app/services/modal.service";

@Component({
    selector: 'app-register-view',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterViewComponent {
    private title: string = 'register';

    constructor(protected authService: AuthService, protected modalService: ModalService) {
        setViewTitle(this.title);
    };
};