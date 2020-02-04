import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  ruta: String; 
  constructor(private http: HttpClient) { 
    this.ruta = "http://127.0.0.1:8000/api/";
  }

  get(modelo): Observable<any>{
    return this.http.get(this.ruta + modelo);
  }
}
