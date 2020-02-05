import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarcasComponent } from './marcas/marcas.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AlmacenesComponent } from './almacenes/almacenes.component';
import { ProductosComponent } from './productos/productos.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BarraComponent } from './barra/barra.component';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';


import { MarcasService } from './Services/marcas/marcas.service';
import { MarcasProductosComponent } from './marcas/marcas-productos/marcas-productos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductosTablaComponent } from './productos/productos-tabla/productos-tabla.component';
import { ProductosFormularioComponent } from './productos/productos-formulario/productos-formulario.component';

const appRoutes: Routes = [
    { path: 'marcas', component: MarcasComponent, },
    { path: 'marcas/:id', component: MarcasProductosComponent},
    { path: 'almacenes', component: AlmacenesComponent},
    { path: 'productos', component: ProductosComponent},
    { path: '', redirectTo: '/productos', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    MarcasComponent,
    NotFoundComponent,
    AlmacenesComponent,
    ProductosComponent,
    BarraComponent,
    MarcasProductosComponent,
    ProductosTablaComponent,
    ProductosFormularioComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    
  ],
  providers: [MarcasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
