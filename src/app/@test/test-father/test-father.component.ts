import {Component, OnInit, ViewChild, ElementRef,AfterViewInit,AfterViewChecked,AfterContentInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {TestSonComponent} from "../test-son/test-son.component";

@Component({
    selector: 'app-test-father',
    templateUrl: './test-father.component.html',
    styleUrls: ['./test-father.component.css']
})
export class TestFatherComponent implements OnInit,AfterViewInit {

    private title:string = "fatehr";

    private fatherControl: FormControl = new FormControl();

    private toSon: any;

    private sonInfo: any;

    @ViewChild("child")
    private child: TestSonComponent;

    @ViewChild("p")
    private p:ElementRef;

    constructor() {
        this.fatherControl.valueChanges.subscribe(value => this.toSon = value);
    }

    private fromSon($event) {
        this.sonInfo = $event;
    }

    ngOnInit() {
        console.log(this.child);
        console.log(this.p.nativeElement.innerText);
    }

    ngAfterViewInit(): void {
        setTimeout(()=>{this.title = "father again";},0);
    }

}
