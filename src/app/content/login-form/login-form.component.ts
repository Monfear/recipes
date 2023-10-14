import { Component } from "@angular/core";

import { IUserInfo } from "src/app/types/UserInfo.interface";

import { AuthService } from "src/app/services/auth.service";
import { ModalService } from "src/app/services/modal.service";

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

    constructor(protected authService: AuthService, protected modalService: ModalService) {
        // pass
    };

    protected async submitForm(e: SubmitEvent): Promise<void> {
        e.preventDefault();

        await this.authService.loginUser(this.userInfo);

        if (!this.authService.errorMessage) {
            this.modalService.ifModalVisible = true;
        };
    };
};