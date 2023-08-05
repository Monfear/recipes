import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { setViewTitle } from "src/app/functions/setViewTitle";
import { IRecipeControls } from "src/app/types/Recipe-controls.interface";

@Component({
    selector: 'app-add-recipe',
    templateUrl: './add-recipe.component.html',
    styleUrls: ['./add-recipe.component.scss']
})

export class AddRecipeComponent implements OnInit {
    private title: string = 'add recipe';

    public formGroupEntries: [string, FormControl<string | null>][];

    public formGroup: FormGroup<IRecipeControls> = new FormGroup({
        name: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(25),
        ]),

        description: new FormControl('', [
            Validators.required,
        ]),

        ingredients: new FormControl([''], [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(30),
        ]),

        preparation: new FormControl('', [
            Validators.required,
        ]),

        imgUrl: new FormControl('', [
            Validators.required,
            Validators.pattern(/[\b(?:https?|ftp)://\S+\.(?:png|jpe?g|gif|bmp|webp)\b]/),
        ])
    }, []);

    constructor() {
        this.formGroupEntries = Object.entries(this.formGroup.controls);
    };

    public ngOnInit(): void {
        setViewTitle(this.title);
    };

    protected submitForm(e: SubmitEvent): void {
        e.preventDefault();

        console.log(e);
        console.log(this.formGroup);
    };
};