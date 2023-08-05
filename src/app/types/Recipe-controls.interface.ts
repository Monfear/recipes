import { FormControl } from '@angular/forms';

export interface IRecipeControls {
    name: FormControl<string | null>;
    description: FormControl<string | null>;
    ingredients: FormControl<string[] | null>;
    preparation: FormControl<string | null>;
    imgUrl: FormControl<string | null>;
};