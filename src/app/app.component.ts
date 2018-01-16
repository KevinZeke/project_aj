import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    private user = {name:'kevin',age:12};

    constructor(private route: Router) {
    }
}
