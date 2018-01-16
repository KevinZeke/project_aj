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

let exeCount = 0;


@Component({
    selector: 'app-test-life-2',
    templateUrl: './test-life-2.component.html',
    styleUrls: ['./test-life-2.component.css']
})
export class TestLife2Component implements OnInit {


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

}
