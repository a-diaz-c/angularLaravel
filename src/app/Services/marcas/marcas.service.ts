import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor(private http: HttpClient) { }

  get(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/brands');
  }

  post(marca): Observable<any>{
    //let params = JSON.stringify(marca);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://127.0.0.1:8000/api/brands', marca);
  }

  delete(id){
    return this.http.delete('http://127.0.0.1:8000/api/brands/'+ id);
  }

  getDetail(id): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/brands/' + id);
  }
}
