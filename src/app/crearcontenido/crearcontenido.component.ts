import { Component } from '@angular/core';

@Component({
  selector: 'crearcontenido',
  templateUrl: './crearcontenido.component.html',
  styleUrls: ['./crearcontenido.component.css']
})
export class CrearContenidoComponent {
  isFormOpen = false;
  formData = {
    name: '',
    email: '',
    message: '',
    description:''
  };

  openForm() {
    this.isFormOpen = true;
  }

  closeForm() {
    this.isFormOpen = false;
  }

  submitForm() {
    alert(`Formulario enviado:\nNombre: ${this.formData.name}\nCorreo: ${this.formData.email}\nMensaje: ${this.formData.message}`);
    this.isFormOpen = false;
    this.formData = { name: '', email: '', message: '', description: '' }; // Reiniciar datos del formulario
  }
}
