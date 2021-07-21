import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from '../app/usuario/usuario.component';
import { ProductoComponent } from './producto/producto.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [

  {path: '', redirectTo: 'inicio',pathMatch:'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'producto', component: ProductoComponent},
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
