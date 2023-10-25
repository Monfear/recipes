import { Component, Input, SimpleChanges } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { DomService } from "src/app/services/dom.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { IRecipeControls } from "src/app/types/Recipe-controls.interface";
import { IRecipeFormActions } from "src/app/types/Recipe-form-actions.interface";
import { IRecipie } from "src/app/types/Recipe.interface";

@Component({
    selector: 'app-recipe-form',
    templateUrl: './recipe-form.component.html',
    styleUrls: ['./recipe-form.component.scss']
})

export class RecipeFormComponent {
    @Input() action: string;
    @Input() id: string | null;
    @Input() recipe: IRecipie | null = null;

    protected ACTIONS: IRecipeFormActions = {
        ADD: 'ADD',
        EDIT: 'EDIT',
    };

    protected errMsg: string;
    protected formGroupEntries: [string, FormControl<string | null>][];

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

    constructor(
        private firebaseService: FirebaseService,
        private domService: DomService,
    ) {
        // pass
    };

    ngOnChanges(changes: SimpleChanges): void {
        if (this.action === this.ACTIONS.EDIT) {
            this.fillForm();
        } else if (this.action === this.ACTIONS.ADD) {
            for (let i = 0; i < 2; i++) {
                this.addIngredientsControl();
            };
        };
    };

    ngOnInit() {
        this.formGroupEntries = Object.entries(this.formGroup.controls);
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
            return;
        };

        this.formGroup.controls.ingredients.removeAt(idx);
    };

    protected fillForm(): void {
        if (!this.recipe) {
            console.warn('[!] no recipe');
            return;
        };

        this.recipe.ingredients.forEach((item: string, idx: number) => {
            this.addIngredientsControl();
        });

        this.formGroup.setValue(this.recipe);
    };

    protected async addRecipeSubmit(): Promise<void> {

        if (!this.formGroup.valid) {
            this.errMsg = 'Please fill in all fields correctly.';

            return;
        };

        try {
            const data: IRecipie = this.formGroup.value as IRecipie;

            await this.firebaseService.addSingleData(data);

            this.domService.openModal();
        } catch (error) {
            if (error instanceof Error) {
                console.warn(`[!] ${error.message}`);
            };
        };
    };

    protected async editRecipeSubmit(): Promise<void> {
        if (!this.id) {
            return;
        };

        if (!this.formGroup.controls.name.value) {
            return;
        };

        const newData: IRecipie = this.formGroup.value as IRecipie;

        this.firebaseService.updateSingleData(this.id, newData);

        this.domService.openModal();
    };
};