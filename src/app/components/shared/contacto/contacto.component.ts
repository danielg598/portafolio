import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactoService } from '../../../utilities/services/contacto.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-contacto',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent implements OnInit, OnDestroy{

  enviado = false;
  error = '';
  cargando: boolean = false;
  mensajesCarga: string[] = [
    'La respuesta demora 1 minuto...',
    'Espere por favor...',
    'Casi terminamos, gracias por esperar...',
    'No abandone la pestaña ya casi termina...'
  ];
  mensajeActual: string = '';
  private mensajeIndex: number = 0;
  private intervalId: any;


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

  ngOnInit(): void {
    this.iniciarMensajesCarga();
  }

  ngOnDestroy(): void {
    this.detenerMensajesCarga();
  }

  iniciarMensajesCarga() {
    this.mensajeActual = this.mensajesCarga[0];
    this.intervalId = setInterval(() => {
      this.mensajeIndex = (this.mensajeIndex + 1) % this.mensajesCarga.length;
      this.mensajeActual = this.mensajesCarga[this.mensajeIndex];
    }, 10000); // cada 10 segundos
  }

  detenerMensajesCarga() {
    clearInterval(this.intervalId);
  }

  onSubmit() {
    if (this.empresaForm.valid) {
      this.empresaForm.markAllAsTouched();
      this.cargando = true;
      this.iniciarMensajesCarga();
      console.log("valor formulario", this.empresaForm.value);

      this.contactoService.enviarFormulario(this.empresaForm.value)
        .pipe(
          finalize(() => {
            this.detenerMensajesCarga();
            this.cargando = false;
          })
        ).subscribe({
          next: () => {
            this.enviado = true;
            this.empresaForm.reset();
          },
          error: (err) => {
            this.error = err.message;
          }
        });




    }
  }

}
