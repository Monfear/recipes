import { Component } from '@angular/core';
import { setViewTitle } from "src/app/functions/setViewTitle";
import { ModalService } from "src/app/services/modal.service";

@Component({
    selector: 'app-add-recipe',
    templateUrl: './add-recipe.component.html',
    styleUrls: ['./add-recipe.component.scss']
})

export class AddRecipeComponent {
    private title: string = 'add recipe';

    constructor(protected modalService: ModalService) {
        setViewTitle(this.title);
    };
};