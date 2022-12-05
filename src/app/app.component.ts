import { Component } from '@angular/core';
import { MenuService } from 'src/spa/services/menu.service';
import { SpaConfigService, SpaConfigSettings, Icons } from '../spa/services/spa-config.service';
import { AppMenuItems } from './app.menu';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private spaConfigService: SpaConfigService, private menuService: MenuService) {
		const config: SpaConfigSettings = {
			socialIcons: [
				{ imageFile: './assets/facebook.png', alt: 'Facebook', url: 'http://facebook.com' },
				{ imageFile: './assets/instagram.png', alt: 'Instagram', url: 'http:/www.instagram.com' },
				{ imageFile: './assets/twitter.png', alt: 'Twitter', url: 'http://twitter.com' },
				{ imageFile: './assets/whatsapp.png', alt: 'Whatsapp', url: 'http://www.whatsapp.com' },
			],
			showUserControls: true

		};
		spaConfigService.configure(config);
		menuService.items = AppMenuItems;
	}
}
