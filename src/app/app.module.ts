import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProductoComponent } from './producto/producto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavmenuComponent } from './navmenu/navmenu.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router,RouterModule, Routes} from '@angular/router';





@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ProductoComponent,
    InicioComponent,
    NavmenuComponent
  ,AppComponent,
  UsuarioComponent,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  HttpClientModule,
  CommonModule,
  FormsModule,
  ProductoComponent,
  InicioComponent,
  NavmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
