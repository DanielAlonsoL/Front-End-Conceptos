import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Concepto } from '../Modelo/Concepto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {}

  Url='http://localhost:8080/examen/conceptos';

  getConceptos(){
    return this.http.get<Concepto[]>(this.Url);
  }

}
