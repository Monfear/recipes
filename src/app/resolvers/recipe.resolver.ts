import { ActivatedRouteSnapshot, Params, ResolveFn, Router, RouterStateSnapshot } from "@angular/router";
import { inject } from '@angular/core';
import { Observable } from "rxjs";
import { FirebaseService } from "../services/firebase.service";
import { IRecipie } from "../types/Recipe.interface";

export const recipeResolver: ResolveFn<IRecipie | undefined> =
    (
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<IRecipie> | Promise<IRecipie | undefined> | IRecipie | undefined => {

        const firebaseService: FirebaseService = inject<FirebaseService>(FirebaseService);

        const { id } : Params = route.params;

        const promise: Promise<IRecipie | undefined> = firebaseService.getSingleData(id);

        return promise;
    };