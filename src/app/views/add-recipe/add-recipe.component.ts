import { Component, OnInit } from '@angular/core';
import { setViewTitle } from "src/app/functions/setViewTitle";

@Component({
    selector: 'app-add-recipe',
    templateUrl: './add-recipe.component.html',
    styleUrls: ['./add-recipe.component.scss']
})

export class AddRecipeComponent implements OnInit {
    private title: string = 'add recipe';

    constructor() {
        // pass
    };

    ngOnInit(): void {
        setViewTitle(this.title);
    };
};