import { Component } from "@angular/core";

import { IUserInfo } from "src/app/types/UserInfo.interface";

import { AuthService } from "src/app/services/auth.service";
import { DomService } from "src/app/services/dom.service";

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent {
    protected userInfo: Pick<IUserInfo, 'email' | 'password'> = {
        email: '',
        password: '',
    };

    constructor(protected authService: AuthService, protected domService: DomService) {
        // pass
    };

    protected async submitForm(e: SubmitEvent): Promise<void> {
        e.preventDefault();

        await this.authService.loginUser(this.userInfo);

        if (!this.authService.errorMessage) {
            this.domService.ifModalActive = true;
        };
    };
};