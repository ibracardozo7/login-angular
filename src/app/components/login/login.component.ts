import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.form = this.formBuilder.group({
      usuario: ["", [Validators.required]],
      password: ["", [Validators.required]],
    })
  }
    
  ngOnInit(): void {
  }

  login() {
    if (!this.form.invalid) {
      console.log(this.form.value);
    }
  }
}
