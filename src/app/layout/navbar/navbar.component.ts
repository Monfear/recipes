import { Component } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
    protected routes: string[] = ['', 'recipes', 'add-recipe'];
    protected authRoutes: string[] = ['account', 'register', 'login'];

    constructor(protected authService: AuthService) {
        console.log(this.authService.userCredential);
    };
};