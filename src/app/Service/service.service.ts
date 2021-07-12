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

  createConcepto(concepto: Concepto){
    return this.http.post<Concepto>(this.Url, concepto);
  }

  getConceptoId(id: number){
    return this.http.get<Concepto>(this.Url+"/"+id);
  }

  updateConcepto(concepto: Concepto){
    return this.http.put<Concepto>(this.Url+"/"+concepto.id, concepto);
  }

}
