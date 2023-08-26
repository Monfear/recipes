import { Component } from "@angular/core";
import { ActivatedRoute, Data, Params, Router } from "@angular/router";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { setViewTitle } from "src/app/functions/setViewTitle";
import { IRecipie } from "src/app/types/Recipe.interface";
import { IRecipeControls } from "src/app/types/Recipe-controls.interface";
import { FirebaseService } from "src/app/services/firebase.service";

@Component({
    selector: 'app-edit-recipe-route',
    templateUrl: './edit-recipe.component.html',
    styleUrls: ['./edit-recipe.component.scss']
})

export class EditRecipeComponent {
    private title: string = 'edit recipe';

    private id: string | null = null;
    private recipe: IRecipie | null = null;

    protected formGroup: FormGroup<IRecipeControls> = new FormGroup({
        name: new FormControl<string | null>(null, [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(25),
        ]),

        description: new FormControl<string | null>(null, [
            Validators.required,
        ]),

        preparation: new FormControl<string | null>(null, [
            Validators.required,
        ]),

        imgUrl: new FormControl<string | null>(null, [
            Validators.required,
            // Validators.pattern(/[\b(?:https?|ftp)://\S+\.(?:png|jpe?g|gif|bmp|webp)\b]/),
        ]),

        ingredients: new FormArray<FormControl<string | null>>([]),

        difficulty: new FormControl<string | null>(null, [
            Validators.required
        ]),

        ifVege: new FormControl<boolean | null>(false, [
            // pass
        ])
    }, {
        validators: [],
    });

    constructor(private firebaseService: FirebaseService, private route: ActivatedRoute, private router: Router) {
        setViewTitle(this.title);

        this.getParams();
        this.getData();

        console.log(this.recipe);
    };

    ngOnInit(): void {
        this.fillForm();
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

    protected submitForm(e: SubmitEvent): void {
        console.log('form submitted');

        if (!this.id) {
            return;
        };

        if (!this.formGroup.controls.name.value) {
            return;
        }

        console.log(this.formGroup.value);
        const newData: IRecipie = this.formGroup.value as IRecipie;

        this.firebaseService.updateSingleData(this.id, newData);

        this.router.navigateByUrl('recipes');
    };

    protected fillForm(): void {
        if (!this.recipe) {
            console.warn('[!] no recipe');
            return;
        };

        if (this.recipe.ingredients) {
            this.recipe.ingredients.forEach((item: string, idx: number) => {
                this.addIngredientsControl();
                // this.formGroup.controls.ingredients.controls[idx].setValue(item);
            });
        } else {
            // this.addIngredientsControl();
        }

        this.formGroup.setValue(this.recipe);
    };

    protected addIngredientsControl(): void {
        this.formGroup.controls.ingredients.push(new FormControl<string | null>(null, [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(15)
        ]));
    };

    protected removeIngredientsControl(idx: number): void {
        if (this.formGroup.controls.ingredients.controls.length === 1) {
            return
        };

        this.formGroup.controls.ingredients.removeAt(idx);
    };
};