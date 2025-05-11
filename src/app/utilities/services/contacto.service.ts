import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { EmpresaContacto } from '../interfaces/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  apiUrl = environment.api

  constructor(private http: HttpClient) { }

  enviarFormulario(empresa: EmpresaContacto): Observable<any> {
    return this.http.post(`${this.apiUrl}Contacto`, empresa).pipe(
      catchError(this.manejarError)
    );
  }

  private manejarError(error: HttpErrorResponse) {
    console.error('Error en la petición:', error);
    return throwError(() => new Error('Ocurrió un error al enviar el formulario.'));
  }
}
