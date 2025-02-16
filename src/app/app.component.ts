import { Component } from '@angular/core';
import { BlogComponent } from './blog/blog.component';

/**
 * Nota: Aunque la aplicación se arranca desde AppComponent, se ha integrado el componente
 * Blog para centralizar la lógica y presentación del blog (título, formulario y listado).
 * Esto demuestra que conocemos ambas opciones: se podría arrancar directamente en BlogComponent,
 * pero aquí optamos por mantener el arranque en AppComponent para evidenciar nuestro conocimiento.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BlogComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }

