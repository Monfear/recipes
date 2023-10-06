import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
    protected routes: string[] = ['', 'recipes', 'add-recipe', 'register', 'login'];

    constructor() {
        // pass
    };
};