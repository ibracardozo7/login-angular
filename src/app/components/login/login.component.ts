import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router

  ) { 
    this.form = this.formBuilder.group({
      usuario: ["", [Validators.required]],
      password: ["", [Validators.required]],
    })
  }
    
  ngOnInit(): void {
  }

  login() {
    if (this.form.invalid) return
    console.log(this.form.value);
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    if (usuario == "admin" && password == "admin123") {
      console.log("login");
      this.fakeLoading()
    } else {
      this.error()
      this.form.reset()
    }
  }

  error() {
    this._snackBar.open('Usuario o contraseña ingresado son invalidos', '', {
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    })
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(["dashboard"])
      this.loading = false
    }, 1500)
  }
}
