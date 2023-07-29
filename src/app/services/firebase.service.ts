import { Injectable } from "@angular/core";
import { FirebaseApp, initializeApp } from "firebase/app";
import { Database, DatabaseReference, getDatabase, ref, push, remove} from 'firebase/database';
import { firebaseConfig } from "src/config/firebase.config";
import { IRecipie } from "../types/Recipe.interface";

@Injectable({
    providedIn: 'root'
})

export class FirebaseService {
    public app: FirebaseApp;
    public db: Database;

    public collection: string = 'recipes';

    constructor() {
        this.app = initializeApp(firebaseConfig);
        this.db = getDatabase();
    };

    // public async getData(): Promise<any> {
    //     let data: [string, IRecipie][] = [];

    //     try {
    //         const reference: DatabaseReference = ref(this.db, this.collection);
    //         const dataSnapshot: DataSnapshot = await get(reference);

    //         const value: Object = dataSnapshot.val();

    //         if (!value) {
    //             throw new Error('[-] no data to fetch');
    //         };

    //         data = Object.entries(dataSnapshot.val());
    //     } catch (error) {
    //         if (error instanceof Error) {
    //             console.warn(error.message);
    //         };
    //     };

    //     return data;

    //     // this.firebaseService.getRecipes()
    //     //     .then((data: [string, IRecipie][]) => {
    //     //         this.recipes = data;
    //     //     }).catch((error: any) => {
    //     //         if (error instanceof Error) {
    //     //             console.warn(error.message);
    //     //         };
    //     //     });
    // };

    public async addData(): Promise<void> {
        const reference: DatabaseReference = ref(this.db, this.collection);

        const data: IRecipie = {
            name: 'sushi',
            ingredients: [
                '3 listki nori',
                '250 g ryżu do sushi',
                '2 łyżki octu ryżowego',
                '1/2 łyżeczki soli',
                '2 łyżeczki cukru',
                '1/2 marchewki',
                '1/2 ogórka szklarniowego',
                '1/2 awokado',
                '100 g wędzonego łososia',
                '1/2 papryki',
                'szczypiorek',
                'almette śmietankowy lub z suszonymi pomidorami',
                'wasabi',
                'sos sojowy',
                'mata do sushi'
            ],
            preparation: `
                Ryż ugotować zgodnie z instrukcją na opakowaniu.
                Przygotować zaprawę do ryżu. W tym celu należy wymieszać 2 łyżki octu ryżowego z 2 łyżeczkami cukru i 1/2 łyżeczką soli. Zaprawą polać ugotowany ryż i dokładnie wymieszać. Ryż studzić pod przykryciem.
                Warzywa pokroić wzdłuż w cienkie paski. To samo robimy z awokado i łososiem.
                Rozkładamy matę do sushi.
                Na macie układamy listek nori, błyszczącą stroną do dołu.
                Do małej miseczki wlewamy zimnej wody i dodajemy łyżkę octu ryżowego. Woda będzie nam służyła do zwilżenia rąk, by łatwiej rozprowadzało się ryż.
                Zwilżamy dłoń i rozprowadzamy ostudzony ryż na listku nori. Powinien być w całości pokryty z wyjątkiem wąskiego paska od góry.
                Na wyłożony ryż układamy nasze ulubione dodatki. Spokojnie mogą wystawać, obetnie się je później.
                Zwijamy delikatnie naszą rolkę. Gotową rolkę kroimy na mniejsze kawałki. Przed podaniem sushi trzymamy w lodówce.
                Domowe sushi podajemy z wasabi, sosem sojowym, marynowanym imbirem i innymi ulubionymi dodatkami.
            `,
            imgUrl: '/assets/images/meals/sushi.webp'
        };

        await push(reference, data);
    };

    public async removeData(id: string): Promise<void> {
        const reference: DatabaseReference = ref(this.db, this.collection + '/' + id);

        await remove(reference);
    };
};