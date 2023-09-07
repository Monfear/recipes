import { Component, ElementRef, Input, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalService } from "src/app/services/modal.service";

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit, OnDestroy {
    @Input() message: string;
    @Input() redirectPath?: string;

    constructor(protected modalService: ModalService, private ref: ElementRef, private router: Router) {
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