import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss']
})

export class RegisterPageComponent {
    @ViewChild('f') registerForm: NgForm;

    constructor(private router: Router,
        private route: ActivatedRoute) { }

    //  On submit click, reset field value
    onSubmit() {
        this.registerForm.reset();
    }
    
}