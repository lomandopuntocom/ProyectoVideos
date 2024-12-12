import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent {
    isOpen = false;

    notifications = [
      { mensaje: 'Tienes una nueva tarea asignada', leido: false },
      { mensaje: 'El video fue aprobado por el administrador', leido: false },
      { mensaje: 'Tu video se ha rechazado', leido: false }
    ];
  
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  
    toggleReadStatus(index: number) {
      this.notifications[index].leido = !this.notifications[index].leido;
    }
  
    markAllAsRead() {
      this.notifications.forEach(notification => (notification.leido = true));
    }
}
