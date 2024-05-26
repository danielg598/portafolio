import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()

export class ApiPruebaService {

  URL = environment.api

  constructor(private http: HttpClient) { }

  getCiudades():Observable<any>{
    return this.http.get<any>(`${this.URL}consultas/consulta`);
  }
}
