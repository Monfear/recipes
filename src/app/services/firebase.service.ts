import { Injectable } from "@angular/core";

import { FirebaseApp, initializeApp } from "firebase/app";
import { Database, DatabaseReference, getDatabase, ref, push, remove, get, DataSnapshot, update } from 'firebase/database';
import { firebaseConfig } from "src/config/firebase.config";
import { IRecipie } from "../types/Recipe.interface";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class FirebaseService {
    public app: FirebaseApp;
    public db: Database;

    public ifLoadingBehaviorSubject: BehaviorSubject<boolean> = new BehaviorSubject(true);

    public collection: string = 'recipes';

    constructor() {
        this.app = initializeApp(firebaseConfig);
        this.db = getDatabase();
    };

    public async getSingleData(id: string): Promise<IRecipie | undefined> {
        let data: IRecipie | undefined;

        try {
            const reference: DatabaseReference = ref(this.db, this.collection + '/' + id);
            const dataSnapshot: DataSnapshot = await get(reference);

            const value: IRecipie = dataSnapshot.val();

            if (!value) {
                throw new Error('[-] no data to fetch');
            };

            data = value;
        } catch (error) {
            if (error instanceof Error) {
                console.warn(error.message);
            };
        };

        return data;
    };

    public async addSingleData(data: IRecipie): Promise<void> {
        const reference: DatabaseReference = ref(this.db, this.collection);

        await push(reference, data);
    };

    public async removeSingleData(id: string): Promise<void> {
        const reference: DatabaseReference = ref(this.db, this.collection + '/' + id);

        await remove(reference);
    };

    public async updateSingleData(id: string, data: IRecipie): Promise<void> {
        const reference: DatabaseReference = ref(this.db, this.collection + '/' + id);

        await update(reference, data);
    };
};