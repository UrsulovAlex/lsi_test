import { Component,  OnDestroy,  OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { GetCurrencyService } from './getCurrency.service';
import { ICurrency, IRates } from './iterface';
import { ThemeService } from './theme.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [DatePipe]
})
export class AppComponent implements OnInit, OnDestroy {
	date!: Date | null;
	currencyDate: IRates[] = [];
	errorText = '';
	displayError = false;
	private _destroy$ = new Subject();

	constructor(
		private _datepipe: DatePipe,
		private _getCurrencyService: GetCurrencyService,
		private _themeService: ThemeService){}

	ngOnInit() {
		this.getData();
	}

	getData(): void {
		this._getCurrencyService.getData().pipe(takeUntil(this._destroy$))
		.subscribe((result: ICurrency[]) => {
			this.currencyDate = result[0].rates;
		},
		err => {
			this.errorText = err.statusText;
			this.showDialog();
		},)
	}

	setDate(): void {
		let dataTransform = this._datepipe.transform(this.date, 'yyyy-MM-dd');
		this._getCurrencyService.getData(dataTransform?.toString()).pipe(takeUntil(this._destroy$))
		.subscribe((result: ICurrency[]) => {
			this.currencyDate = result[0].rates;
		},
			err => {
				console.log('error', err.statusText)
				this.errorText = err.statusText;
				this.showDialog();
			},
		);
	}

	resetDate(): void{
		this.date = null;
		this.getData();
	}

	showDialog() {
        this.displayError = true;
    }

	changeTheme(theme: string): void {
        this._themeService.switchTheme(theme);
    }

	ngOnDestroy(): void {
		this._destroy$.next();
		this._destroy$.complete();
	}
}

