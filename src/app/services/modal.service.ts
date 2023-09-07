import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class ModalService {
    public ifModalVisible: boolean = false;

    constructor() {
        // pass
    };

    public openModal(): void {
        this.ifModalVisible = true;
    };

    public closeModal(): void {
        this.ifModalVisible = false;
    };
};