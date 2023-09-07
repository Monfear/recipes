import { Component, ElementRef, OnDestroy, OnInit } from "@angular/core";
import { ModalService } from "src/app/services/modal.service";

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit, OnDestroy {
    constructor(protected modalService: ModalService, private ref: ElementRef) {
        // pass
    };

    ngOnInit(): void {
        document.body.append(this.ref.nativeElement);
    };

    ngOnDestroy(): void {
        this.ref.nativeElement.remove();
    };
};