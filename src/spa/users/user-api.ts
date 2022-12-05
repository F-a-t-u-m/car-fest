import { Observable } from "../../../node_modules/rxjs";

export abstract class UserApi {
	signIn: (username: string, password: string) => Observable<any>;
	signOut: () => Observable<any>;
}