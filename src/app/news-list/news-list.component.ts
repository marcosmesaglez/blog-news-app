import { Component, Input } from '@angular/core';
import { News } from '../form-news/form-news.component';

@Component({
  selector: 'app-news-list',
  standalone: true,
  template: `
    <section class="news-list">
      <h2>Listado de Noticias</h2>
      <div class="news-item" *ngFor="let news of newsList">
        <h3>{{ news.title }}</h3>
        <p>{{ news.content }}</p>
      </div>
    </section>
  `,
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent {
  @Input() newsList: News[] = [];
}
