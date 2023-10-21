import { Component } from '@angular/core';
import { setViewTitle } from "src/app/functions/setViewTitle";
import { DomService } from "src/app/services/dom.service";

@Component({
    selector: 'app-add-recipe',
    templateUrl: './add-recipe.component.html',
    styleUrls: ['./add-recipe.component.scss']
})

export class AddRecipeComponent {
    private title: string = 'add recipe';

    constructor(protected domService: DomService) {
        setViewTitle(this.title);
    };
};