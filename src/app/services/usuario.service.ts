import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuarios: Usuario[] = [
    {usuario: "icardozo", nombre: "Ibrahim", apellido: "Cardozo", sexo: "Masculino"},
    {usuario: "admin", nombre: "Admin", apellido: "Admin", sexo: "Masculino"},
    {usuario: "mgomez", nombre: "Martin", apellido: "Gomez", sexo: "Masculino"},
    {usuario: "ngarcia", nombre: "Nicolas", apellido: "Garcia", sexo: "Masculino"},
    {usuario: "jperez", nombre: "Juan", apellido: "Perez", sexo: "Masculino"},
    {usuario: "mgomez", nombre: "Micaela", apellido: "Gomez", sexo: "Femenino"},
    {usuario: "ngarcia", nombre: "Nicolas", apellido: "Garcia", sexo: "Masculino"},
  ];

  constructor() { }

  getUsuario() {
    return this.listUsuarios.slice()
  }

  deleteUsuario(id: number) {
    this.listUsuarios.splice(id, 1)
  }

  agregarUsuario(data: Usuario) {
    this.listUsuarios.unshift(data)
  }
}
