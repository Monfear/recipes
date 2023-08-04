import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { IRecipie } from "src/app/types/Recipe.interface";

@Component({
    selector: 'app-recipe-card',
    templateUrl: './recipe-card.component.html',
    styleUrls: ['./recipe-card.component.scss']
})

export class RecipeCardComponent {
    @Input() id: string;
    @Input() data: IRecipie;

    constructor(public router: Router) {
        // pass
    };

    public navigateToDetails = (e: MouseEvent): void => {
        this.router.navigateByUrl(`recipes/${this.id}`)
    };
};