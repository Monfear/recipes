import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from "@angular/router";
import { setViewTitle } from "src/app/functions/setViewTitle";
import { DomService } from "src/app/services/dom.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { IRecipie } from "src/app/types/Recipe.interface";

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.scss']
})

export class RecipeComponent implements OnInit {
    private title: string = 'recipe';

    public id: string | null = null;
    public recipe: IRecipie | null = null;

    constructor(
        protected firebaseService: FirebaseService,
        protected domService: DomService,
        private route: ActivatedRoute,
        private router: Router,
    ) {
        this.getParams();
        this.getData();
    };

    ngOnInit(): void {
        if (this.recipe) {
            setViewTitle(this.recipe.name);
        } else {
            setViewTitle(this.title);
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

                return;
            };

            this.recipe = recipe;
        });
    };

    protected removeRecipe(e: MouseEvent): void {
        console.log(e);

        if (!this.id) {
            console.warn('[!] invalid id');

            return;
        };

        this.firebaseService.removeSingleData(this.id)
            .then((value: void) => {
                console.log(value);

                this.domService.openModal();
            })
            .catch((err) => {
                if (err instanceof Error) {
                    console.warn(`[!] ${err.message}`);
                };
            });
    };

    protected moveToEditRecipePage(e: MouseEvent): void {
        console.log(e);
        this.router.navigateByUrl(`/recipes/${this.id}/edit-recipe`);

    };
};