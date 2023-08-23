import { Component, OnChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { setViewTitle } from "src/app/functions/setViewTitle";
import { FirebaseService } from "src/app/services/firebase.service";
import { IRecipeControls } from "src/app/types/Recipe-controls.interface";
import { IRecipie } from "src/app/types/Recipe.interface";

@Component({
    selector: 'app-add-recipe',
    templateUrl: './add-recipe.component.html',
    styleUrls: ['./add-recipe.component.scss']
})

export class AddRecipeComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
    private title: string = 'add recipe';
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
            // Validators.pattern(/[\b(?:https?|ftp)://\S+\.(?:png|jpe?g|gif|bmp|webp)\b]/),
        ]),

        ingredients: new FormArray<FormControl<string | null>>([
            new FormControl<string>('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(15)
            ]),
            new FormControl<string>('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(15)
            ]),
        ]),

        difficulty: new FormControl<string | null>(null, [
            Validators.required
        ]),

        ifVege: new FormControl<boolean | null>(false, [
            // pass
        ])
    }, {
        validators: [],
    });

    constructor(private firebaseService: FirebaseService, private router: Router) {
        console.log('>> constructor');

        this.formGroupEntries = Object.entries(this.formGroup.controls);
    };

    public ngOnChanges(): void {
        console.log('>> ngOnChanges');
    };

    public ngOnInit(): void {
        console.log('>> ngOnInit');

        setViewTitle(this.title);
    };

    public ngDoCheck(): void {
        console.log('>> ngDoCheck');
    };

    public ngOnDestroy(): void {
        console.log('>> ngOnDestroy');
    };

    protected addIngredientsControl(): void {
        this.formGroup.controls.ingredients.push(new FormControl<string | null>(null, [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(15)
        ]));
    };

    protected removeIngredientsControl(idx: number): void {
        this.formGroup.controls.ingredients.removeAt(idx);
    };

    protected async submitForm(e: SubmitEvent) {
        e.preventDefault();

        if (!this.formGroup.valid) {
            this.errMsg = 'Please fill in all fields correctly.';
            return;
        };

        try {
            const data: IRecipie = this.formGroup.value as IRecipie;

            await this.firebaseService.addSingleData(data);

            this.router.navigateByUrl('recipes');
        } catch (error) {
            if (error instanceof Error) {
                console.warn(`[!] ${error.message}`);
            };
        };
    };
};