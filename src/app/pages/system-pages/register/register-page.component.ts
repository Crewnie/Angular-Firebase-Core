import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AsyncPipe } from '@angular/common';

// Auth Service
import { AuthService } from '../../../core/auth.service';

import swal from 'sweetalert2';


@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss']
})

export class RegisterPageComponent implements OnInit {
    @ViewChild('f') registerForm: NgForm;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private acAuth: AuthService  // Angular Crewnie Authentication
    ) {  }

    ngOnInit() {

    }

    //  On submit click, the user registration process starts
    onSubmit() {

        const stageName: string = this.registerForm.value.sname;
        const email: string = this.registerForm.value.inputEmail;
        const password: string = this.registerForm.value.inputPass;

        this.acAuth.createUserWithEmailAndPassword(email, password)
            .then(crewnieUser => {
                // We inform the user that their registration was correct.
                swal('Good job!', 'Now just check your email.', 'success').then( () => {
                    this.router.navigate(['/users/me'], { relativeTo: this.route.parent });
                });

                crewnieUser.updateProfile({
                    displayName: stageName,
                }).then( () => {
                    console.log('Update successful.');
                }).catch( () => {
                    // tslint:disable-next-line:quotemark
                    console.log("An error happened when we put the user's stage name.");
                });
                console.log(crewnieUser);
                crewnieUser.sendEmailVerification().then( () => {
                    console.log('Email sent successful.');
                  }).catch(function(error) {
                    console.log('An error happened when we send the verification email');
                  });
            })
            .catch(e => {
                 // We inform the user that something went wrong with their registration
                 swal('Something went wrong.', e.message, 'error');
            }
        );

    }
}
