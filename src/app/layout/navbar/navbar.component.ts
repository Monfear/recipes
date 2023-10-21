import { Component, DoCheck } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
import { DomService } from "src/app/services/dom.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements DoCheck {
    protected routes: string[] = ['', 'recipes', 'add-recipe'];
    protected authRoutes: string[] = ['account', 'register', 'login'];

    constructor(protected authService: AuthService, protected domService: DomService) {
        // pass
    };

    ngDoCheck(): void {
        // pass
    };
};