import { Component } from '@angular/core';
import { setViewTitle } from "src/app/functions/setViewTitle";


@Component({
    selector: 'app-add-recipe',
    templateUrl: './add-recipe.component.html',
    styleUrls: ['./add-recipe.component.scss']
})

export class AddRecipeComponent {
    private title: string = 'add recipe';

    constructor() {
        setViewTitle(this.title);
    };
};