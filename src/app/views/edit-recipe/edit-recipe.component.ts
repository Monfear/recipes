import { Component } from "@angular/core";
import { ActivatedRoute, Data, Params, Router } from "@angular/router";
import { setViewTitle } from "src/app/functions/setViewTitle";
import { DomService } from "src/app/services/dom.service";
import { IRecipie } from "src/app/types/Recipe.interface";

@Component({
    selector: 'app-edit-recipe-route',
    templateUrl: './edit-recipe.component.html',
    styleUrls: ['./edit-recipe.component.scss']
})

export class EditRecipeComponent {
    private title: string = 'edit recipe';

    protected id: string | null = null;
    protected recipe: IRecipie | null = null;

    constructor(protected domService: DomService, private route: ActivatedRoute, private router: Router) {
        setViewTitle(this.title);

        this.getParams();
        this.getData();
    };

    private getParams(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = params['id'];
        });
    };

    private getData(): void {
        this.route.data.subscribe((data: Data) => {
            const recipe: IRecipie | null = data['recipe'];

            if (!recipe) {
                this.router.navigateByUrl('not-found');

                return;
            };

            this.recipe = recipe;
        });
    };
};