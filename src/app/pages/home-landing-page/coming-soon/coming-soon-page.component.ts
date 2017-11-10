import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-coming-soon-page',
    templateUrl: './coming-soon-page.component.html',
    styleUrls: ['./coming-soon-page.component.scss']
})

export class ComingSoonPageComponent implements OnInit {

    ngOnInit() {
        // countdown JS
        $.getScript('./assets/js/coming-soon/jquery.countdown.min.js');
        // coming soon JS start working after page load
        $.getScript('./assets/js/coming-soon/coming-soon.js');
    }
    
    constructor(private router: Router,
        private route: ActivatedRoute) { }
        
}