import { FormArray, FormControl } from '@angular/forms';

export interface IRecipeControls {
    name: FormControl<string | null>;
    description: FormControl<string | null>;
    imgUrl: FormControl<string | null>;
    preparation: FormControl<string | null>;
    ingredients: FormArray<FormControl<string | null>>;
    difficulty: FormControl<string | null>;
    ifVege: FormControl<boolean | null>;
};