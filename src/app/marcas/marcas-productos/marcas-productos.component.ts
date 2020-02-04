import { Component, OnInit } from '@angular/core';
import { MarcasService } from 'src/app/Services/marcas/marcas.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-marcas-productos',
  templateUrl: './marcas-productos.component.html',
  styleUrls: ['./marcas-productos.component.css']
})
export class MarcasProductosComponent implements OnInit {

  resultadoPeticion;
  id;

  constructor(private marcasService: MarcasService, private route: ActivatedRoute) {   }

  ngOnInit() {
    //this.consultar();
    this.route.paramMap.subscribe((params: ParamMap) => {
       this.id = params.get('id');
    });
    this.consultar();
  }

  consultar(){
    this.marcasService.getDetail(this.id).subscribe(
      data => { 
        this.resultadoPeticion = data['data']; 
      });
  }

}
