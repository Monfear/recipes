import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root',
})

export class DomService {
    public ifMobileView: boolean;
    public mobileBreakpoint: number = 1024;

    public ifNavActive: boolean = false;
    public ifModalActive: boolean = false;

    constructor(private router: Router) {
        this.checkDevice();
        window.addEventListener('resize', this.checkDevice.bind(this));
    };

    public checkDevice(): void {
        if (window.innerWidth < this.mobileBreakpoint) {
            this.ifMobileView = true;
            this.ifNavActive = false;
        } else {
            this.ifMobileView = false;
            this.ifNavActive = true;
        };
    };

    public navigate(path: string): void {
        this.router.navigateByUrl(path);
    };

    public openModal(): void {
        this.ifModalActive = true;
    };

    public closeModal(): void {
        this.ifModalActive = false;
    };

    public openNav(): void {
        this.ifNavActive = true;
    };

    public closeNav(): void {
        this.ifNavActive = false;
    };
}