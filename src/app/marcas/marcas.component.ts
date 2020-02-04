import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../Services/peticiones.service';
import { MarcasService } from '../Services/marcas/marcas.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  resultadoPeticion;
  nuevaMarca; 
  json_marca: { "nombre_brands": string; };

  constructor(private marcasService: MarcasService) { 
    this.json_marca = {
      "nombre_brands" : ""
    };
  }

  ngOnInit() {
    this.consultarTodo();
  }

  consultarTodo(){
    this.marcasService.get().subscribe(
      data => { 
        this.resultadoPeticion = data['data']; 
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error){
          console.log('Error cliente o red:', err.error.message);
        } else {
          console.log(`Error servidor remoto. ${err.status} # ${err.message}`);
        }
      });
  }

  registrar(form) {
    this.marcasService.post(this.json_marca).subscribe(
      data => {
        this.nuevaMarca = data.data;
        console.log(this.nuevaMarca);
      });
    //console.log(this.resultadoPeticion);
    form.reset();
  }

  eliminar(marca){
    this.marcasService.delete(marca.id).subscribe(
      data => {
        this.nuevaMarca = data;
        console.log(this.nuevaMarca);
      }
    );
  }



}
