import { Component, OnInit } from "@angular/core";
import { setViewTitle } from "src/app/functions/setViewTitle";

@Component({
    selector: 'app-home',
    templateUrl: './home.components.html',
    styleUrls: ['./home.components.scss']
})

export class HomeComponent implements OnInit {
    private title: string = 'home';

    constructor() {

    };

    ngOnInit(): void {
        setViewTitle(this.title);
    };
};