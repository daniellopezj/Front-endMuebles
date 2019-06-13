import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ContainerComponent } from './container/container.component';
import { ProductosComponent } from './productos/productos.component';
import { ComprasComponent } from './compras/compras.component';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VentadialogComponent } from './ventadialog/ventadialog.component';
 @NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ProductosComponent,
    ComprasComponent,
    VentadialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents:[
    VentadialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
