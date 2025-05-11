import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactoService } from '../../../utilities/services/contacto.service';

@Component({
  selector: 'app-contacto',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {

  enviado = false;
  error = '';

  public empresaForm: FormGroup = this.fb.group({
    nombreEmpresa: ['', [Validators.required]],
    nombreContacto: ['', [Validators.required]],
    correo: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required]],
    mensaje: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private contactoService: ContactoService
  ) { }

  onSubmit() {
    if (this.empresaForm.valid) {
      this.empresaForm.markAllAsTouched();
      console.log("valor formulario", this.empresaForm.value);

      this.contactoService.enviarFormulario(this.empresaForm.value).subscribe({
        next: () => {
          this.enviado = true;
          this.error = '';
          this.empresaForm.reset();
        },
        error: (err) => {
          this.error = err.message;
          this.enviado = false;
        }
      });


    }
  }

}
