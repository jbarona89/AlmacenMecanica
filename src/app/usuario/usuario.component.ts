import { Component,OnInit} from '@angular/core';
import {FormBuilder ,FormGroup, Validators} from '@angular/forms';
import {UsuarioService} from '../services/usuario/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarioForm!: FormGroup;
  usuario:any;
  

constructor(

  public fb:FormBuilder,
  public usuarioService:UsuarioService,
  
  
  
){



}
  ngOnInit(): void {
    
    this.usuarioForm=this.fb.group({
      idusuario:[''],
      nombre :['',Validators.required],
      edad :['',Validators.required],
      cargo :['',Validators.required],
      fechaingreso :['',Validators.required],


    });;


    this.usuarioService.getUsuarios().subscribe(resp=>{

      this.usuario=resp;
    },

    error=>{console.error(error)}
    );
   


  }


    guardar():void{

      this.usuarioService.saveusuario(this.usuarioForm.value).subscribe(resp=>{
      this.usuario=this.usuario.filter((usuario: { idusuario: any; })=>resp.idusuario!==usuario.idusuario);
      this.usuarioForm.reset();
      this.usuario.push(resp);

      },
         error=>{console.error(error)}
      )

    }
    
    EliminarUsuario(usuario: any):void{

      this.usuarioService.ElimnarUsuario(usuario.idusuario).subscribe(resp=>{
        this.usuario.pop(resp);
  
        },
           error=>{console.error(error)}
        )

    }

    Editar (usuario: any){

      this.usuarioForm.setValue({
        idusuario:usuario.idusuario,
        nombre : usuario.nombre,
        edad : usuario.edad,
        cargo : usuario.cargo,
        fechaingreso : usuario.fechaingreso,
      })

    }



}




  

