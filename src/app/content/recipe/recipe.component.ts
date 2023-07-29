import { Component, Input } from '@angular/core';
import { IRecipie } from "src/app/types/Recipe.interface";

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.scss']
})

export class RecipeComponent {
    @Input() id: string;
    @Input() data: IRecipie;

    constructor() {
    };
};