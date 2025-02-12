import { Component } from '@angular/core';
import { FormNewsComponent, News } from './form-news/form-news.component';
import { NewsListComponent } from './news-list/news-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormNewsComponent, NewsListComponent],
  template: `
    <div class="container">
      <header class="header">
        <h1>Blog de Noticias</h1>
      </header>
      <div class="content">
        <!-- Componente de formulario. Se emite un evento cuando se agrega una noticia -->
        <app-form-news (newsAdded)="addNews($event)"></app-form-news>
        <!-- Componente de listado que recibe la lista de noticias -->
        <app-news-list [newsList]="newsList"></app-news-list>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newsList: News[] = [];

  addNews(newNews: News): void {
    this.newsList.push(newNews);
  }
}
