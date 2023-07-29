import { Component, Input } from "@angular/core";
import { IRecipie } from "src/app/types/Recipe.interface";

@Component({
    selector: 'app-recipe-card',
    templateUrl: './recipe-card.component.html',
    styleUrls: ['./recipe-card.component.scss']
})

export class RecipeCardComponent {
    @Input() id: string;
    @Input() data: IRecipie;

    constructor() {
        // pass
    };
};