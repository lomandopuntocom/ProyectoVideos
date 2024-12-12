import { Component, ViewChild } from '@angular/core';
import { CrearContenidoComponent } from '../crearcontenido/crearcontenido.component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {


  @ViewChild(CrearContenidoComponent) formPopup!: CrearContenidoComponent;

  openForm(event: Event) {
    event.preventDefault(); // Evitar que el enlace recargue la página
    this.formPopup.openForm(); // Llamar al método `openForm` del componente FormPopup
  }

  isNotificationMenuOpen = false;

  toggleNotificationMenu(event: Event) {
    event.stopPropagation();
    this.isNotificationMenuOpen = !this.isNotificationMenuOpen;
  }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
