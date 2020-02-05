import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productos-tabla',
  templateUrl: './productos-tabla.component.html',
  styleUrls: ['./productos-tabla.component.css']
})
export class ProductosTablaComponent implements OnInit {

  constructor(private http: HttpClient) { }

  resultadoPeticion;
  siguiente;
  anterior;

  ngOnInit() {
    this.get('http://127.0.0.1:8000/api/products?sort_by=id');
  }

  get(url){
    this.http.get(url).subscribe( 
      data => { 
        this.resultadoPeticion = data['data'].data;
        this.siguiente = data['data'].next_page_url;
        this.anterior = data['data'].prev_page_url;
        console.log(data);
        console.log(data['data'].next_page_url); 
        console.log(data['data'].prev_page_url); 
      });
  }

  pagina_siguiente(){
    this.get(this.siguiente);
  }

  pagina_anterior(){
    this.get(this.anterior);
  }

}
