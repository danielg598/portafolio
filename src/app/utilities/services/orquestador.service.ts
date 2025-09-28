import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { ApiParams } from '../interfaces/orquestador';

@Injectable({
  providedIn: 'root'
})
export class OrquestadorService {

  apiKey = '9cbf36a98f02f39302a87d875b981ba4';

  constructor(private http: HttpClient) { }

  getWeather(params:ApiParams): Observable<any> {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${params.lat}&longitude=${params.lon}&current_weather=true`;
    return this.http.get(url).pipe(
      map((res: any) => res.current_weather),
      catchError(err => of({ error: true, message: 'Error en clima', details: err }))
    );
  }

  getWeatherByCity(params:ApiParams): Observable<any> {
    const url = `https://api.open-meteo.com/v1/forecast?location=${params.city}&current_weather=true`;
    return this.http.get(url).pipe(
      map((res: any) => res.current_weather),
      catchError(err => of({ error: true, message: 'Error en clima', details: err }))
    );
  }

  getTopNews(params:ApiParams): Observable<any> {
    const url = `https://gnews.io/api/v4/top-headlines?lang=es&country=${params.countryCode}&token=${this.apiKey}`;
    return this.http.get(url).pipe(
      map((res: any) => res.articles),
      catchError(err => of([]))
    );
  }

  getExchange(params:ApiParams): Observable<any> {
    const base = params.baseCurrency || 'USD';
    const symbol = params.targetCurrency || 'COP';
    const url = `https://api.exchangerate.host/latest?base=${base}&symbols=${symbol}`;
    return this.http.get(url).pipe(
      map((res: any) => res.rates[symbol]),
      catchError(() => of(null))
    );
  }


}
