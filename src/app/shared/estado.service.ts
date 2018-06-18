
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class EstadoService {

  constructor(private http: HttpClient) {
  }

  getEstados(): Observable<EstadoModel[]> {
    return this.http.get<EstadoModel[]>(environment.apiUrl + '/Estados');    
  }   

}
