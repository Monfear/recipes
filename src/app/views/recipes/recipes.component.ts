import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "src/app/services/firebase.service";
import { DataSnapshot, DatabaseReference, onValue, ref } from "firebase/database";
import { IRecipie } from "src/app/types/Recipe.interface";
import { setViewTitle } from "src/app/functions/setViewTitle";
import { ModalService } from "src/app/services/modal.service";

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss']
})

export class RecipesComponent implements OnInit {
    private title: string = 'all';

    public recipes: [string, IRecipie][] = [];

    constructor(public firebaseService: FirebaseService) {
        this.listenUpdateData();
    };

    ngOnInit(): void {
        setViewTitle(this.title);

        // this.firebaseService.ifLoadingBehaviorSubject.next(true);
    };

    listenUpdateData() {
        const reference: DatabaseReference = ref(this.firebaseService.db, this.firebaseService.collection);

        onValue(reference, (snapshot: DataSnapshot) => {
            console.log('[i]', 'onValue');

            try {
                const value: Object | null = snapshot.val();

                if (!value && !snapshot.exists()) {
                    this.recipes = [];
                    throw new Error('[-] no data in database to convert into an object');
                };

                const data: [string, IRecipie][] = Object.entries(snapshot.val());

                this.recipes = data;
            } catch (error: any) {
                if (error instanceof Error) {
                    console.warn(error.message);
                };
            } finally {
                this.firebaseService.ifLoadingBehaviorSubject.next(false);
            };
        });
    };
};