import { Component } from "@angular/core";
import { IUserInfo } from "src/app/types/UserInfo.interface";

import { AuthService } from "src/app/services/auth.service";
import { ModalService } from "src/app/services/modal.service";


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

    constructor(protected authService: AuthService, protected modalService: ModalService) {
        // pass
    };

    protected async submitForm(e: SubmitEvent): Promise<void> {
        e.preventDefault();

        await this.authService.registerUser(this.userInfo);

        if (!this.authService.errorMessage) {
            this.modalService.ifModalVisible = true;
        };
    };
};