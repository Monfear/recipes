import { Component, ElementRef, Input, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DomService } from "src/app/services/dom.service";

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit, OnDestroy {
    @Input() message: string;
    @Input() redirectPath: string | null;

    constructor(protected domService: DomService, private ref: ElementRef, private router: Router) {
        // pass
    };

    ngOnInit(): void {
        document.body.append(this.ref.nativeElement);
    };

    ngOnDestroy(): void {
        this.ref.nativeElement.remove();

        if (this.redirectPath) {
            this.router.navigateByUrl(this.redirectPath);
        };
    };
};