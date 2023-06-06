import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';

import {MatTableDataSource} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

import { UsuarioService } from 'src/app/services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  listUsuarios: Usuario[] = []

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private usuarioService: UsuarioService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.cargarUsuario()
  }

  cargarUsuario() {
    this.listUsuarios = this.usuarioService.getUsuario()
    this.dataSource = new MatTableDataSource(this.listUsuarios)
  }

  eliminarUsuario(id: number) {
    console.log(id);
    this.usuarioService.deleteUsuario(id)
    this.cargarUsuario()

    this._snackBar.open('El usuario fue eliminado con exitos', '', {
      duration: 1500,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
