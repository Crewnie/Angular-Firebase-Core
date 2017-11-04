import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class AuthService {

    public isLogin: boolean;

    constructor(
        public afAuth: AngularFireAuth
    ) {
        this.afAuth.auth.onAuthStateChanged(this.getCurrentUser)
    }
    createUserWithEmailAndPassword(email, password) {
        this.afAuth.auth.setPersistence('local').catch(e => {
            console.log('Error code: ' + e.code + ', error message: ' + e.message);
        });
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    }
    getCurrentUser(user) {
        return user;
    }
}
