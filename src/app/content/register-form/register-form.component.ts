import { Component } from "@angular/core";
import { IUserInfo } from "src/app/types/UserInfo.interface";

import { AuthService } from "src/app/services/auth.service";
import { DomService } from "src/app/services/dom.service";


@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})

export class RegisterFormComponent {
    protected userInfo: IUserInfo = {
        email: '',
        password: '',
        confirmedPassword: '',
    };

    constructor(protected authService: AuthService, protected domService: DomService) {
        // pass
    };

    protected async submitForm(e: SubmitEvent): Promise<void> {
        e.preventDefault();

        await this.authService.registerUser(this.userInfo);

        if (!this.authService.errorMessage) {
            this.domService.ifModalActive = true;
        };
    };
};