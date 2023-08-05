import { Component, OnInit } from "@angular/core";
import { setViewTitle } from "src/app/functions/setViewTitle";

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})

export class NotFoundComponent implements OnInit {
    private title: string = 'not found';

    constructor() {
        // pass
    };

    ngOnInit(): void {
        setViewTitle(this.title);
    };
};