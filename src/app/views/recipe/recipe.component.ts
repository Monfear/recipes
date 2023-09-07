import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from "@angular/router";
import { setViewTitle } from "src/app/functions/setViewTitle";
import { FirebaseService } from "src/app/services/firebase.service";
import { ModalService } from "src/app/services/modal.service";
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
        protected modalService: ModalService,
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

        console.log(this.recipe);
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

    protected removeRecipe(): void {
        if (!this.id) {
            console.warn('[!] invalid id');
            return;
        };

        this.firebaseService.removeSingleData(this.id)
            .then((value: void) => {
                console.log(value);

                this.modalService.openModal();
            })
            .catch((err) => {
                if (err instanceof Error) {
                    console.warn(`[!] ${err.message}`);
                };
            });
    };

    protected moveToEditRecipePage(): void {
        this.router.navigateByUrl(`recipes/${this.id}/edit-recipe`);
    };
};