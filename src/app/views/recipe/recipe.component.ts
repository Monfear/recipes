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
    public id: string;
    public recipe: IRecipie;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.getParams();
        this.getData();
    };

    ngOnInit() {
        setViewTitle(this.recipe.name);
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
                this.router.navigateByUrl('');
                return
            };

            this.recipe = recipe;
        });
    };
};