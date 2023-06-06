import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss'],
})
export class CrearUsuarioComponent implements OnInit {
  sexo: any[] = ['Masculino', 'Femenino'];
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) {
    this.form = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
    });
  }

  agregar() {
    console.log(this.form.value);
    const user: Usuario = this.form.value;
    this.usuarioService.agregarUsuario(user)
    this.router.navigate(['/dashboard/usuarios'])
    
    this._snackBar.open('El usuario fue agregado con exitos', '', {
      duration: 1500,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    })
  }

  ngOnInit(): void {}

}
