import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarModule } from 'primeng-lts/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng-lts/table';
import { ButtonModule } from 'primeng-lts/button';
import { PaginatorModule } from 'primeng-lts/paginator';
import { CardModule } from 'primeng-lts/card';
import { DialogModule } from 'primeng-lts/dialog';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,  
		CalendarModule,
		FormsModule, 
		HttpClientModule,
		TableModule,
		ButtonModule,
		PaginatorModule,
        CardModule,
        DialogModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
