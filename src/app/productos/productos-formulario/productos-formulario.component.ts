import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/Services/productos/productos.service';

@Component({
  selector: 'app-productos-formulario',
  templateUrl: './productos-formulario.component.html',
  styleUrls: ['./productos-formulario.component.css']
})
export class ProductosFormularioComponent implements OnInit {

  ruta;
  nuevoProducto;
  img;
  
  json_producto = {
    'descripcion_products':'',

    'maximo_products':'',
    'minimo_products':'',
    'existencia_products':'0',
    'seguridad_products':'',
    'id_measures':'',
    'id_brands':'',
    'id_warehouses':'',
  }
  constructor(private productoService: ProductosService ) { }

  ngOnInit() {
  }

  registrar(form){
    //this.json_producto.foto_products = this.img;
    const formData = new FormData();    
    /*formData.append("descripcion_products", this.json_producto.descripcion_products);
    formData.append('file', this.img, this.img.name);
    formData.append("maximo_products", this.json_producto.maximo_products);
    formData.append("minimo_products", this.json_producto.minimo_products);
    formData.append("existencia_products", this.json_producto.existencia_products);
    formData.append("seguridad_products", this.json_producto.seguridad_products);
    formData.append("id_measures", this.json_producto.id_measures);
    formData.append("id_brands", this.json_producto.id_brands);
    formData.append("id_warehouses", this.json_producto.id_warehouses);*/
    console.log(this.json_producto);
    this.productoService.post(this.json_producto).subscribe(
      data => {
        this.nuevoProducto = data.data;
        console.log(this.nuevoProducto);
      }
    );
    //form.reset();
  }

  nombreImagen(event){
    /*var array = this.ruta.split('\\'); 
    return array[array.length-1];*/
    //this.img = event.item(0);
    //console.log(this.img);
  }

}
