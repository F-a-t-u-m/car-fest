import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
	constructor(private router: Router, private userService: UserService) {

	}
	canActivate(): boolean {
		if (!this.userService.isAuthenticated) {
			this.router.navigate(['./sign-in']);
		}
		return this.userService.isAuthenticated;
	}
	canActivateChild() {
		return this.canActivate();
	}
}