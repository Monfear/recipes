import { Component } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from "@angular/router";
import { IRecipie } from "src/app/types/Recipe.interface";

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.scss']
})

export class RecipeComponent {
    public id: string;
    public recipe: IRecipie;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.route.params.subscribe((params: Params): void => {
            this.id = params['id'];
        });

        this.route.data.subscribe((data: Data) => {
            const recipe: IRecipie | undefined = data['recipe']

            if (!recipe) {
                this.router.navigateByUrl('');
                return
            };

            this.recipe = recipe;
        });
    };
};