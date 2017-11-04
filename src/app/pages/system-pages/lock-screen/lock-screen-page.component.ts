import { Component, ViewChild, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Auth Service
import { AuthService } from '../../../core/auth.service';

@Component({
    selector: 'app-lock-screen-page',
    templateUrl: './lock-screen-page.component.html',
    styleUrls: ['./lock-screen-page.component.scss']
})

export class LockScreenPageComponent implements OnInit {
    user = {
        displayName: '',
        photoURL: 'assets/img/portrait/avatars/avatar-03.png'
    };
    problem_title: Observable<string>;
    solution: Observable<string>;
    action: Observable<string>;

    constructor(
        private acAuth: AuthService,  // Angular Crewnie Authentication
        private route: ActivatedRoute
    ) {  }

    ngOnInit() {
        this.acAuth.afAuth.auth.onAuthStateChanged( user => {
            if (user) {
                this.user.displayName = user.displayName;
                this.user.photoURL = user.photoURL ? user.photoURL : this.user.photoURL;
            } else {

            }
        });
        // Capture the session problem_title if available
        this.problem_title = this.route
        .queryParamMap
        .map(params => params.get('problem_title') || 'None');

        // Capture the session solution if available
        this.solution = this.route
        .queryParamMap
        .map(params => params.get('solution') || 'None');

        // Capture the session action if available
        this.action = this.route
        .queryParamMap
        .map(params => params.get('action') || 'None');

    }

}

