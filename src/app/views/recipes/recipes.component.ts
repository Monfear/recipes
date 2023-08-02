import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "src/app/services/firebase.service";
import { DataSnapshot, DatabaseReference, onValue, ref } from "firebase/database";
import { IRecipie } from "src/app/types/Recipe.interface";

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss']
})

export class RecipesComponent implements OnInit {
    public recipes: [string, IRecipie][] = [];

    constructor(public firebaseService: FirebaseService) {
        this.listenUpdateData();
    };

    ngOnInit(): void {
        // pass
    };

    // removeRecipe(id: string): void {
    //     this.firebaseService.removeData(id).then((_value: void) => {
    //         console.log('remove');
    //     });
    // };

    listenUpdateData() {
        const reference: DatabaseReference = ref(this.firebaseService.db, this.firebaseService.collection);

        onValue(reference, (snapshot: DataSnapshot) => {
            console.log('onValue');

            try {
                const value: Object | null = snapshot.val();

                if (!value && !snapshot.exists()) {
                    this.recipes = [];
                    throw new Error('[-] no data to fetch');
                };

                const data: [string, IRecipie][] = Object.entries(snapshot.val());

                this.recipes = data;
            } catch (error: any) {
                if (error instanceof Error) {
                    console.warn(error.message);
                };
            };
        });
    };
};