import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'lem-auth-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    /**
     * Form group
     */
    form: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
        private _authService: AuthService
    ) {
        this._createForm();
    }

    ngOnInit() {
    }

    /**
     * Create form
     */
    private _createForm() {
        this.form = this._formBuilder.group({
            login: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    /**
     * Send data to API
     */
    login() {
        if (this.form.invalid) {
            return;
        }

        this._authService.getToken(this.form.getRawValue()).subscribe(
            data => console.log(data),
            err => console.log(err)
        );
    }
}
