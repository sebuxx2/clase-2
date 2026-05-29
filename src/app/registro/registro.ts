import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

  enviado = false;

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {

    this.formulario = this.fb.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      mensaje: ['']
    });
  }

  enviar() {

    if (this.formulario.valid) {

      console.log(this.formulario.value);

      this.enviado = true;

      this.formulario.reset();
    }
  }

  getErroresNombre() {

    const errores = [];

    const control = this.formulario.get('nombre');

    if (control?.hasError('required')) {
      errores.push('El nombre es obligatorio');
    }

    if (control?.hasError('minlength')) {
      errores.push('Debe tener al menos 3 caracteres');
    }

    return errores;
  }

  getErroresEmail() {

    const errores = [];

    const control = this.formulario.get('email');

    if (control?.hasError('required')) {
      errores.push('El email es obligatorio');
    }

    if (control?.hasError('email')) {
      errores.push('Formato de email inválido');
    }

    return errores;
  }

}