import { Component, OnInit } from "@angular/core";
import { setViewTitle } from "src/app/functions/setViewTitle";
import { DomService } from "src/app/services/dom.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.components.html',
    styleUrls: ['./home.components.scss']
})

export class HomeComponent implements OnInit {
    private title: string = 'home';

    constructor(protected domService: DomService) {
        // pass
    };

    ngOnInit(): void {
        setViewTitle(this.title);
    };

    protected moveToRecipes() {
        this.domService.navigate('recipes');
    };
};