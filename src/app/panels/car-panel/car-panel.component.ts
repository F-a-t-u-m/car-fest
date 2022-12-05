import { Component, OnInit, Input } from '@angular/core';
import { visibility } from 'src/spa/services/animations';
import { Car } from '../../services/car-interface';

@Component({
	selector: 'app-car-panel',
	templateUrl: './car-panel.component.html',
	styleUrls: ['./car-panel.component.css'],
	animations: [visibility]
})
export class CarPanelComponent implements OnInit {
	@Input() car: Car;
	@Input() index = 1;
	constructor() { }

	ngOnInit(): void {
	}

}
