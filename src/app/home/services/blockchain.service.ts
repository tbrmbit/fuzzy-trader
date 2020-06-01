import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Tricker } from './models/tricker';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  private URL_BLOCKCHAIN = 'https://blockchain.info/ticker';
  private URL_TOBTC = 'https://blockchain.info/tobtc';

  constructor(
    private http: HttpClient
  ) { }

  public getBicoinPriceList(): Observable<Tricker> {
    return this.http.get<Tricker>(this.URL_BLOCKCHAIN).pipe(catchError(this.handleError));
  }

  public getBtcToPrice(currency: string, value: string): Observable<any> {
    const options = { params: this.toHttpParams({currency: currency, value: value}) };
    return this.http.get<any>(this.URL_TOBTC, options).pipe(catchError(this.handleError));
  }

  private handleError(error: Response | any) {
    console.error(error.error || error);
    return throwError(error.error);
  }

  private toHttpParams(obj: Object): HttpParams {
    return Object.getOwnPropertyNames(obj)
                 .reduce((p, key) => p.set(key, obj[key]), new HttpParams());
  }
}

