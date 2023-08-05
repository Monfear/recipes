import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from "@angular/router";
import { setViewTitle } from "src/app/functions/setViewTitle";
import { IRecipie } from "src/app/types/Recipe.interface";

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.scss']
})

export class RecipeComponent implements OnInit {
    public id: string | null = null;
    public recipe: IRecipie | null = null;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.getParams();
        this.getData();
    };

    ngOnInit() {
        if (this.recipe) {
            setViewTitle(this.recipe.name);
        } else {
            setViewTitle('recipe');
        };
    };

    public getParams(): void {
        this.route.params.subscribe((params: Params): void => {
            this.id = params['id'];
        });
    };

    public getData(): void {
        this.route.data.subscribe((data: Data) => {
            const recipe: IRecipie | undefined = data['recipe'];

            if (!recipe) {
                this.router.navigateByUrl('not-found');
                return
            };

            this.recipe = recipe;
        });
    }
};