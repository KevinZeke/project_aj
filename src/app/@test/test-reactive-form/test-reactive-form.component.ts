import {Component, OnInit} from '@angular/core';
import {
    FormControl,
    FormGroup,
    NgModelGroup,
    FormBuilder,
    Validators,
    AbstractControl,
    FormArray
} from '@angular/forms';
import {FormError} from "../../formError/FormError";
import {Observable} from "rxjs"


@Component({
    selector: 'app-test-reactive-form',
    templateUrl: './test-reactive-form.component.html',
    styleUrls: ['./test-reactive-form.component.css']
})
export class TestReactiveFormComponent implements OnInit {


    private myForm: FormGroup = null;

    private isEqual(group: FormGroup) {
        if (group.get("pwd").value == group.get("pconfirm").value) {
            console.log(group.get("pwd").value + " " + group.get("pconfirm").value);
            return null;
        } else {
            return {equal: true}
        }
    }


    public isEmail(control: FormControl) {
        let reg: RegExp = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/gi;
        if (reg.test(control.value)) {
            return null;
        } else {
            let err = new FormError<string>();
            err.describe = "邮箱格式不正确";
            err.sample = "hello@yahoo.com";
            err.actual = control.value;
            return {emailError: err};
        }
    }

    public isLegalEmailAsync(control: FormControl) {
        return Observable.fromPromise(new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve({isLegal:true});
            },2000)
        }));
    }

    public isArray(array: FormArray) {
        console.log(array.controls);
        return null;
    }

    constructor(private formbuilder: FormBuilder) {
        // this.myForm = new FormGroup({
        //     tel: new FormControl(),
        //     username: new FormControl(),
        //     email: new FormControl(),
        //     password: new FormGroup({
        //         pwd: new FormControl(),
        //         pconfirm: new FormControl()
        //     })
        // })

        this.myForm = formbuilder.group({
            tel: ['123123123', [Validators.required, Validators.min(5)]],
            username: ['123123123', [Validators.required, Validators.minLength(5)]],
            email: ['a@a.com', [Validators.required, this.isEmail], [this.isLegalEmailAsync]],
            password: formbuilder.group({
                pwd: [],
                pconfirm: []
            }, {validator: this.isEqual}),
            hobbies: formbuilder.array([
                [],
                []
            ], this.isArray)
        })
    }

    ngOnInit() {
        // this.myForm.valueChanges.subscribe(value => console.log(value));
    }

    onSubmit() {
        let telCtrl = this.myForm.get('tel');
        let usernameCtrl = this.myForm.get('username');
        let emailCtrl = this.myForm.get('email');
        let passwordCtrl = this.myForm.get('password');
        if (!telCtrl.valid) {
            console.log(telCtrl.errors);
        }
        if (!usernameCtrl.valid) {
            console.log(usernameCtrl.errors);
        }
        if (!emailCtrl.valid) {
            console.log(emailCtrl.errors);
        }
        if (!passwordCtrl.valid) {
            console.log(passwordCtrl.errors)
        }
        console.log(this.myForm.getError('emailError', ['email']));
        if(this.myForm.valid){
            console.log("表单校验正确");
        }
    }

}
