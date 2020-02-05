import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  get(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/products?sort_by=id');
  }

  post(producto): Observable<any>{
    //let params = JSON.stringify(marca);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://127.0.0.1:8000/api/products', producto);
  }

  delete(id){
    return this.http.delete('http://127.0.0.1:8000/api/products'+ id);
  }
}
