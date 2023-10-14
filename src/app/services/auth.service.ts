import { Injectable } from "@angular/core";

import { FirebaseApp, initializeApp } from "firebase/app";
import { firebaseConfig } from "src/config/firebase.config";

import { UserCredential, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Auth } from 'firebase/auth';

import { IUserInfo } from "../types/UserInfo.interface";
import { BehaviorSubject } from "rxjs";
import { IUserCredential } from "../types/UserCredential.interface";

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    private app: FirebaseApp;
    private auth: Auth;

    public userCredential: IUserCredential = {
        email: '',
        id: '',
        token: ''
    };

    public ifLoggedIn: boolean = false;
    public errorMessage: string | null = null;
    public ifLoadingBehaviorSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

    constructor() {
        this.app = initializeApp(firebaseConfig);
        this.auth = getAuth();
    };

    public async registerUser(userInfo: IUserInfo): Promise<void> {
        this.ifLoadingBehaviorSubject.next(true);
        this.errorMessage = null;

        try {
            if (userInfo.password !== userInfo.confirmedPassword) {
                throw new Error('Passwords must be the same');
            };

            const credential: UserCredential = await createUserWithEmailAndPassword(
                this.auth, userInfo.email, userInfo.password
            );

            console.log(credential);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.warn(error.message);

                this.errorMessage = error.message;
            };
        } finally {
            this.ifLoadingBehaviorSubject.next(false);
        };
    };

    public async loginUser(userInfo: Pick<IUserInfo, 'email' | 'password'>): Promise<void> {
        this.ifLoadingBehaviorSubject.next(true);
        this.errorMessage = null;

        try {
            const credential: UserCredential = await signInWithEmailAndPassword(
                this.auth, userInfo.email, userInfo.password
            );

            if (credential.user.email) {
                this.userCredential.email = credential.user.email;
            } else {
                this.userCredential.email = 'unknown email';
            };

            this.ifLoggedIn = true;

            this.userCredential.id = credential.user.uid;
            this.userCredential.token = await credential.user.getIdToken();

            console.log(credential);
            console.log(this.userCredential);
        } catch(error: unknown) {
            if (error instanceof Error) {
                console.warn(error.message);

                this.errorMessage = error.message;
            };
        } finally {
            this.ifLoadingBehaviorSubject.next(false);
        };
    };

    public async logoutUser(): Promise<void> {
        try {
            await signOut(this.auth);

            this.ifLoggedIn = false;

            this.userCredential.email = '';
            this.userCredential.id = '';
            this.userCredential.token = '';

        } catch (error: unknown) {
            if (error instanceof Error) {
                console.warn(error.message);
            };
        } finally {
            // pass

            console.log(this.userCredential);
            console.log(this.ifLoggedIn);
        };
    };
};