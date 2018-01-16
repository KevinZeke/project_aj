import {
    Component,
    OnInit,
    OnChanges,
    OnDestroy,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    DoCheck,
    SimpleChanges,
    Input,
} from '@angular/core';

let exeCount = 1;

@Component({
    selector: 'app-test-life',
    templateUrl: './test-life.component.html',
    styleUrls: ['./test-life.component.css']
})
export class TestLifeComponent implements OnInit, OnChanges, OnDestroy, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck {


    @Input()
    private name: string;

    @Input()
    private age: number;

    @Input()
    private user: { user: string, age: number };

    ngOnChanges(changes: SimpleChanges): void {
        console.log(
            `#${exeCount++} ngOnChanges: 
            now input name is ${JSON.stringify(changes)}
            prev input name is ${JSON.stringify(changes)}
            `
        );
    }

    ngOnDestroy(): void {
        console.log(`#${exeCount++} ngOnDestroy`);
    }

    ngAfterContentChecked(): void {
        console.log(`#${exeCount++} ngAfterContentChecked`);

    }

    ngAfterContentInit(): void {
        console.log(`#${exeCount++} ngAfterContentInit`);

    }

    ngAfterViewChecked(): void {
        console.log(`#${exeCount++} ngAfterViewChecked`);

    }

    ngAfterViewInit(): void {
        console.log(`#${exeCount++} ngAfterViewInit`);

    }

    ngDoCheck(): void {
        console.log(`#${exeCount++} ngDoCheck`);

    }

    constructor() {
        console.log(`#${exeCount++} constructor`);
    }

    ngOnInit() {
        console.log(`#${exeCount++} ngOnInit`);

    }

    clickTest(){
    }

}
