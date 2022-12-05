import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './routes/app-home/app-home.component';
import { appRoutes } from './routes/app.routes';
import { SettingsComponent } from './routes/settings/settings.component';
import { CarDetailComponent } from './routes/car-detail/car-detail.component';
import { CarListComponent } from './routes/car-list/car-list.component';
import { CarMaintenanceComponent } from './routes/car-maintenance/car-maintenance.component';
import { SpaModule } from '../spa/spa.module';
import { AuthenticatedComponent } from './routes/authenticated/authenticated.component';
import { UserService } from './services/user.service';
import { UserApi } from '../spa/users/user-api';
import { AuthGuard } from './services/auth-guard.service';
import { AppDataService } from './services/app-data.service';
import { CarPanelComponent } from './panels/car-panel/car-panel.component';
import { ImagePanelComponent } from './panels/image-panel/image-panel.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
	declarations: [
		AppComponent,
		AppHomeComponent,
		SettingsComponent,
		CarDetailComponent,
		CarListComponent,
		CarMaintenanceComponent,
		AuthenticatedComponent,
		CarPanelComponent,
		ImagePanelComponent
	],
	providers: [UserService, {
		provide: UserApi, useExisting: UserService
	}, AuthGuard, AppDataService],
	bootstrap: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SpaModule,
		RouterModule.forRoot(appRoutes),
		HttpClientModule
	]
})
export class AppModule { }
