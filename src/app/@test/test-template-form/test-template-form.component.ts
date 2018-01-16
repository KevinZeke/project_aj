import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-test-template-form',
    templateUrl: './test-template-form.component.html',
    styleUrls: ['./test-template-form.component.css']
})
export class TestTemplateFormComponent implements OnInit {

    @ViewChild("myForm")
    private myForm: FormGroup;

    @ViewChild("username")
    private username: FormControl;

    constructor() {
    }

    ngOnInit() {
    }

    submit() {
    }

}
