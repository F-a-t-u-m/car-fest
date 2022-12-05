import { Injectable } from "@angular/core";
import { UserService } from "./user.service";
import { Car } from "./car-interface";
import { Observable, of, throwError } from "rxjs";
import { delay, map, catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class AppDataService {
	private CarsCollection: Array<Car>; /*= [
	 	{ id: 1, name: "Ford", model: "Focus", price: 4500 },
	 	{ id: 2, name: "Mazda", model: "626", price: 900 },
	 	{ id: 3, name: "Cherry", model: "QQ", price: 1200 },
	 	{ id: 4, name: "Audi", model: "A6", price: 2200 },
	 	{ id: 5, name: "BMW", model: "X5", price: 14500 },
	 	{ id: 6, name: "Fiat", model: "Dolbo", price: 2400 },
	 ]*/
	private url = 'http://localhost:3000/cars'

	constructor(private userService: UserService, private http: HttpClient) {

	}
	// getCars(): Observable<Car[]> {
	// 	return of(this.CarsCollection);
	// }
	// getCar(id: number): Observable<Car> {
	// 	const car = this.CarsCollection.find(item => item.id === id);
	// 	return of(car);
	// }
	// deleteCar(id: number): Observable<any> {
	// 	return of({}).pipe(delay(2000), map(() => this.CarsCollection.splice(this.CarsCollection.findIndex(item => item.id === id), 1)));
	// }
	// createCar(newCar: Car): Observable<any> {
	// 	let id = 0;
	// 	this.CarsCollection.forEach(item => {
	// 		if (item.id >= id) {
	// 			id = item.id + 1;
	// 		}
	// 	});
	// 	newCar.id = id;
	// 	this.CarsCollection.push(newCar);
	// 	return of(newCar);
	// }
	// updateCar(CarForUpdating: Car): Observable<any> {
	// 	const car = this.CarsCollection.find(item => item.id === CarForUpdating.id);
	// 	Object.assign(car, CarForUpdating);
	// 	return of(car).pipe(delay(1200));
	// }
	getCars(): Observable<Car[]> {
		return this.http.get<Car[]>(this.url).pipe(map((response: any) => {
			this.CarsCollection = response;
			return this.CarsCollection;
		}), catchError((error) => throwError('Server do not response')));
	}
	getCar(id: number): Observable<Car> {
		return this.http.get<Car>(this.url).pipe(map((response: any) => {
			return response.filter((itemCar: Car) => itemCar.id === id);
		}), catchError((error) => throwError('Server do not response')));
	}
	deleteCar(id: number): Observable<any> {
		return this.http.delete(this.url + '/' + id).pipe(map((response: any) => {
			response;
		}), delay(1200));
	}
	createCar(newCar: Car): Observable<any> {
		return this.http.post(this.url, newCar).pipe(map((response: any) => {
			response;
		}), delay(1000));
	}
	updateCar(CarForUpdating: Car): Observable<any> {
		return this.http.put(this.url + '/' + CarForUpdating.id, CarForUpdating).pipe(map((response: any) => {
			response;
		}), delay(1000));
	}
}

