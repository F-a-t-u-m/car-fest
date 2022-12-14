import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserApi } from '../user-api';
import { NgForm } from '../../../../node_modules/@angular/forms'
import { visibility } from 'src/spa/services/animations';

@Component({
	selector: 'spa-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.css'],
	animations: [visibility]
})
export class SignInComponent implements OnInit {
	submitting = false;
	formError: string;
	constructor(private userApi: UserApi, private userService: UserService, private router: Router) { }
	onSubmit(signInForm: NgForm): void {
		if (signInForm.valid) {
			this.submitting = true;
			this.formError = null;
			this.userApi.signIn(signInForm.value.email, signInForm.value.password).subscribe((data) => {
				console.log(data);
				this.router.navigate(['/authenticated']);
			}, (error) => {
				this.submitting = false;
				this.formError = error;
			});
		}
	}

	ngOnInit(): void {
	}
}
