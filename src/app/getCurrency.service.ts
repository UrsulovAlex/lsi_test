import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ICurrency } from './iterface';

@Injectable({providedIn: 'root'})
export class GetCurrencyService {
    constructor(private http: HttpClient) { }

    getData(currentData?: string | undefined): Observable<ICurrency[]> {
        const queryParams = {format: 'json'}
        let baseUrls: string;
        currentData?.length ? 
            baseUrls = `https://api.nbp.pl/api/exchangerates/tables/A/${currentData}/` : 
            baseUrls = 'https://api.nbp.pl/api/exchangerates/tables/A/';
        return this.http.get<ICurrency[]>(baseUrls, {params: queryParams})
    }
}

