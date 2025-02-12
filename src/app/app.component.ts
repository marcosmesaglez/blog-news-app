import { Component } from '@angular/core';
import { FormNewsComponent } from './form-news/form-news.component';
import { NewsListComponent } from './news-list/news-list.component';
import { INews } from './interfaces/inews';

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
        <app-form-news (newsAdded)="addNews($event)"></app-form-news>
        <app-news-list [newsList]="newsList"></app-news-list>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newsList: INews[] = [
    {
      title: 'Noticia Inicial 1',
      image: 'https://example.com/image1.jpg',
      content: 'Esta es la primera noticia inicial.',
      date: '2023-01-01'
    },
    {
      title: 'Noticia Inicial 2',
      image: 'https://example.com/image2.jpg',
      content: 'Esta es la segunda noticia inicial.',
      date: '2023-02-01'
    }
  ];

  addNews(newNews: INews): void {
    this.newsList.push(newNews);
  }
}
