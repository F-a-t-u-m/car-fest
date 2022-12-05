import { MenuItem } from "src/spa/services/menu.service";

export const AppMenuItems: Array<MenuItem> = [
	{
		text: 'Cars',
		icon: './assets/car.png',
		route: null,
		submenu: [
			{
				text: 'Select',
				icon: './assets/car.png',
				route: null,
				submenu: [
					{
						text: 'Ferrari',
						icon: './assets/car.png',
						route: '/authenticated/car-detail/Ferrari',
						submenu: null
					},
					{
						text: 'Bugatti',
						icon: './assets/car.png',
						route: '/authenticated/car-detail/Bugatti',
						submenu: null
					},
					{
						text: 'Lamborghini',
						icon: './assets/car.png',
						route: '/authenticated/car-detail/Lamborghini',
						submenu: null
					},
					{
						text: 'Maserati',
						icon: './assets/car.png',
						route: '/authenticated/car-detail/Maserati',
						submenu: null
					},
				]
			},
			{
				text: 'Price top',
				icon: './assets/car.png',
				route: '/authenticated/car-list/1',
				submenu: null
			},
			{
				text: 'Top 3',
				icon: './assets/car.png',
				route: '/authenticated/car-list/3',
				submenu: null
			},
			{
				text: 'Top 5',
				icon: './assets/car.png',
				route: '/authenticated/car-list/5',
				submenu: null
			},
		]
	},
	{
		text: 'Maintenance',
		icon: './assets/settings.png',
		route: null,
		submenu: [
			{
				text: 'Car maintenance',
				icon: './assets/settings.png',
				route: '/authenticated/car-maintenance',
				submenu: null
			},
			{
				text: 'Settings',
				icon: './assets/settings.png',
				route: '/authenticated/settings',
				submenu: null
			},
		]
	},
	{
		text: 'Home',
		icon: './assets/home.png',
		route: '/authenticated/home',
		submenu: null
	},
]