import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { visibility } from 'src/spa/services/animations';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
//import { User } from 'src/spa/services/user.interface';

@Component({
	selector: 'spa-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.css'],
	animations: [visibility]
})
export class RegistrationComponent implements OnInit {
	registering = false;
	hasAdded = false;
	formError: string;
	constructor(private router: Router, private userService: UserService) { }
	onSubmit(registerForm: NgForm) {
		this.registering = true;
		this.userService.registerUser(registerForm.value).subscribe(() => {
			setTimeout(() => { this.hasAdded = true; }, 1200);
			setTimeout(() => { this.router.navigate(['/sign-in']); }, 2000);
		})
	}

	ngOnInit(): void {
	}

}
